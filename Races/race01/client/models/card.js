import { cardData } from '../tanks.js';

export class Card {
  constructor(name, countCards, point, diesel) {
    this.playerName = name;
    this.hitPoints = point;
    this.diesel = diesel;
    this.countCard;
    this.list = [];
    this.userCard = this.init(countCards);
  }
  init(count) {
    const currCard = [];
    for (const a in cardData) {
      this.list.push(cardData[a]);
    }
    for (let i = 0; i < count; i++) {
      currCard.push(this.list[Math.floor(Math.random() * 25)]);
    }
    this.countCard = currCard.length;
    return currCard;
  }
  addCard() {
    const card = this.list[Math.floor(Math.random() * 25)];
    this.userCard.push(card);
    this.countCard = this.userCard.length;
    return card;
  }
  removeCard(nameCard) {
    const index = this.userCard.findIndex((item) => item.name === nameCard);
    console.log(index);
    this.userCard.splice(index, 1);
    this.countCard = this.userCard.length;
  }
  attackCard(attacker, defender, defenderPlayer) {
    const indexAttacker = this.userCard.findIndex(
      (item) => item.name === attacker
    );
    console.log(indexAttacker);
    const indexDefender = defenderPlayer.userCard.findIndex(
      (item) => item.name === defender
    );
    console.log(indexDefender);
    const attackerCard = this.userCard[indexAttacker];
    const defenderCard = defenderPlayer.userCard[indexDefender];
    attackerCard.move -= 1;
    const attack = attackerCard.attack;
    const def = defenderCard.def;
    if (attack >= def) {
      return 'kill';
    } else {
      defenderPlayer.userCard[indexDefender].def = attack - def;
      return 'def';
    }
  }
  getDamage(cardName) {
    const index = this.userCard.findIndex((item) => item.name === cardName);
    return this.userCard[index].attack;
  }
}
