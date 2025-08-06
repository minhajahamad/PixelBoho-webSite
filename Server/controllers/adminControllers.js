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

// Get logged-in admin profile
module.exports.getAdminProfile = async (req, res) => {
  try {
    res.json(req.admin);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update admin profile
module.exports.updateAdminProfile = async (req, res) => {
  try {
    const updateData = {
      fullName: req.body.fullName,
      phone: req.body.phone,
      company: req.body.company,
      position: req.body.position,
    };

    // Handle profile picture upload
    if (req.file) {
      const baseUrl = `${req.protocol}://${req.get('host')}`;
      updateData.profilePicture = `${baseUrl}/uploads/profile-pictures/${req.file.filename}`;
    } else if (req.body.profilePicture) {
      updateData.profilePicture = req.body.profilePicture;
    }

    const updatedAdmin = await Admin.findByIdAndUpdate(
      req.admin._id,
      { $set: updateData },
      { new: true }
    ).select('-password');

    res.json(updatedAdmin);
  } catch (err) {
    console.error('Error updating admin profile:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Forgot password - Update password by email
module.exports.updatePassword = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the password
    admin.password = hashedPassword;
    await admin.save();

    res.json({ message: 'Password updated successfully' });
  } catch (err) {
    console.error('Error updating password:', err);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports.checkEmailExists = async (req, res) => {
  try {
    const { email } = req.body;
    const admin = await Admin.findOne({ email });

    if (admin) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  } catch (err) {
    console.error('Error checking email:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
