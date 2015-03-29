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
          .addClass('answer-text')
          .text(this.textAnswer)
      )
  )
}

Answer.prototype.showResult = function(block) {
  block.clear().addEl($.newEl('div').addClass('question-result').text(this.result))
}

function Question (text, answers) {
  this.textQuestion = text
  this.answersQuestion = answers
  this.answerId = 0
  this.previousQuestion = null
  this.completed = false
}

Question.prototype.questionBlock = $('.question-block')
Question.prototype.questionText = $('.question-text')
Question.prototype.questionAnswers = $('.question-answers')
Question.prototype.questionButton = $('.question-button')
Question.prototype.leftButton = $('.left-button')
Question.prototype.rightButton = $('.right-button')

Question.prototype.controlButtons = function() {
  this.removeAllEventListener()
  this.currentFunctionClickAnswerButton = this.clickAnswerButton.bind(this)
  this.questionButton.addEventListener('click', this.currentFunctionClickAnswerButton, false)
  this.currentFunctionClickOnControlButton = this.clickOnControlButtons.bind(this)
  this.leftButton.addEventListener('click', this.currentFunctionClickOnControlButton, false)
  this.rightButton.addEventListener('click', this.currentFunctionClickOnControlButton, false)
  if (this.previousQuestion == null) {
    Question.prototype.leftButton.addClass('disabled')
  }
  else {
    Question.prototype.leftButton.rmClass('disabled')
  }
  if (this.completed) {
    Question.prototype.rightButton.rmClass('disabled')
  }
  else {
    Question.prototype.rightButton.addClass('disabled')
  }
}

Question.prototype.clickOnControlButtons = function(el) {
  el = $(el.target)
  if (!el.hasClass('disabled')) {
    this.removeAllEventListener()
    if (el.hasClass('left-button')) {
      this.previousQuestion.show()
    }
    if (el.hasClass('right-button')) {
      this.answersQuestion[this.answerId].nextQuestion.show()
    }
  }
}

Question.prototype.show = function() {
  this.questionText.text(this.textQuestion)
  this.questionAnswers.clear()
  for (var i = 0; i < this.answersQuestion.length; i++) {
    this.answersQuestion[i].show(this.questionAnswers)
  }
  this.questionAnswers.$('label.answer-question[data-id="' + this.answerId + '"] input').checked = true
  this.controlButtons()
}

Question.prototype.clickAnswerButton = function() {
  this.removeAllEventListener()
  this.answerId = Number($('input:checked').parent().getAttr('data-id'))
  this.completed = true
  if (this.answersQuestion[this.answerId].result == null) {
    this.answersQuestion[this.answerId].nextQuestion.show()
  }
  else {
    this.answersQuestion[this.answerId].showResult(this.questionBlock)
  }
}

Question.prototype.removeAllEventListener = function() {
  this.questionButton.removeEventListener('click', this.currentFunctionClickAnswerButton, false)
  this.leftButton.removeEventListener('click', this.currentFunctionClickOnControlButton, false)
  this.rightButton.removeEventListener('click', this.currentFunctionClickOnControlButton, false)
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
c.show()
