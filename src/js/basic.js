export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}

// eslint-disable-next-line consistent-return
Character.prototype.damage = function (points) {
  try {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error(`${this.name} уже уничтожен`);
    }
  } catch (e) {
    return e;
  }
};
