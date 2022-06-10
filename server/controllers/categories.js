//import model
const Categories = require("../models/categories");

const createCategory = async (req, res) => {
  const category = req.body;
  //console.log(category);
  //validation of data in order to create a category
  if (!category) {
    return res.json({
      error: "Category field cannot be empty",
    });
  }
  const exist = await Categories.findOne(category);
  if (exist) {
    return res.json({
      error: "Category already exists!",
    });
  }
  try {
    const newCategory = new Categories(category);
    await newCategory.save();
    res.status(200).json({ msg: "Category created successfully" });
    //console.log("New category created", category);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const showCategories = async (req, res) => {
  try {
    const categories = await Categories.find().sort({ createdAt: -1 });
    res.json(categories);
  } catch (err) {
    console.log(err);
  }
};

const deleteCategory = async (req, res) => {
  const data = req.body;
  //console.log(data.category);
  if (!data) {
    return res.json({
      error: "Category field cannot be empty",
    });
  }
  try {
    const exists = await Categories.findOne(data);
    if (data.category.match(/^[0-9a-fA-F]{24}$/)) {
      await Categories.findByIdAndDelete(data.category);
      res.status(200).json({ msg: "Category deleted successfully" });
    } else if (exists) {
      await Categories.deleteOne(data);
      res.status(200).json({ msg: "Category deleted successfully" });
    } else {
      return res.json({
        error: "Category does not exist!",
      });
    }
    //console.log("Category deleted", data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createCategory,
  showCategories,
  deleteCategory,
};
