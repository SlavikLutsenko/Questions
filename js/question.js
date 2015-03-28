function Answer (text, result, id) {
  return {
    textAnswer: text,
    result: result,
    show: function(answerBlock) {
      answerBlock.innerHTML += '<label data-id="' + id + '"><input type="radio" name="question"/>' + this.textAnswer + '</label>'
    },
    showResult: function(block) {
      block.innerText = this.result
    }
  }
}

function Question (text, answers) {
  return {
    questionBlock: null,
    textQuestion: text,
    answersQuestion: answers,
    show: function() {
      this.questionBlock = this.questionBlock || document.querySelector('.question-block')
      if (this.questionBlock == null) {
        this.questionBlock = document.createElement('div')
        this.questionBlock.className = 'question-block'
      }
      var questionText = document.createElement('div'),
        questionAnswers = document.createElement('div'),
        questionButton = document.createElement('input')
      questionText.innerText = this.textQuestion
      questionAnswers.innerHTML = ''
      for (var i = 0; i < this.answersQuestion.length; i++) {
        this.answersQuestion[i].show(questionAnswers)
      }
      questionButton.type = 'button'
      questionButton.value = 'Ответить'
      this.questionBlock.appendChild(questionText)
      this.questionBlock.appendChild(questionAnswers)
      this.questionBlock.appendChild(questionButton)
      document.body.appendChild(this.questionBlock)
      questionButton.addEventListener('click', this.clickAnswerButton.bind(this), false)
    },
    clickAnswerButton: function() {
      var id = Number(document.querySelector('input:checked').parentNode.getAttribute('data-id'))
      this.answersQuestion[id].showResult(this.questionBlock)
    }
  }
}

function ParseQuestions (questions) {
  return new Question(
    questions.textQuestion,
    questions.answersQuestion.map(function (answer, id) {
      return new Answer(answer.textAnswer, answer.result, id)
    })
  )
}
