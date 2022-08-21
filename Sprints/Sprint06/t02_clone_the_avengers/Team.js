const { Avenger } = require('./Avenger');

class Team {
  constructor(id, avengers) {
    this.id = id;
    this.avengers = avengers;
  }

  battle(damage) {
    for (let avenger of this.avengers) {
      avenger.hp -= damage.damage;
    }
  }

  calculateLosses(clonedTeam) {
    let counter = 0;

    clonedTeam.forEach(
      (avenger) => (counter = avenger.hp < 1 ? counter + 1 : counter)
    );

    if (counter === 0) {
      console.log(`We haven't lost anyone in this battle!`);
    } else {
      console.log(`In this battle we lost ${counter} Avengers.`);
    }
  }

  clone() {
    let arr = [];

    this.avengers.forEach((el) => {
      let copy = Object.assign({}, el);
      Object.setPrototypeOf(copy, Object.getPrototypeOf(el));
      arr.push(copy);
    });

    return (this.avengers = arr);
  }
}

module.exports.Team = Team;
