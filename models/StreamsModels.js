const mongoose = require('mongoose');

const streamSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  categories: {
    required: false,
    type: Array,
  },
  channelName: {
    required: false,
    type: String
  },
  creatorID: {
    required: false,
    type: Number
  },
  date: {
    required: false,
    type: Number
  },
  duration: {
    required: true,
    type: Number
  },
  streamName: {
    required: false,
    type: String
  },
  totalViews: {
    required: false,
    type: Number
  }
});

module.exports = mongoose.model('Streams', streamSchema);
