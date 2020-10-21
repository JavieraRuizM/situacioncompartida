
function setup() {
  createCanvas(700, 700);
}

function draw() {
  
  background(255);
   fill(237, 97, 0)
  rect(180, 10, 400, 300, 150, 150, 10, 5)

  
 //pelo

  
  
  //cara
  fill(255, 231, 191)
  strokeWeight(0)
  rect(230, 40, 300, 370, 140, 140, 350, 350);
  
  
  //cuello
  fill(255, 231, 191)
 rect(330, 370, 100, 100);
  
  
  //polera
  
  fill(0)
  rect(130, 460, 500, 300, 100, 100, 0, 0);
   
   fill(255, 231, 191)
  strokeWeight(0)
  arc(375, 460, 160, 70, 0, PI , OPEN);


  
  
  //delineado ojos 1
  
  fill(0)
  strokeWeight(0)
  triangle(275, 200, 240, 170, 300, 175);
  
//ojo 1
  ellipseMode(RADIUS);
fill(255);
  strokeWeight(0)
ellipse(300, 200, 30, 30); // Outer white ellipse
ellipseMode(CENTER);
fill(150,130,55);
ellipse(300, 200, 30, 30); // Inner gray ellipse
  
  //delineado ojos 2
   fill(0)
  triangle(465, 200, 510, 170, 450, 175);
  
  //ojo 2
    ellipseMode(RADIUS);
fill(255);
  strokeWeight(0)
ellipse(450, 200, 30, 30); // Outer white ellipse
ellipseMode(CENTER);
fill(150,130,55);
ellipse(450, 200, 30, 30); // Inner gray ellipse
  
  //nariz
  fill(250,215,170)
  strokeWeight(0)
  arc(375, 260, 45, 50, 0, PI , OPEN);

  //boca
  strokeWeight(2)
stroke( 0);

  line(360, 320, 400, 320)
  
  //mejillas
  fill(250,203,200)
  strokeWeight(0)
  ellipse(285, 275, 65, 65)
  
  fill(250,203,200)
  strokeWeight(0)
  ellipse(470, 275, 65, 65)
  
  
}