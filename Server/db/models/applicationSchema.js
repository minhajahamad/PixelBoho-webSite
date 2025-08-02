const { Schema, model } = require('mongoose');

const applicationSchema = Schema(
  {
    jobId: {
      type: Schema.Types.ObjectId,
      ref: 'openings',
      required: true,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
    },
    message: String,
    resume: {
      type: String,
      required: [true, 'Resume is required'],
    },
  },
  { timestamps: true }
);

const Application = model('applications', applicationSchema);

module.exports = Application;
