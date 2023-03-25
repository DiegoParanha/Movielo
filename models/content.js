const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new Schema({
    title: {type: String, requried: true},
    year: {type: String, requried: true},
    rated: {type: String, requried: true},
    plot: {type: String, requried: true},
    poster: {type: String, requried: true},
    imdbID: {type: String, requried: true},
    type: {type: String, required: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('Content', contentSchema);