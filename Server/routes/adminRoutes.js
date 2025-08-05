const express = require('express');
const {
  loginAdmin,
  signupAdmin,
  getAdmin,
} = require('../controllers/adminControllers');
const { verifyAdmin } = require('../Middleware/verifyAdmin');

const router = express.Router();

router.post('/login', loginAdmin);
router.post('/signup', verifyAdmin, signupAdmin);
router.get('/', getAdmin);

module.exports = router;
