const orbita1 = 150;
const orbita2 = 110;
const tiempo1 = 1;
const tiempo2 = 230/365;
let souvlaki = 0;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES)
  stroke(157, 247, 210);
background(0);

}

function draw() {
  

  push();

  translate(width/2, height/2)
  scale (1.8);
  fill(65, 252, 176);
  ellipse(0, 0, 50);
  
  noFill();
  ellipse(0, 0, orbita1 * 2);
  ellipse(0, 0, orbita2 * 2);
  
  let a = orbita1 * sin(souvlaki);
  let b = orbita1 * cos(souvlaki);
  let rad= tiempo1 / tiempo2;
  let c = orbita2 * sin(souvlaki * rad);
  let d = orbita2 * cos(souvlaki * rad);
  
  line(a, b, c, d);
  
  pop();
  
  souvlaki += 1.5;
  

}