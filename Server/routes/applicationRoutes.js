const express = require('express');
const multer = require('multer');
const {
  postApplication,
  getApplication,
  deleteApplication,
} = require('../controllers/applicationControllers');

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/resumes'); // Make sure 'uploads/resumes' folder exists
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Routes
router.post('/', upload.single('resume'), postApplication); // handles file + form data
router.get('/', getApplication);
router.delete('/:id', deleteApplication);

module.exports = router;
