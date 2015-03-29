/*global $ */
/*global currentQuestion*/

var body = $(document.body)

function Answer (text, nextQuestion, result, id) {
  return {
    textAnswer: text,
    result: result == undefined ? null : result,
    nextQuestion: ParseQuestions(nextQuestion),
    show: function(answerBlock) {
      answerBlock.addEl(
        $.newEl('label')
          .addClass('answer-question')
          .setAttr('data-id', id)
          .addEl(
            $.newEl('input')
              .setAttr('type', 'radio')
              .setAttr('name')
          ).addEl(
            $.newEl('span')
              .text(this.textAnswer)
          )
      )
    },
    showResult: function(block) {
      block.clear()
      block.addEl($.newEl('div').addClass('question-result').text(this.result))
    }
  }
}

function Question (text, answers) {
  return {
    questionBlock: null,
    textQuestion: text,
    answersQuestion: answers,
    show: function() {
      this.questionBlock = this.questionBlock || body.$('.question-block')
      if (this.questionBlock == null) {
        this.questionBlock = $.newEl('div').addClass('question-block')
        body.addEl(this.questionBlock)
      }
      this.questionBlock.clear()
      this.questionBlock.addEl($.newEl('div').addClass('question-text').text(this.textQuestion))
      var questionAnswers = $.newEl('div').addClass('question-answers').clear(),
        questionButton = $.newEl('input').setAttr('type', 'button').setAttr('value', 'Ответить').addClass('question-button')
      for (var i = 0; i < this.answersQuestion.length; i++) {
        this.answersQuestion[i].show(questionAnswers)
      }
      this.questionBlock.addEl(questionAnswers).addEl(questionButton)
      questionButton.addEventListener('click', this.clickAnswerButton.bind(this), false)
    },
    clickAnswerButton: function() {
      var id = Number($('input:checked').parent().getAttr('data-id'))
      if (this.answersQuestion[id].result == null) {
        currentQuestion = this.answersQuestion[id].nextQuestion
        currentQuestion.show()
      }
      else {
        this.answersQuestion[id].showResult(this.questionBlock)
      }
    }
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
