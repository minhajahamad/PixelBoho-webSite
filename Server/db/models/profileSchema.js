const { Schema, model } = require('mongoose');

const profileSchema = Schema({
  fullname: {
    type: String,
    trim: true,
  },
  email: {
    type: Schema.Types.ObjectId,
    ref: 'admins',
  },
  phone: String,
  position: String,
  company: String,
  profileImage: String,
});

const Profile = model('profiles', profileSchema);

module.exports = Profile;
