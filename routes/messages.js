const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Get all messages for a user
router.get('/:username', async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [{ sender: req.params.username }, { recipient: req.params.username }]
    });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Send a message
router.post('/', async (req, res) => {
  const message = new Message({
    sender: req.body.sender,
    recipient: req.body.recipient,
    content: req.body.content
  });

  try {
    const newMessage = await message.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;