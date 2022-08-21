import readLineSync from 'readline-sync';
import { movePlayer } from './movePlayer.js';

export const stepPlayer = (currPlayer, nextPlayer) => {
  let dieselUser = currPlayer.diesel;
  while (true) {
    console.log(`
${currPlayer.playerName} your move

Your life: ${currPlayer.hitPoints}
Your count card: ${currPlayer.countCard}
Your diesel: ${currPlayer.diesel}

card 
${currPlayer.userCard
  .map((card) => `${card.name} | ${card.attack} | ${card.def}| ${card.move}`)
  .join('\n')}

Enemy life: ${nextPlayer.hitPoints}
Enemy count card: ${nextPlayer.countCard}
        
Choose what you want to do:
1. Skip a move.
2. Attack.
        `);
    const currAction = readLineSync.question('Enter your action: ');
    const result = movePlayer(currAction, currPlayer, nextPlayer);
    if (result === 'skip') {
      if (currPlayer.diesel < 10) {
        currPlayer.diesel = dieselUser;
        currPlayer.diesel += 1;
      }
      currPlayer.addCard();
      break;
    }
    if (currPlayer.userCard)
    if (result === 'disel zero') {
      console.log('\nYou have 0 diesel skip the turn!\n');
    }
  }
};
