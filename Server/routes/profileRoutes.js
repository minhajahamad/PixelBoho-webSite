const express = require('express');
const {
  getProfile,
  deletProfile,
  postProfile,
  updateProfile,
} = require('../controllers/profileControllers');

const router = express.Router();

router.get('/',getProfile)
router.post('/',postProfile)
router.delete('/:id',deletProfile)
router.patch('/:id',updateProfile)

module.exports = router;
