const express = require('express');
const { loginAdmin, signupAdmin } = require('../controllers/adminControllers');
const { verifyAdmin } = require('../Middleware/verifyAdmin');

const router = express.Router();

router.post('/login', loginAdmin);
router.post('/signup', verifyAdmin, signupAdmin);

module.exports = router;
