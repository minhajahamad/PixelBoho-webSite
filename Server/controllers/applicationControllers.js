const Application = require('../db/models/applicationSchema');

module.exports.postApplication = async (req, res) => {
  try {
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const resumeUrl = req.file
      ? `${baseUrl}/uploads/resumes/${req.file.filename}`
      : '';
    const dbResponse = await Application.create({
      ...req.body,
      resume: resumeUrl, //  Save resume path in DB
    });

    res.status(201).json({
      message: 'Application submitted successfully',
      data: dbResponse,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.getApplication = async (req, res) => {
  try {
    const dbResonse = await Application.find().populate('jobId', 'title');
    res.status(201).json(dbResonse);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const dbResonse = await Application.findByIdAndDelete(id);
    res.status(201).json({ message: 'Application deleted successfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};
