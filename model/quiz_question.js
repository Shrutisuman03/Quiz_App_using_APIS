const mongoose = require('mongoose');

const listofquiz = new mongoose.Schema({

    question: {
        type: 'String',
        required: true
    },
    option1: {
        type: 'String',
        required: true
    },
    option2: {
        type: 'String',
        required: true
    },
    option3: {
        type: 'String',
        required: true
    },
    option4: {
        type: 'String',
        required: true
    },
    answer: {
        type: 'String',
        required: true
    }

}, { timestamps: true });

const quizdata = mongoose.model('quizdata', listofquiz);
module.exports = quizdata;