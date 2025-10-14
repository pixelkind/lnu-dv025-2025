import { Character } from "./character";

export class Monster extends Character {
  constructor(name, health) {
    super(name, health);
  }

  attack(enemy) {
    enemy.takeDamage(6);
  }
}
