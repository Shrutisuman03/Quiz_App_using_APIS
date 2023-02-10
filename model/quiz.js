const mongoose = require('mongoose');

const quiz_id = new mongoose.Schema({

    quiz_heading: {
        type: 'String',
        required: true
    },

    quiz_level: {
        type: 'String',
        required: true
    }

}, { timestamps: true });

const quiz_data = mongoose.model('quiz_data', quiz_id);
module.exports = quiz_data;