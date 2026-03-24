const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  preview: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: 'Ketan Rakhade',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  readTime: {
    type: String,
    default: '5 min read',
  },
  tags: [{
    type: String,
  }],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Blog', BlogSchema);
