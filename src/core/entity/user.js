export default class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.age = user.age;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return `我的名字是${this.name}`;
  }
}
