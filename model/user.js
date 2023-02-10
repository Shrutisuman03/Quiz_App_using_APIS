const mongoose = require('mongoose');
const user_field = new mongoose.Schema({

    name: {
        type: 'String',
        required: true
    },
    email: {
        type: 'String',
        required: true,
        unique: true
    }

}, { timestamps: true });

const userdata = mongoose.model('userdata', user_field);
module.exports = userdata;