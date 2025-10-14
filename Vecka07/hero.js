import { Character } from "./character";

export class Hero extends Character {
  constructor(name, health) {
    super(name, health);
  }

  attack(enemy) {
    enemy.takeDamage(10);
  }
}
