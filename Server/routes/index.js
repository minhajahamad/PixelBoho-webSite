const express = require('express');
const applicationRoutes = require('./applicationRoutes');
const jobOpeningsRoutes = require('./jobOpeningsRoutes');
const messageRoutes = require('./messageRoutes');
const adminRoutes = require('./adminRoutes');
const seoRoutes = require('./seoRoutes');
// const profileRoutes=require('./profileRoutes')

const router = express.Router();

router.use('/applications', applicationRoutes);
router.use('/openings', jobOpeningsRoutes);
router.use('/messages', messageRoutes);
router.use('/admin', adminRoutes);
router.use('/seo', seoRoutes);
// router.use('/profile', profileRoutes);

module.exports = router;
