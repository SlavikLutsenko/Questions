var buttonMainQuestions = $('.button-main-quetions')

function Answer (text, nextQuestion, result, id, previousQuestion) {
  this.textAnswer = text
  this.result = result == undefined ? null : result
  this.nextQuestion = parseQuestions(nextQuestion, previousQuestion)
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

function parseQuestions (questions, previousQuestion) {
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

function showQuestion(e) {
  var el = $(e.target)
  Question.prototype.questionText = $.newEl('div').addClass('question-text')
  Question.prototype.questionAnswers = $.newEl('div').addClass('question-answers')
  Question.prototype.questionButton = $.newEl('input').addClass('question-button').setAttr('value', 'Ответить').setAttr('type', 'button')
  Question.prototype.leftButton = $.newEl('div').addClass('left-button')
  Question.prototype.rightButton = $.newEl('div').addClass('right-button')
  Question.prototype.questionBlock
    .clear()
    .rmClass('clear')
    .addEl(Question.prototype.questionText)
    .addEl(Question.prototype.questionAnswers)
    .addEl(Question.prototype.questionButton)
    .addEl(Question.prototype.leftButton)
    .addEl(Question.prototype.rightButton)
  buttonMainQuestions.rmClass('clear')
  buttonMainQuestions.addEventListener('click', showMainQuestion, false)
  parseQuestions(questions[el.getAttr('data-question-id')]).show()
}

function showMainQuestion() {
  buttonMainQuestions.addClass('clear')
  buttonMainQuestions.removeEventListener('click', showMainQuestion, false)
  Question.prototype.questionBlock.clear().addClass('clear')
  questions.map(function(el, id) {
    var newEl = $.newEl('div')
          .addClass('main-question')
          .text(el.textQuestion)
          .setAttr('data-question-id', id)
    newEl.addEventListener('click', showQuestion, false)
    Question.prototype.questionBlock.addEl(newEl)
  })
}

// var c = ParseQuestions(questions[Math.floor(Math.random() * questions.length)])
// c.show()

showMainQuestion()
