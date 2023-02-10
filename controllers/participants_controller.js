const participants_in_quiz = require('../model/participants_details');
const user_details = require('../model/user');

module.exports.participants_record = async function(req, res) {

    console.log(req.body);
    try {
        const { user_email } = req.body;

        const user_info = await user_details.findOne({email: user_email});
        const is_participant_exists = await participants_in_quiz.findOne({ user_email: user_email });

        if(user_info && !is_participant_exists)
        {
            await participants_in_quiz.create({
                user_email,
            });
            const total_participants = await participants_in_quiz.count({});
            return res.json(total_participants);
        }
        return res.send("error in authorizing user");

    } catch (error) {
        return res.send("error in creating in participants_record");
    }
};