const Admin = require('../db/models/adminSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// signup
module.exports.signupAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin
    const newAdmin = await Admin.create({
      email,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: 'Admin created successfully', adminId: newAdmin._id });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

// Login
module.exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET, // Make sure you set this in .env
      { expiresIn: '1d' }
    );
    res.json({ token, message: 'Login successful' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

// Get Admin
module.exports.getAdmin = async (req, res) => {
  try {
    const dbResonse = await Admin.find();
    res.status(201).json(dbResonse);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};
