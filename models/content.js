const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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

const contentSchema = new Schema({
    Title: {type: String, requried: true},
    Year: {type: String, requried: true},
    Rated: {type: String, requried: true},
    Plot: {type: String, requried: true},
    Released: {type: String, required: true},
    Poster: {type: String, requried: true},
    imdbID: {type: String, requried: true},
    Type: {type: String, required: true},
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Content', contentSchema);