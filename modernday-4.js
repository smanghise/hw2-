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

/*
var mondrian_colors = ['blue','red','white','black','yellow']         

function draw(color) {
  for (var color in mondrian_colors) {
    strokeWeight(4);
    fill(random(color));
    rect(random(width), random(height), random(width), random(height));
  }
}
*/
