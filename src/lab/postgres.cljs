(ns lab.postgres
  (:require [lab.core :as core]
            [lab.console :as console]
            [lab.bencode :as b]
            [clojure.walk :as walk]))

(def send! (partial core/send! :postgres))
(defonce connection-status (atom {:queries {} :connected false}))

(defmulti handle-message (fn [{:keys [command]}] command))

(defmethod handle-message "connect"
  [{:keys [success]}]
  (swap! connection-status assoc :connected true))

(defmethod handle-message "query"
  [{:keys [id rows error]}]
  (if-not error
    (when-let [callback (get-in @connection-status [:queries id :callback])]
      (callback rows))
    ;; Show query error somewhere
    )
  (swap! connection-status update :queries dissoc id))
(defmethod handle-message :default
  [params]
  (js/alert (str "Failed to find handler!" params)))

(defn connect! [params]
  (core/listen! :postgres (fn [data] 
                            (js/alert "Got me" data)
                            (when-let [decoded (->>
                                                 (b/read-bencode data)
                                                 (walk/keywordize-keys)
                                                 (walk/postwalk (fn [item]
                                                                  (if (string? item)
                                                                    (js/decodeURIComponent item)
                                                                    item))))]
                              (js/alert (str "decoded" decoded))
                              (handle-message decoded))))
  (send! {:command :connect :params params}))
(defn query! [{:keys [id] :as params}]
  (send! {:command :query :params (select-keys params [:id :query])})
  (swap! connection-status update :queries assoc id params))

(comment
  (core/connect! {})
  (connect! "dbname=maharj")
  (query! {:query "select task, done from todo"
           :id 1
           :callback (fn [result]
                       (console/append-vec! :view result :titles ["task" "done"]))}))
