const Profile = require('../db/models/profileSchema');

module.exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.find().populate('email');
    res.status(201).json(profile);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.postProfile = async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json({ message: 'Profile added succesfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.deletProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await Profile.findByIdAndDelete(id);
    res.status(201).json({ message: 'Profile deleted succesfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const profile = await Profile.findByIdAndUpdate(id, body);
    res.status(201).json({ message: 'Profile updated succesfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};
