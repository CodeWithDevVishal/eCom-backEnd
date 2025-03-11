const route = require("express").Router()
const {getProduct,postProduct,putProduct,deleteProduct} = require("../controller/productController")
const isAdmin = require("../middlerWare/admin")

route.get("/",getProduct)
route.post("/",isAdmin,postProduct)
// route.post("/by",getProduct)
route.put("/:id",isAdmin,putProduct)
route.delete("/:id",isAdmin,deleteProduct)

module.exports = route