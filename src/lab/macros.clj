(ns lab.macros)

(defmacro with-view [& body]
  `(do
     ~@(for [[f & params] body]
         (cons f (cons :view params)))))

(defmacro markers [view & points]
  `(do
     ~@(for [point (partition 2 points)]
        `(lab.map/add-marker! ~view ~@point))))
