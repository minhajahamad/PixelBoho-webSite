const express = require('express');
const {
  getSeoBySlug,
  deleteSeo,
  updateSeo,
  createSeo,
  getAllSeo,
} = require('../controllers/seoControllers');

const router = express.Router();

// SEO CRUD
router.get('/', getAllSeo);
router.get('/:slug', getSeoBySlug);
router.post('/', createSeo);
router.patch('/:slug', updateSeo);
router.delete('/:slug', deleteSeo);

module.exports = router;
