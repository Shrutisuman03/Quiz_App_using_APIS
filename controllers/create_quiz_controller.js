const quiz_details = require('../model/quiz');
// 1st issues

module.exports.quizid_details = function(req, res) {
    //  console.log("welcome in quiz details");
    console.log(req.body);
    try {
        quiz_details.create({

            quiz_heading: req.body.quiz_heading,
            quiz_level: req.body.quiz_level

        }, function(err, quizlistdetails) {
            if (err) {
                console.log("error in add router");
                return;
            }
            console.log(quizlistdetails);
            return res.json(quizlistdetails);

        });
    } catch (error) {
        return res.send("error in creating in list");
    }

};