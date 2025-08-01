const { Schema, model } = require('mongoose');

const jobOpeningSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    requirements: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Openings = model('openings', jobOpeningSchema);

module.exports = Openings;
