function setup() {
  createCanvas(500, 500);
  frameRate(6);
  noStroke();
}

function draw() {
  background(255);
  
  for (let i = 0; i < 15; i++) {
    fill(255, random(255), random(255));
    ellipse(random(width), random(height), i * 10, i * 10);
  }
}
