class ExtendableFunc extends Function {
  constructor() {
    super('...args', 'return this.self.call(...args)');

    return (this.self = this.bind(this));
  }
}

class Avenger extends ExtendableFunc {
  constructor({ name, alias, gender, age, power }) {
    super();
    this.name = name;
    this.alias = alias;
    this.gender = gender;
    this.age = age;
    this.power = power;
  }

  toString() {
    return `name: ${this.name}\n` + `gender: ${this.gender}\n` + `age: ${this.age}`;
  }

  call() {
    return `${this.alias.toUpperCase()}\n` + this.power.join('\n');
  }
}

module.exports.Avenger = Avenger;
