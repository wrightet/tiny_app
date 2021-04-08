const express = require('express');
const router = express.Router();

const Question = require('../../models/question');

router.get('/', (req, res) => {
    Question.find()
    .then(questions => res.json(questions))
    .catch(err => res.status('404').json(err))
})
router.post('/', (req, res) => {
    const newQuestion = new Question({
        name: req.body.name,
        text: req.body.text,
        repo: req.body.repo,
        live: req.body.live
    })
    newQuestion.save().then(question => res.json(question))
    .catch(err => res.status(404).json(err))
})

router.delete('/:question_id', (req, res) => {
    Question.findOneAndDelete({_id: req.params.question_id}, {$set: req.body})
    .then()
})

module.exports = router;