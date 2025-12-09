// color for the circle
let myColor;

function setup() {
  createCanvas(600, 400);
  myColor = color(200, 100, 255); // starting color
}

function draw() {
  background(240);

  // instructions
  fill(0);
  textSize(14);
  text("click to change the circle color", 10, 20);

  // circle in the center
  fill(myColor);
  ellipse(width/2, height/2, 120, 120);
}

function mousePressed() {
  // change color randomly
  myColor = color(random(255), random(255), random(255));
}