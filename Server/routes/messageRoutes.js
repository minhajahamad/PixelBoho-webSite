const express = require('express');
const {
  postMessage,
  getMessage,
  deleteMessage,
  updateReadStatus,
  getUnreadCount,
} = require('../controllers/messagesControllers');

const router = express.Router();

router.get('/', getMessage);
router.get('/unread-count', getUnreadCount);
router.post('/', postMessage);
router.delete('/:id', deleteMessage);
router.patch('/:id/read', updateReadStatus);

module.exports = router;
