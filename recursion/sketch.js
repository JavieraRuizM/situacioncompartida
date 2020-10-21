//pasar el mouse de manera horizontal sobre el canvas

function setup() {
  createCanvas(600, 500);
 
}

function draw() {
  background(0); 
  let levels = round(map(mouseX, 0, width, 0, 10));//cant de veces que se repite
  cuadraloop(400,width/2, 200, levels);//ubicación
}

function  cuadraloop(x, y, d, levels) {
  //lo que se repite
  square(x,y,d);
  //donde se repite
  if (levels > 2) {
    cuadraloop(x, y - d / 2, d / 2, levels - 2);
    cuadraloop(x, y + d / 2, d / 2, levels - 2);
    cuadraloop(x - d / 1, y, d / 2, levels - 2);
    cuadraloop(x + d / 2, y, d / 2, levels - 2);
  
}}