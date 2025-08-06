const express = require('express');
const multer = require('multer');
const {
  loginAdmin,
  signupAdmin,
  getAdmin,
  getAdminProfile,
  updateAdminProfile,
  updatePassword,
  checkEmailExists,
} = require('../controllers/adminControllers');
const { verifyAdmin } = require('../Middleware/verifyAdmin');

const router = express.Router();

// Multer setup for profile pictures
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/profile-pictures'); // Make sure 'uploads/profile-pictures' folder exists
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    // Accept only image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

router.post('/login', loginAdmin);
router.post('/signup', verifyAdmin, signupAdmin);

router.get('/profile', verifyAdmin, getAdminProfile);
router.patch('/profile', verifyAdmin, updateAdminProfile);
router.post(
  '/profile/upload-picture',
  verifyAdmin,
  upload.single('profilePicture'),
  updateAdminProfile
);
router.patch('/update-password', updatePassword);
router.post('/check-email', checkEmailExists);

module.exports = router;
