const { Schema, model } = require('mongoose');

const blogSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

const Blog = model('blogs', blogSchema);

module.exports = Blog;
