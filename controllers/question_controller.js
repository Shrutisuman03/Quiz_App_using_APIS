const quizquestionsdb = require('../model/quiz_question');

module.exports.quiz_questionshow = function(req, res) {
    console.log("welcome in question details");
    console.log(req.body);
    try {
        quizquestionsdb.create({
            question: req.body.question,
            option1: req.body.option1,
            option2: req.body.option2,
            option3: req.body.option3,
            option4: req.body.option4,
            answer: req.body.answer

        }, function(err, quizlistques) {
            if (err) {
                console.log("error in add router");
                return;
            }
            console.log(quizlistques);
            return res.json(quizlistques);
        });
    } catch (error) {
        return res.send("error in question in list");
    }

};