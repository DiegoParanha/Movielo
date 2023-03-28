const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new Schema({
    title: {type: String, requried: true},
    year: {type: String, requried: true},
    rated: {type: String, requried: true},
    plot: {type: String, requried: true},
    released: {type: String, required: true},
    poster: {type: String, requried: true},
    imdbID: {type: String, requried: true},
    type: {type: String, required: true},
    comments: [commentSchema]
}, {
    timestamps: true
});

const commentSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 10,
      default: 5
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Content', contentSchema);