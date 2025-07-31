const express = require('express');
const {
  postApplication,
  getApplication,
} = require('../controllers/applicationControllers');

const router = express.Router();

router.post('/', postApplication);
router.get('/', getApplication);

module.exports = router;
