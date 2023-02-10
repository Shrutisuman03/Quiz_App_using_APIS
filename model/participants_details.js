const mongoose = require('mongoose');
const total_participants = new mongoose.Schema({

    user_email: {
        type: 'String',
        required: true
    }

}, { timestamps: true });

const totalparticipants = mongoose.model('totalparticipants', total_participants);
module.exports = totalparticipants;