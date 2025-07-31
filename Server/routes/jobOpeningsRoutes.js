const express = require('express');
const {
  postOpenings,
  getOpenings,
  deleteOpenings,
  updateOpenings
} = require('../controllers/jobOpeningsControllers');

const router = express.Router();

router.get('/', getOpenings);
router.post('/', postOpenings);
router.delete('/:id', deleteOpenings);
router.patch('/:id',updateOpenings)

module.exports = router;
