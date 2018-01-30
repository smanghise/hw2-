"Part 1"

function setup() {
  createCanvas(340, 340);
}

function draw() {
  strokeWeight(4);
  fill('blue');
  rect(random(width), random(height), random(width), random(height));
  strokeWeight(4);
  fill('red');
  rect(random(width), random(height), random(width), random(height));
  strokeWeight(4);
  fill('white');
  rect(random(width), random(height), random(width), random(height));
  strokeWeight(4);
  fill('yellow');
  rect(random(width), random(height), random(width), random(height));
  strokeWeight(4);
  fill('black');
  rect(random(width), random(height), random(width), random(height));
}

"Alternate Version of Part a"

/*
var mondrian_colors = ['blue','red','white','black','yellow']         

function draw() {
  for (var color in mondrian_colors) {
    strokeWeight(4);
    fill(random(color));
    rect(random(width), random(height), random(width), random(height));
  }
}
*/

"Part 2"

function setup() {
  createCanvas(340, 340);
}

function draw() {
  strokeWeight(5);
  fill('blue');
  triangle(random(), 75, 58, random(), 86, random());
  strokeWeight(10);
  fill('red');
  rect(random(width), random(height), random(width), random(height));
  strokeWeight(15);
  fill('white');
  ellipse(random(), random(), random(width), random(height));
  strokeWeight(20);
  fill('yellow');
  rect(random(width), random(height), random(width), random(height));
  strokeWeight(25);
  fill('black');
  rect(random(width), random(height), random(width), random(height));
}
