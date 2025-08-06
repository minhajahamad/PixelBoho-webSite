const jwt = require('jsonwebtoken');
const Admin = require('../db/models/adminSchema'); // import Admin model

module.exports.verifyAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const admin = await Admin.findById(decoded.id).select('-password'); // fetch full admin details
    if (!admin) {
      return res.status(401).json({ message: 'Admin not found' });
    }

    req.admin = admin; // attach full admin object
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};
