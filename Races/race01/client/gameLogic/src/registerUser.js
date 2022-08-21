import readlineSync from 'readline-sync';
import { Card } from '../../models/card.js';
const initUser = () => {
  const playerName1 = readlineSync.question('Enter your name player1: ');
  console.log(`Hello ${playerName1}`);

  const player1 = new Card(playerName1, 3, 20, 1);

  let playerName2 = readlineSync.question('Enter your name player2: ');
  const player2 = new Card(playerName2, 3, 20, 1);
  return [player1, player2];
};

export default initUser;
