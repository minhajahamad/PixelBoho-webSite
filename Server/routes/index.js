const express = require('express');
const applicationRoutes = require('./applicationRoutes');
const jobOpeningsRoutes = require('./jobOpeningsRoutes');
const messageRoutes = require('./messageRoutes');
const adminRoutes = require('./adminRoutes');

const router = express.Router();

router.use('/applications', applicationRoutes);
router.use('/openings', jobOpeningsRoutes);
router.use('/messages', messageRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
