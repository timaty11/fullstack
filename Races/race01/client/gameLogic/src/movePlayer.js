import skip from './move/skip.js';
import attack from './move/attack.js';
import take from './move/takeCard.js';

export const movePlayer = (action, playerTurn, playerAwait) => {
  switch (action) {
    case '1':
      return skip();
    case '2':
      return attack(playerTurn, playerAwait);
    default:
      console.log('You enter wrong action');
      return;
  }
};
