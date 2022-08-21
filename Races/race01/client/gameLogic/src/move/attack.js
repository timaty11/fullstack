import readlineSync from 'readline-sync';

export default (playerTurn, playerAwait) => {
  console.log(playerTurn, playerAwait);
  console.log('You move attack\n');
  const whatAttack = readlineSync.question(
    'Choose what you want to attack (card or player): '
  );
  console.log(
    `${playerTurn.playerName} cards:
| name | attac | def | disel |
.____________________________.${playerTurn.userCard
      .map(
        (card) =>
          `\n| ${card.name}  |   ${card.attack}   |  ${card.def}  |   ${card.diesel}   |   ${card.move}   |`
      )
      .join(' ')}`
  );
  const attacker = readlineSync.question('Enter your card: ');
  if (whatAttack === 'card') {
    console.log(
      `${playerAwait.playerName} cards:
| name | attack| def | disel |
.____________________________.${playerAwait.userCard
        .map(
          (card) =>
            `\n| ${card.name}  |   ${card.attack}   |  ${card.def}  |   ${card.diesel}   |   ${card.move}   |`
        )
        .join(' ')}`
    );
    const aname = readlineSync.question('Enter aname card: ');
    const result = playerTurn.attackCard(attacker, aname, playerAwait);
    if (result === 'def') {
      console.log('Card def');
    } else {
      playerAwait.removeCard(aname);
      console.log('Card kill');
    }
  } else {
    const damageCard = playerTurn.getDamage(attacker);
    playerAwait.hitPoints -= damageCard;
  }
};
