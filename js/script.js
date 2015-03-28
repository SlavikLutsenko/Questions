/*global ParseQuestions */
/*global questions */
/*global Math */

var currentQuestion = ParseQuestions(questions[Math.trunc(Math.random() * questions.length)])

currentQuestion.show()
