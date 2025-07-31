const express = require('express');
const {
  submitApplication,
  getApplication,
} = require('../controllers/applicationControllers');
const { getOpenings } = require('../controllers/jobOpeningsControllers');

const router = express.Router();

router.post('/', submitApplication);
router.get('/', getApplication);

module.exports = router;
