import initUser from './src/registerUser.js';
import { stepPlayer } from './src/stepPlayer.js';
export const startGame = () => {
  const [player1, player2] = initUser();

  console.log(player1);
  console.log(player2);

  while (player1.hitPoints > 0 && player2.hitPoints > 0) {
    stepPlayer(player1, player2);
    stepPlayer(player2, player1);
  }
  //   if (player1.hitPoints <= 0) {
  //     console.log(`
  //               |-----------------------------|
  //               |  ${playerName1} is dead!    |
  //               |-----------------------------|
  //           `);
  //   } else {
  //     console.log(`
  //               |-----------------------------|
  //               |  ${playerName2} is dead!    |
  //               |-----------------------------|
  //               `);
  //   }
};
