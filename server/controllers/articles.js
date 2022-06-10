//import model
const Articles = require("../models/articles");

const createArticle = async (req, res) => {
  const { title, description, content, categories } = req.body;
  //console.log(title, description, content, categories);
  //validation of data in order to create an article
  if (!content.length) {
    return res.json({
      error: "Article cannot be empty",
    });
  }
  if (!title) {
    return res.json({
      error: "Article needs a title",
    });
  }
  const exist = await Articles.findOne({ title });
  if (exist) {
    return res.json({
      error: "Article already exists",
    });
  }

  try {
    const article = new Articles({ title, description, content, categories });
    await article.save();
    res.send("Article created successfully");
    //console.log("New article created");
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

//creating a feed in home page to show all articles sorted by latest
const articlesFeed = async (req, res) => {
  try {
    const articles = await Articles.find().sort({ createdAt: -1 });
    res.json(articles);
  } catch (err) {
    console.log(err);
  }
};

const getArticle = async (req, res) => {
  try {
    const article = await Articles.findById(req.params._id);
    //console.log("i am in backend with", article);
    res.json(article);
  } catch (err) {
    console.log(err);
  }
};

const updateArticle = async (req, res) => {
  const { _id } = req.params;
  const content = req.body.content;
  console.log(content);
  try {
    if (!content) {
      return res.json({ error: "Article cannot be empty" });
    } else {
      const article = await Articles.findByIdAndUpdate(
        _id,
        { content },
        { new: true }
      );
      res.json(article);
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteArticle = async (req, res) => {
  try {
    const article = await Articles.findByIdAndDelete(req.params._id);
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createArticle,
  articlesFeed,
  updateArticle,
  getArticle,
  deleteArticle,
};
