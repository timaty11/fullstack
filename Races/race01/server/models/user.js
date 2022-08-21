import Model from '../models.js';

class User extends Model {
  constructor(login, email, password) {
    super(login, email, password);
  }
  async find(id) {
    super.find(id);
  }
  async delete() {
    super.delete();
  }
  async save() {
    super.save();
  }
}

export default User;
