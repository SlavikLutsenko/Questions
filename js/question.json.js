var questions = [
  {
    textQuestion: 'как тебя зовту?',
    answersQuestion: [
      {
        textAnswer: 'Славик',
        nextQuestion: {
          textQuestion: 'сколько тебе лет?',
          answersQuestion: [
            {
              textAnswer: '<18',
              result: 'у тебя нет детишек'
            },
            {
              textAnswer: '>18 and <30',
              result: 'ты наверное женат'
            },
            {
              textAnswer: '>30 and <50',
              result: 'у тебя наверное есть детишки)'
            },
            {
              textAnswer: '>50',
              result: 'у тебя наверное есть внуки)'
            }
          ]
        }
      },
      {
        textAnswer: 'Богдан',
        nextQuestion: {
          textQuestion: 'где ты учишься?',
          answersQuestion: [
            {
              textAnswer: 'школа',
              result: 'школота'
            },
            {
              textAnswer: 'техникум',
              result: 'ты что дурак! о_0'
            },
            {
              textAnswer: 'универ',
              result: 'молодец'
            },
            {
              textAnswer: 'КПИ',
              result: 'КРАСАВА!!!!)))))'
            }
          ]
        }
      }
    ]
  }
]
