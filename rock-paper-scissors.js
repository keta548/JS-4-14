'use strict';

( () => {
    const localization = {
      FIGURES_ENG: ['rock', 'scissors', 'paper', 'Draw', 'You win', 'Computer wins', 'Computer', 'You', 'More?', 'Results'],
      FIGURES_RUS: ['камень', 'ножницы', 'бумага', 'Ничья', 'Вы выйграли', 'Компьютер выйграл', 'Компьютер', 'Вы', 'Еще?', 'Результат'],
    };

    function getRandomAnswer(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const game = (language) => {
      const result = {
        playerScore: 0,
        pcScore: 0,
      };

      const lang = language === 'EN' || language === 'ENG' ? localization.FIGURES_ENG : localization.FIGURES_RUS;

      return function start() {

        const gameCore = {
          get PlayerAnswer() {
            this.playerAnswer = prompt(`${lang.slice(0,3)}`, );
            if (this.playerAnswer === null) {
              return;
            } else if (this.playerAnswer[0].toLowerCase() === `${lang[0][0]}`
              || this.playerAnswer[0].toLowerCase() === `${lang[1][0]}`
              || this.playerAnswer[0].toLowerCase() === `${lang[2][0]}`) {
              return;
            }
            this.PlayerAnswer;
          },
          playerAnswer: '',
          get PcAnswer() {
            let result = getRandomAnswer(1, 3);
            if (result === 1) {
              return this.pcAnswer = `${lang[0]}`;
            } else if (result === 2) {
              return this.pcAnswer = `${lang[1]}`;
            } else if (result === 3) {
              return this.pcAnswer = `${lang[2]}`;
            }
          },
          pcAnswer: '',
          get SessionResult() {
            if (this.playerAnswer[0].toLowerCase() === this.pcAnswer[0]) {
              console.log(this.playerAnswer[0], this.pcAnswer[0])
              return `${lang[3]}`
            } else if (this.playerAnswer[0].toLowerCase() === `${lang[0][0]}` && this.pcAnswer[0] === `${lang[1][0]}` ||
              this.playerAnswer[0].toLowerCase() === `${lang[1][0]}` && this.pcAnswer[0] === `${lang[2][0]}` ||
              this.playerAnswer[0].toLowerCase() === `${lang[2][0]}` && this.pcAnswer[0] === `${lang[0][0]}`) {
              console.log(this.playerAnswer[0], this.pcAnswer[0])
              result.playerScore += 1;
              return `${lang[4]}`;
            }  else {
              console.log(this.playerAnswer[0], this.pcAnswer[0])
              result.pcScore += 1;
              return `${lang[5]}`;
            }
          },
          currentResult() {
            alert(`${lang[6]}: ${this.pcAnswer}.  \n${lang[7]}: ${this.playerAnswer} \n${this.SessionResult}`);
          },
        };

        gameCore.PcAnswer;
        gameCore.PlayerAnswer;

        if (gameCore.playerAnswer === null) {
          if (confirm(`${lang[8]}`)) {
            return start();
          } else {
            alert(`${lang[9]}:\n${lang[7]}: ${result.playerScore} \n${lang[6]}: ${result.pcScore}`);
            return null;
          }
        }

        gameCore.currentResult();
        //Совместите игру «Камень, ножницы, бумага» с игрой «Марблы»
        if (result.playerScore > 0) {
          alert('Игрок ходит первым в марблы!');
          return 'playerFirst';
        }  else if (result.pcScore > 0) {
          alert('Бот ходит первым в марблы!');
          return 'botFirst';
        }

        return start();
      };
    };

    window.rockPaperScissors = game;
    // export const newGame = window.newGame();
  }
)();



