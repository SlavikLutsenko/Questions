/*global $ */
/*global currentQuestion*/

function Answer (text, nextQuestion, result, id) {
  this.textAnswer = text
  this.result = result == undefined ? null : result
  this.nextQuestion = ParseQuestions(nextQuestion)
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
  this.questionAnswers.$('label input').checked = true
  this.currentFunctionClickAnswerButton = this.clickAnswerButton.bind(this)
  this.questionButton.addEventListener('click', this.currentFunctionClickAnswerButton, false)
}

Question.prototype.clickAnswerButton = function() {
  this.questionButton.removeEventListener('click', this.currentFunctionClickAnswerButton, false)
  var id = Number($('input:checked').parent().getAttr('data-id'))
  if (this.answersQuestion[id].result == null) {
    currentQuestion = this.answersQuestion[id].nextQuestion
    currentQuestion.show()
  }
  else {
    this.answersQuestion[id].showResult(this.questionBlock)
  }
}

function ParseQuestions (questions) {
  if (questions == null) {
    return null
  }
  return new Question(
    questions.textQuestion,
    questions.answersQuestion.map(function (answer, id) {
      return new Answer(answer.textAnswer, answer.nextQuestion, answer.result, id)
    })
  )
}
