const express = require('express');
const {
  postApplication,
  getApplication,
  deleteApplication,
} = require('../controllers/applicationControllers');

const router = express.Router();

router.post('/', postApplication);
router.get('/', getApplication);
router.delete('/:id', deleteApplication);

module.exports = router;
