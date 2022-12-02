'use strict';

alert('Сыграйте в камень ножницы бумага, чтобы определить кто первый будет ходить в игре Марблы!');

const newGame1 = window.rockPaperScissors(); // const newGame1 = window.rockPaperScissors('ENG');
const newGame2 = window.marbles();
//Совместите игру «Камень, ножницы, бумага» с игрой «Марблы»
const start = newGame2(newGame1());

start();

// import {gameReset} from "/marbles.js";
// const newGame = () => {
//   start();
//   if (gameReset === false) {
//     return;
//   }
//   newGame ();
// }









