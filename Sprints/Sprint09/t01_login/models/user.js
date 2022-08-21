import Model from '../model.js';

class Hero extends Model {
  constructor(login, name, email, password) {
    super(login, name, email, password);
  }
  find(login) {
    super.find(login);
  }
  delete() {
    super.delete();
  }
  save() {
    super.save();
  }
}

export default Hero;
