/*global $ */
/*global questions*/

function Answer (text, nextQuestion, result, id, previousQuestion) {
  this.textAnswer = text
  this.result = result == undefined ? null : result
  this.nextQuestion = ParseQuestions(nextQuestion, previousQuestion)
  this.id = id
}

Answer.prototype.show = function(answerBlock) {
  answerBlock.addEl(
    $.newEl('label')
      .addClass('answer-question')
      .setAttr('data-id', this.id)
      .addEl(
        $.newEl('input')
          .setAttr('type', 'radio')
          .setAttr('name')
      ).addEl(
        $.newEl('span')
          .addClass('radio')
      ).addEl(
        $.newEl('span')
          .text(this.textAnswer)
      )
  )
}

Answer.prototype.showResult = function(block) {
  block.clear()
  block.addEl($.newEl('div').addClass('question-result').text(this.result))
}

function Question (text, answers) {
  this.textQuestion = text
  this.answersQuestion = answers
  this.answerId = 0
  this.previousQuestion = null
}

Question.prototype.questionBlock = $('.question-block')
Question.prototype.questionText = $('.question-text')
Question.prototype.questionAnswers = $('.question-answers')
Question.prototype.questionButton = $('.question-button')

Question.prototype.show = function() {
  this.questionText.text(this.textQuestion)
  this.questionAnswers.clear()
  for (var i = 0; i < this.answersQuestion.length; i++) {
    this.answersQuestion[i].show(this.questionAnswers)
  }
  this.questionAnswers.$('label.answer-question[data-id="' + this.answerId + '"] input').checked = true
  this.currentFunctionClickAnswerButton = this.clickAnswerButton.bind(this)
  this.questionButton.addEventListener('click', this.currentFunctionClickAnswerButton, false)
}

Question.prototype.clickAnswerButton = function() {
  this.questionButton.removeEventListener('click', this.currentFunctionClickAnswerButton, false)
  var id = Number($('input:checked').parent().getAttr('data-id'))
  if (this.answersQuestion[id].result == null) {
    this.answersQuestion[id].nextQuestion.show()
  }
  else {
    this.answersQuestion[id].showResult(this.questionBlock)
  }
}

function ParseQuestions (questions, previousQuestion) {
  if (questions == null) {
    return null
  }
  var result = new Question(questions.textQuestion)
  result.answersQuestion = questions.answersQuestion.map(function (answer, id) {
      return new Answer(answer.textAnswer, answer.nextQuestion, answer.result, id, this)
    }, result)
  result.previousQuestion = previousQuestion
  return result
}

var c = ParseQuestions(questions[Math.trunc(Math.random() * questions.length)])

//ParseQuestions(questions[Math.trunc(Math.random() * questions.length)]).show()
c.show()
