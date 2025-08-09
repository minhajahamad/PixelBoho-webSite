const Blog = require('../db/models/blogSchema');

module.exports.getBlog = async (req, res) => {
  try {
    const dbResponse = await Blog.find();
    res.status(201).json(dbResponse);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.postBlog = async (req, res) => {
  try {
    const dbResponse = await Blog.create(req.body);
    res.status(201).json({ message: 'Blog added succesfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const dbResponse = await Blog.findByIdAndUpdate(id, body);
    res.status(201).json({ message: 'Blog updated succesfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const dbResponse = await Blog.findByIdAndDelete(id);
    res.status(201).json({ message: 'Blog deleted succesfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};
