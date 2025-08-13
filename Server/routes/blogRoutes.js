const express = require('express');
const multer = require('multer');
const {
  getBlog,
  postBlog,
  updateBlog,
  deleteBlog,
  getBlogById
} = require('../controllers/blogControllers');

const router = express.Router();

// Multer setup for blog images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/blogs'); // make sure this folder exists
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});
const upload = multer({ storage });
router.get('/', getBlog);
router.get('/:id', getBlogById);
router.post('/', upload.single('image'), postBlog);
router.patch('/:id',upload.single('image'), updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;
