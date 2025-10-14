export class Character {
  #health;

  constructor(name, health) {
    this.name = name;
    this.#health = health;
  }

  get health() {
    return this.#health;
  }

  attack(enemy) {}

  takeDamage(amount) {
    if (amount > 0) {
      this.#health -= amount;
    }
  }

  isAlive() {
    if (this.#health <= 0) {
      return false;
    } else {
      return true;
    }
  }
}
