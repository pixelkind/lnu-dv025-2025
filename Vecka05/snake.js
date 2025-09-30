const cols = 10;
const rows = 10;
const gridSize = 50;
let snake = [
  { x: 2, y: 3 },
  { x: 2, y: 4 },
  { x: 2, y: 5 },
];
let direction = { x: 0, y: -1 };
let counter = 0;
let counterSpeed = 10;
let food = { x: 5, y: 8 };

function createFood() {
  food.x = Math.floor(Math.random() * cols);
  food.y = Math.floor(Math.random() * rows);
}
createFood();

function drawGrid() {
  stroke(255, 255, 255);
  fill(0, 0, 0);
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      rect(x * gridSize, y * gridSize, gridSize, gridSize);
    }
  }
}

function drawSnake() {
  noStroke();
  fill(0, 255, 0);
  for (let position of snake) {
    rect(position.x * gridSize, position.y * gridSize, gridSize, gridSize);
  }
}

function drawFood() {
  noStroke();
  fill(255, 0, 0);
  rect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function updateSnake() {
  if (counter > counterSpeed) {
    const head = snake[0];
    const newHead = { x: head.x + direction.x, y: head.y + direction.y };
    if (
      newHead.x < 0 ||
      newHead.x >= cols ||
      newHead.y < 0 ||
      newHead.y >= rows
    ) {
      console.log("You are dead");
    } else {
      snake.unshift(newHead);
      if (newHead.x === food.x && newHead.y === food.y) {
        createFood();
        counterSpeed--;
      } else {
        snake.pop();
      }
    }
    counter = 0;
  }
  counter++;
}

function draw() {
  updateSnake();

  drawGrid();
  drawFood();
  drawSnake();
}

function keyPressed() {
  if (keyCode === 38) {
    direction.x = 0;
    direction.y = -1;
  } else if (keyCode === 40) {
    direction.x = 0;
    direction.y = 1;
  } else if (keyCode === 37) {
    direction.x = -1;
    direction.y = 0;
  } else if (keyCode === 39) {
    direction.x = 1;
    direction.y = 0;
  }
}
