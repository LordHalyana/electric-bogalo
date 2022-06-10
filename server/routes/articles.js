const router = require("express").Router();

//import controllers
const {
  createArticle,
  articlesFeed,
  getArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articles");

router.get("/feed", articlesFeed);
router.post("/createArticles", createArticle);
router.get("/:_id", getArticle);
router.post("/:_id/update", updateArticle);
router.delete("/:_id/delete", deleteArticle);

module.exports = router;
