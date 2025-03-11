const {getCategory,postCategory,putCategory,deleteCategory} = require("../controller/catogaryControler")
const router = require("express").Router()

router.get("/",getCategory)
router.post("/",postCategory)
router.put("/:id",putCategory)
router.delete("/:id",deleteCategory)

module.exports = router