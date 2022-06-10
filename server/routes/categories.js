const router = require("express").Router();

const {
  createCategory,
  showCategories,
  deleteCategory,
} = require("../controllers/categories");

router.post("/createCategory", createCategory);
router.get("/showCategories", showCategories);
router.delete("/deleteCategory", deleteCategory);

module.exports = router;
