'use strict';

( () => {
  function getRandomAnswer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const gameMarbles = (firstMove) => {
    const desk = {
      playerBalls: 5,
      botBalls: 5,
      get playerQuestionMove() {
        this.playerQuestionMove = prompt(`Загадай число от 1 до ${this.playerBalls}`, );
    },
      get currentResults() {return `\n\nШариков осталось: \nИгрок: ${this.playerBalls} \nКомпьютер: ${this.botBalls}`},
      get printCurrentResults() {
        alert(`${this.currentResults}`);
      },
      set playerQuestionMove(val) {
          if (this.isnan(val) === 'NaN') {
            return this.playerQuestionMove;
          } else if (val <= 0 && val != null || val > this.playerBalls ) {
            alert('У вас нет столько шаров!');
            return this.playerQuestionMove;
          } else {
            return this.playerQuestionNumber = val;
          }
      },
      playerQuestionNumber: 0,
      get botAnswerMove() {
        let randomNumber = getRandomAnswer(1, 2);
        if (randomNumber === 1) {
          this.botQuestionAnswer = ['Нечетное', 1];
        } else if (randomNumber === 2) {
          this.botQuestionAnswer = ['Четное', 2];
        }
        return this.botQuestionAnswer;
      },
      botQuestionAnswer: [],
      isnan(val) {
        if (!Number.isNaN(parseFloat(val)) && isFinite(val)) {
          return +val;
        } else if (val === null){
          return null;
        } else {
          return 'NaN';
        }
      },
      botQuestionMove() {
        this.botQuestionNumber = getRandomAnswer(1, this.botBalls);
      },
      botQuestionNumber: 0,
      get playerAnswerMove() {
       if (confirm(`Бот: Четное?`)) {
         this.playerQuestionAnswer = ['Четное', 2];
       } else {
         this.playerQuestionAnswer = ['Нечетное', 1];
       }
      },
      playerQuestionAnswer: [],
      comparePlayerAnswer() {
          if (this.botQuestionNumber % 2 === 0 && this.botQuestionNumber !== 1 && this.playerQuestionAnswer[1] === 2) {
            this.getPlayerReward();
          } else if (this.botQuestionNumber % 2 !== 0 && this.playerQuestionAnswer[1] === 1
            || this.botQuestionNumber === 1 && this.playerQuestionAnswer[1] === 1) {
            this.getPlayerReward();
          } else {
            this.getPlayerNoReward();
          }
      },
      getPlayerReward() {
        this.botBalls -= +this.botQuestionNumber;
        this.playerBalls += +this.botQuestionNumber;
        alert(`Игрок угадал (${desk.botQuestionNumber} - "${desk.playerQuestionAnswer[0]}"), игрок получает ${desk.botQuestionNumber} шариков. ${this.currentResults}`);
      },
      getPlayerNoReward() {
        if (this.botQuestionNumber >= this.playerBalls ) {
          alert(`Игрок не угадал (${desk.botQuestionNumber}) не является "${desk.playerQuestionAnswer[0]}"), бот получает все оставшиеся шарики Игрока (${this.playerBalls})`);
          this.botBalls += +this.playerBalls;
          this.playerBalls = 0;
          this.printCurrentResults;
        } else {
        this.botBalls += +this.botQuestionNumber;
        this.playerBalls -= +this.botQuestionNumber;
        alert(`Игрок не угадал (${desk.botQuestionNumber} не является "${desk.playerQuestionAnswer[0]}"), бот получает ${desk.botQuestionNumber} от игрока, ${this.currentResults}`);
          }
      },
      compareBotAnswer() {
         if (this.playerQuestionNumber % 2 === 0 && this.playerQuestionNumber !== 1
          && this.botQuestionAnswer[1] === 2) {
          this.getBotReward();
        } else if (this.playerQuestionNumber % 2 !== 0 && this.botQuestionAnswer[1] === 1
          || this.playerQuestionNumber === 1 && this.botQuestionAnswer[1] === 1) {
          this.getBotReward();
        } else {
          this.getBotNoReward();
        }
      },
      getBotReward() {
        this.botBalls += +this.playerQuestionNumber;
        this.playerBalls -= +this.playerQuestionNumber;
          alert(`Бот угадал (${desk.playerQuestionNumber} - "${desk.botQuestionAnswer[0]}"), бот получает ${desk.playerQuestionNumber} шариков. ${this.currentResults}`);
      },
      getBotNoReward() {
        if (this.playerQuestionNumber >= this.botBalls ) {
          alert(`Бот не угадал (${desk.playerQuestionNumber}) не является "${desk.botQuestionAnswer[0]}"),
          игрок получает все оставшиеся шарики Бота (${this.botBalls})`);
          this.playerBalls += +this.botBalls;
          this.botBalls = 0;
          this.printCurrentResults;
        } else {
          this.botBalls -= this.playerQuestionNumber;
          this.playerBalls += +this.playerQuestionNumber;
          alert(`Бот не угадал (${desk.playerQuestionNumber} не является "${desk.botQuestionAnswer[0]}", игрок получает ${desk.playerQuestionNumber} от бота, ${this.currentResults}`);
        }
      },
      checkWinConditions: function () {
        if (this.playerBalls === 0) {
          alert(`Бот победил! Последняя Партия:${this.currentResults}`);
        } else if (this.botBalls === 0) {
          alert(`Игрок победил! Последняя Партия:${this.currentResults}`);
        } else {}
      },
    };

    return function gameMarblesStart(firstMove) {

      const gameFlow = {
        get continueGame() {
          if (confirm(`Хотите сыграть еще?`)) {
            desk.playerBalls = 5;
            desk.botBalls = 5;
            // return this.reset = true;
            return gameMarbles(); // Перезапуск игры
          } else {
            return alert('Хорошего дня!');
          }
        },
        get ifCancelGame() {
            if (confirm(`Продолжить?`)) {
              return gameMarblesStart();
            } else {
              // this.reset = false;
              return desk.printCurrentResults;
            }
      },
        reset: false,
      };
      // export let gameReset = gameFlow.reset;

      if (firstMove === null) {
          return alert('Поиграем в марблы в другой раз!');
      } else if (firstMove !== 'botFirst') {

        desk.playerQuestionMove;
        desk.botAnswerMove;

        if (desk.playerQuestionNumber === null) {
          return gameFlow.ifCancelGame;
        } else if (desk.playerBalls === 0 || desk.botBalls === 0) {
          desk.checkWinConditions();
          return gameFlow.continueGame;
        }
        desk.compareBotAnswer();
        console.log('playerQuestion', desk.playerQuestionNumber);
        console.log('botAnswer', desk.botQuestionAnswer);
        console.log(`ИГРОК ${desk.playerBalls} БОТ ${desk.botBalls}`);

        if (desk.playerBalls === 0 || desk.botBalls === 0) {
          desk.checkWinConditions();
          return gameFlow.continueGame;
        }
        desk.botQuestionMove();
        desk.playerAnswerMove;
        desk.comparePlayerAnswer();

        if (desk.playerBalls === 0 || desk.botBalls === 0) {
          desk.checkWinConditions();
          return gameFlow.continueGame;
        }
        console.log('botQuestion', desk.botQuestionNumber);
        console.log('playerAnswer', desk.playerQuestionAnswer);
        console.log(`ИГРОК ${desk.playerBalls} БОТ ${desk.botBalls}`);

      } else {
        desk.botQuestionMove();
        desk.playerAnswerMove;
        desk.comparePlayerAnswer();
        if (desk.playerBalls === 0 || desk.botBalls === 0) {
          desk.checkWinConditions();
          return gameFlow.continueGame;
        }
        console.log('botQuestion', desk.botQuestionNumber);
        console.log('playerAnswer', desk.playerQuestionAnswer);
        console.log(`ИГРОК ${desk.playerBalls} БОТ ${desk.botBalls}`);


        desk.playerQuestionMove;
        desk.botAnswerMove;
        if (desk.playerQuestionNumber === null) {
          return gameFlow.ifCancelGame;
        } else if (desk.playerBalls === 0 || desk.botBalls === 0) {
          desk.checkWinConditions();
          return gameFlow.continueGame;
        }
        desk.compareBotAnswer();
        console.log('playerQuestion', desk.playerQuestionNumber);
        console.log('botAnswer', desk.botQuestionAnswer);
        console.log(`ИГРОК ${desk.playerBalls} БОТ ${desk.botBalls}`);
        if (desk.playerBalls === 0 || desk.botBalls === 0) {
          desk.checkWinConditions();
          return gameFlow.continueGame;
        }
      }
    return gameMarblesStart();
    };
  };
    window.marbles = gameMarbles;
  }
  )();
