background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(210,270), 255, 255);
  ellipse(random(width), random(height), random(30,80));
}
