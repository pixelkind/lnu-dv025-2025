import { Hero } from "./hero";
import { Monster } from "./monster";

const nisse = new Hero("Nisse", 50);
const dragon = new Monster("Dragon", 30);

function draw() {
  background(255, 255, 255);
  textSize(40);
  if (nisse.isAlive() && dragon.isAlive()) {
    text(
      `${nisse.name} hp: ${nisse.health}\n${dragon.name} hp: ${dragon.health}`,
      100,
      100
    );
  } else if (!dragon.isAlive()) {
    text(`${nisse.name} has won!`, 100, 100);
  } else if (!nisse.isAlive()) {
    text(`${dragon.name} has won!`, 100, 100);
  }
}

function mousePressed() {
  nisse.attack(dragon);
  dragon.attack(nisse);
}
