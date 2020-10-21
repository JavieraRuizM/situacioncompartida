let y = 200;

function setup() {
  createCanvas(720, 400); 
  stroke(255); 
  frameRate(30);
}
let value = 0;
function draw() {
  background(0); 
  y = y - 2;
  if (y < 0) {
    y = width/2;
  }
  ellipse(360, y, width/3, y);
  
}


