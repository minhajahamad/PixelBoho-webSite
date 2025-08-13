const Blog = require('../db/models/blogSchema');

const fs = require('fs');
const path = require('path');

module.exports.getBlog = async (req, res) => {
  try {
    const dbResponse = await Blog.find().sort({ createdAt: -1 });
    const totalCount = dbResponse.length;
    res.status(201).json({ totalCount, data: dbResponse });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const dbResponse = await Blog.findById(id);

    if (!dbResponse) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(201).json({ data: dbResponse });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.postBlog = async (req, res) => {
  try {
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const imageUrl = req.file
      ? `${baseUrl}/uploads/blogs/${req.file.filename}`
      : '';
    const dbResponse = await Blog.create({
      ...req.body,
      image: imageUrl, // Save image path in DB
    });
    res
      .status(201)
      .json({ message: 'Blog added succesfully', data: dbResponse });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const oldBlog = await Blog.findById(id);
    if (!oldBlog) return res.status(404).json({ message: 'Blog not found' });

    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const imageUrl = req.file
      ? `${baseUrl}/uploads/blogs/${req.file.filename}`
      : undefined;

    const updateData = { ...req.body };
    if (imageUrl) {
      deleteFile(oldBlog.image);
      updateData.image = imageUrl;
    }

    const dbResponse = await Blog.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    res.status(201).json({
      message: 'Blog updated successfully',
      data: dbResponse,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    // Delete associated image
    deleteFile(blog.image);

    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

// Helper to delete file by URL
const deleteFile = fileUrl => {
  if (!fileUrl) return;
  // Convert URL to relative file path
  const filePath = path.join(
    __dirname,
    '..',
    '..',
    fileUrl.replace(/^.*\/uploads\//, 'uploads/')
  );
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};
