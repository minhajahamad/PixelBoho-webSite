const Openings = require('../db/models/jobOpeningSchema');
const Application = require('../db/models/applicationSchema');

module.exports.postOpenings = async (req, res) => {
  try {
    const dbResonse = await Openings.create(req.body);
    res.status(201).json({ message: 'Job Openings Added Sucessfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.getOpenings = async (req, res) => {
  try {
    // Fetch jobs
    const openings = await Openings.find();

    // Count applications for each job
    const applicationsCount = await Application.aggregate([
      {
        $group: {
          _id: '$jobId',
          count: { $sum: 1 },
        },
      },
    ]);

    // Map counts to jobs
    const openingsWithCounts = openings.map(job => {
      const countObj = applicationsCount.find(
        c => c._id.toString() === job._id.toString()
      );
      return {
        ...job.toObject(),
        applications: countObj ? countObj.count : 0,
      };
    });

    res.status(200).json({
      totalCount: openings.length,
      openings: openingsWithCounts,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.deleteOpenings = async (req, res) => {
  try {
    const id = req.params.id;
    const dbResonse = await Openings.findByIdAndDelete(id);
    res.status(201).json({ message: 'Job openings deleted Successfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.updateOpenings = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const dbResonse = await Openings.findByIdAndUpdate(id, body);
    res.status(201).json({ message: 'Job openings updated successfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};
