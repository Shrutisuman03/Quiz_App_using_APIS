const express = require('express')
const router = express.Router();
console.log('yup router loaded!!');
const controller_quiz = require('../controllers/create_quiz_controller');
const controller_question_list = require('../controllers/question_controller');
const user_controller = require('../controllers/user_controller');
const participation_controll = require('../controllers/participants_controller');

router.post('/', controller_quiz.quizid_details);
router.post('/quiz_question', controller_question_list.quiz_questionshow);
router.post('/user_details', user_controller.user_details);
router.post('/participants', participation_controll.participants_record);

module.exports = router;