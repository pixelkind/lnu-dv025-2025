class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 10;
    this.time = 0;
    this.maxTime = 60 + Math.random() * 60;
    this.angle = Math.random() * Math.PI * 2;
    this.speed = 0.2 + Math.random() * 2;
  }

  update() {
    // this.y = this.y + this.speed;
    // this.y += this.speed;
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.speed *= 0.99;
    this.time++;
  }

  draw() {
    push();
    noStroke();
    fill(255, 0, 0, 50);
    translate(this.x, this.y);
    ellipse(0, 0, this.size);
    pop();
  }

  isAlive() {
    return this.time < this.maxTime;
  }
}

// let particle = new Particle(width / 2, height / 2);
let particles = [];

function createParticles(x, y) {
  for (let i = 0; i < 500; i++) {
    particles.push(new Particle(x, y));
  }
}

createParticles(width / 2, height / 2);

function draw() {
  background(0, 0, 0);

  for (let particle of particles) {
    particle.update();
    particle.draw();

    if (!particle.isAlive()) {
      const index = particles.indexOf(particle);
      particles.splice(index, 1);
    }
  }
  console.log(particles.length);
  // particle.update();
  // particle.draw();
}

function mousePressed() {
  createParticles(mouseX, mouseY);
}
