const { Schema, model } = require('mongoose');

const messageSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
    },
    requirement: {
      type: String,
      required: [true, 'Requirement is required'],
      //   enum: [
      //     'Web & App',
      //     'Mobile Solutions',
      //     'Brand Strategy',
      //     'SEO Services',
      //     'Cloud Migration',
      //     'Enterprise Cloud',
      //     'Tender Systems',
      //     'ID Verification APIs',
      //   ],
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Message = model('messages', messageSchema);

module.exports = Message;
