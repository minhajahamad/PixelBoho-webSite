const express = require('express');
const applicationRoutes = require('./applicationRoutes');
const jobOpeningsRoutes = require('./jobOpeningsRoutes');

const router = express.Router();

router.use('/applications', applicationRoutes);
router.use('/openings', jobOpeningsRoutes);

module.exports = router;
