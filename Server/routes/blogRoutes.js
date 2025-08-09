const express = require('express');
const {
  getBlog,
  postBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogControllers');

const router = express.Router();
router.get('/', getBlog);
router.post('/', postBlog);
router.patch('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;
