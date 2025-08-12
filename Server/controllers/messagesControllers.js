const Message = require('../db/models/messageSchema');

module.exports.postMessage = async (req, res) => {
  try {
    const dbResponse = await Message.create(req.body);

    res.status(201).json({ message: 'Message submitted successfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.getMessage = async (req, res) => {
  try {
    const dbResonse = await Message.find().sort({ createdAt: -1 });
    res.status(201).json(dbResonse);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const dbResonse = await Message.findByIdAndDelete(id);
    res.status(201).json({ message: 'Message deleted successfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, error: true });
  }
};

// PATCH - Update read status
module.exports.updateReadStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMessage = await Message.findByIdAndUpdate(
      id,
      { isRead: req.body.isRead },
      { new: true }
    );
    res.status(200).json(updatedMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// GET - Unread messages count
module.exports.getUnreadCount = async (req, res) => {
  try {
    const count = await Message.countDocuments({ isRead: false });
    res.status(200).json({ unreadCount: count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
