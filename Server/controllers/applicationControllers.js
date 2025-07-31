const Application = require('../db/models/applicationSchema');

module.exports.postApplication = async (req, res) => {
  try {
    // const { name, email, phone, message } = req.body;
    // const resumeUrl = req.file ? `/uploads/${req.file.filename}` : '';

    const dbResponse = await Application.create(req.body);

    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.getApplication = async (req, res) => {
  try {
    const dbResonse = await Application.find().populate('jobId');
    res.status(201).json(dbResonse);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};
