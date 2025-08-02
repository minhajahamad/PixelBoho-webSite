const express = require('express');
const {
  postMessage,
  getMessage,
  deleteMessage,
  updateReadStatus,
} = require('../controllers/messagesControllers');

const router = express.Router();

router.get('/', getMessage);
router.post('/', postMessage);
router.delete('/:id', deleteMessage);
router.patch('/:id/read',updateReadStatus);

module.exports = router;
