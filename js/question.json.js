var questions = [
  {
    textQuestion: 'Какой образ жизни ты ведешь?',
    answersQuestion: [
      {
        textAnswer: 'Здоровый',
        nextQuestion: {
          textQuestion: 'А каким видом спорта занимаешься?',
          answersQuestion: [
            {
              textAnswer: 'Бегаю',
              nextQuestion: {
                textQuestion: 'А сколько ты пробегаешь за одну пробежку?',
                answersQuestion: [
                  {
                    textAnswer: '1 км',
                    nextQuestion: {
                      textQuestion: 'А чего так мало?',
                      answersQuestion: [
                        {
                          textAnswer: 'Я больше не могу(',
                          result: 'Ну ничего, главное не сдавайся и у тебя все получится)'
                        },
                        {
                          textAnswer: 'Я только начал бегать',
                          result: 'Главное не бегай резко много, а то плохо станет)'
                        },
                        {
                          textAnswer: 'Времени не хватает',
                          nextQuestion: {
                            textQuestion: 'А чего так?',
                            answersQuestion: [
                              {
                                textAnswer: 'Работаю',
                                result: 'Главное не забывай про здоровье'
                              },
                              {
                                textAnswer: 'Учусь',
                                result: 'Главное не забивай на учебу'
                              },
                              {
                                textAnswer: 'Провожу с девушкой время',
                                result: 'Ну так бегай с ней)'
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    textAnswer: '5 км',
                    nextQuestion: {
                      textQuestion: 'Молодец. А где бегаешь?',
                      answersQuestion: [
                        {
                          textAnswer: 'В парке',
                          result: 'Молодец! Продолжай в том же духе!'
                        },
                        {
                          textAnswer: 'У меня есть беговая дорожка',
                          result: 'Лучше бы бегал на улице'
                        },
                        {
                          textAnswer: 'У себя дома на диване, перед телевизором(',
                          result: 'Обманывать не хорошо!'
                        }
                      ]
                    }
                  },
                  {
                    textAnswer: '10 км',
                    nextQuestion: {
                      textQuestion: 'Ого! Вообще молодец! А участвовал ты в соревнованиях?',
                      answersQuestion: [
                        {
                          textAnswer: 'Да',
                          nextQuestion: {
                            textQuestion: 'А какое место занял?',
                            answersQuestion: [
                              {
                                textAnswer: 'Первое',
                                result: 'Молодец!'
                              },
                              {
                                textAnswer: 'Второе',
                                result: 'Молодец!'
                              },
                              {
                                textAnswer: 'Третье',
                                result: 'Молодец!'
                              },
                              {
                                textAnswer: 'Никакое(',
                                result: 'Ну ничего, главное не победа, а участие'
                              }
                            ]
                          }
                        },
                        {
                          textAnswer: 'Нет',
                          result: 'Зря, с твоими способнастями непременно нужно участвовать в них.'
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              textAnswer: 'Плаваю',
              nextQuestion: {
                textQuestion: 'Как давно ты научился плавать?',
                answersQuestion: [
                  {
                    textAnswer: 'Год назад',
                    nextQuestion: {
                      textQuestion: 'А чего так поздно?',
                      answersQuestion: [
                        {
                          textAnswer: 'Я еще маленький',
                          result: 'А, ну тогда у тебя все еще в переди)'
                        },
                        {
                          textAnswer: 'Мне было лень)',
                          result: 'Лентяй ты)'
                        }
                      ]
                    }
                  },
                  {
                    textAnswer: 'Три года назад',
                    nextQuestion: {
                      textQuestion: 'На сколько можешь задержать дыхание?',
                      answersQuestion: [
                        {
                          textAnswer: 'Одна минута',
                          result: 'Я тоже так могу)'
                        },
                        {
                          textAnswer: 'Две минуты',
                          result: 'Это больше чем я('
                        },
                        {
                          textAnswer: 'Пять минут',
                          result: 'Да ты супер плавец'
                        }
                      ]
                    }
                  },
                  {
                    textAnswer: 'С детства',
                    nextQuestion: {
                      textQuestion: 'А как научился?',
                      answersQuestion: [
                        {
                          textAnswer: 'Кинули по середине озера, вот и поплыл',
                          result: 'Жестокие у тебя родные'
                        },
                        {
                          textAnswer: 'Ходил в басейн',
                          result: 'Твои родители молодцы'
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              textAnswer: 'Хожу в тренажерный зал',
              nextQuestion: {
                textQuestion: 'Как часто ходишь на тренировку',
                answersQuestion: [
                  {
                    textAnswer: 'Два раза в неделю',
                    nextQuestion: {
                      textQuestion: 'Ты сбрасываешь вес?',
                      answersQuestion: [
                        {
                          textAnswer: 'Да',
                          nextQuestion: {
                            textQuestion: 'А до какого хочешь сбросит?',
                            answersQuestion: [
                              {
                                textAnswer: 'Меньше 200',
                                result: 'Ну давай, я в тебя верю'
                              },
                              {
                                textAnswer: 'Меньше 100',
                                result: 'Это правильно, толстый быть плохо'
                              }
                            ]
                          }
                        },
                        {
                          textAnswer: 'Нет',
                          result: 'Поддерживать физическую форму это хорошо'
                        }
                      ]
                    }
                  },
                  {
                    textAnswer: 'Четыри раза в неделю',
                    nextQuestion: {
                      textQuestion: 'Ты занимаешься бодибилдингом?',
                      answersQuestion: [
                        {
                          textAnswer: 'Да',
                          result: 'Молодец!!!'
                        },
                        {
                          textAnswer: 'Нет',
                          nextQuestion: {
                            textQuestion: 'А зачем так часто ходишь?',
                            answersQuestion: [
                              {
                                textAnswer: 'Нравится',
                                result: 'А, ну и правильно. Спорт это хорошо!'
                              },
                              {
                                textAnswer: 'Времени много свободного',
                                result: 'Ну займись еще чем нибудь. Учебой например'
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    textAnswer: 'Я не хожу в качалку, я вас обманул(',
                    nextQuestion: {
                      textQuestion: 'Зачем ты нас обманул?',
                      answersQuestion: [
                        {
                          textAnswer: 'Хотел показаться крутым',
                          result: 'Плохо обманывать!'
                        },
                        {
                          textAnswer: 'Просто. Всех обманываю',
                          result: 'Так у тебя не будет настоящих друзей'
                        },
                        {
                          textAnswer: 'Не знаю(',
                          result: 'Обманывать плохо! Не делай так!!!'
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        textAnswer: 'Вредный',
        nextQuestion: {
          textQuestion: 'В каком смысле?',
          answersQuestion: [
            {
              textAnswer: 'Ем вредную пищу',
              nextQuestion: {
                textQuestion: 'В какое кафе быстрого питания ходишь?',
                answersQuestion: [
                  {
                    textAnswer: 'McDonald’s',
                    nextQuestion: {
                      textQuestion: 'Сколько ты весишь?',
                      answersQuestion: [
                        {
                          textAnswer: 'Я не толстый! У меня кость широкая!',
                          result: 'Хахахаха! ну да)'
                        },
                        {
                          textAnswer: 'Я толстый(',
                          result: 'Ну ничего, займись спортом'
                        },
                        {
                          textAnswer: 'Я не часто там кушаю, поэтому не много',
                          result: 'Лучше вообще там не ешь'
                        }
                      ]
                    }
                  },
                  {
                    textAnswer: 'KFC',
                    nextQuestion: {
                      textQuestion: 'А почему не в McDonald’s?',
                      answersQuestion: [
                        {
                          textAnswer: 'Ну мне нравится KFC',
                          nextQuestion: {
                            textQuestion: 'А что тебе там нравится?',
                            answersQuestion: [
                              {
                                textAnswer: 'Там можно попить пива',
                                result: 'Алкоголь - это плохо'
                              },
                              {
                                textAnswer: 'Острые крылышки',
                                result: 'Мне они тоже нравятся'
                              }
                            ]
                          }
                        },
                        {
                          textAnswer: 'До него долго ехать(',
                          result: 'Ешь не здоровую пищу, так еще и ехать за ней лень! Позор тебе!'
                        }
                      ]
                    }
                  },
                  {
                    textAnswer: 'Просто ем шаурму',
                    nextQuestion: {
                      textQuestion: 'Тебе не жалко кошечек и собачек?',
                      answersQuestion: [
                        {
                          textAnswer: 'Там нормальное мясо!',
                          result: 'Ну да)'
                        },
                        {
                          textAnswer: 'У меня нету денег на McDonald’s, я студент(',
                          result: 'Бедненький( ну сам себе что-то приготовь('
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              textAnswer: 'Употребляю алкоголь',
              nextQuestion: {
                textQuestion: 'А о печени ты не беспокоишься?',
                answersQuestion: [
                  {
                    textAnswer: 'Нет, один раз живем',
                    nextQuestion: {
                      textQuestion: 'Ты алкоголик',
                      answersQuestion: [
                        {
                          textAnswer: 'Да((( спасите меня(',
                          result: 'Вот позвони 075-123-35-45. Тебе помогут'
                        },
                        {
                          textAnswer: 'Нет',
                          result: 'Алкоголь - это плохо'
                        }
                      ]
                    }
                  },
                  {
                    textAnswer: 'Пью только элитный алкоголь',
                    nextQuestion: {
                      textQuestion: 'А какой именно?',
                      answersQuestion: [
                        {
                          textAnswer: 'Виски',
                          result: 'Ты богатый'
                        },
                        {
                          textAnswer: 'Коньяк',
                          result: 'У тебя плохой вкус)'
                        },
                        {
                          textAnswer: 'Водка',
                          result: 'Ну да) этитный)'
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              textAnswer: 'Курю',
              nextQuestion: {
                textQuestion: 'А как же окружающие вас люди?',
                answersQuestion: [
                  {
                    textAnswer: 'Курю только в тех метстах где это разрешено',
                    nextQuestion: {
                      textQuestion: 'Ну а если нет такого места рядом?',
                      answersQuestion: [
                        {
                          textAnswer: 'Ищу такое место',
                          result: 'Молодец'
                        },
                        {
                          textAnswer: 'Тогда не курю',
                          result: 'Тогда лучше вообще бросай'
                        }
                      ]
                    }
                  },
                  {
                    textAnswer: 'Это их проблемы, а не мои',
                    nextQuestion: {
                      textQuestion: 'Ты жестокий?',
                      answersQuestion: [
                        {
                          textAnswer: 'Да',
                          result: 'Нельзя быть таким'
                        },
                        {
                          textAnswer: 'Нет',
                          result: 'Тогда  пожалей людей и курю только в предназначиных для этого местах'
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
]
/*
{
  textQuestion: '',
  answersQuestion: [
    {
      textAnswer: 'ok',
      result: 'ok'
    },
    {
      textAnswer: 'ok',
      result: 'ok'
    },
    {
      textAnswer: 'ok',
      result: 'ok'
    }
  ]
}
*/
