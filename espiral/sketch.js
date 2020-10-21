var angle = 3.0;
var focus = 200;
var escalar = 4;
var speed = 0.1;
var color = {
  r: 0,
  g: 0,
  b: 0
};

function setup() { 
  createCanvas(700, 600);
  noStroke();
  background (0);
} 

function draw() { 
  color.r = 240;
  color.g = 224;
  color.b = 249;
  var x = focus + cos(angle) * escalar;
  var y = focus + sin(angle) * escalar;
  fill(color.r, color.g, color.b);
  noStroke();
  ellipse(x, y, 5, 5);
  angle += speed;
  escalar += speed;
  
}

