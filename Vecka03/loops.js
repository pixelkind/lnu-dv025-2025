function draw() {
  ellipse(0, 300, 100);
  ellipse(120, 300, 100);
  for (let i = 0; i < 70; i++) {
    ellipse(i * 20, 100, 10);
    console.log(i);
  }
  noLoop();
}
