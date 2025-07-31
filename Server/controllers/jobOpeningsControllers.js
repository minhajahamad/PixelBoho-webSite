const Openings = require('../db/models/jobOpeningSchema');

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
    const dbResponse = await Openings.find();
    res.status(201).json(dbResponse);
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
