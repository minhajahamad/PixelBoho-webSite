const { Schema, model } = require('mongoose');

const adminSechma = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin = model('admins', adminSechma);

module.exports = Admin;
