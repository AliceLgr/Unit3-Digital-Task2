function setup() {
  createCanvas(500,500,WEBGL);
  ortho(-width, width, height, -height, 0.1, 100);
}

function drawBlueGrey() {
  beginShape();
  ambientMaterial(90, 122, 179);
  translate(0,0,0);
  box(300,200,100);
  endShape();
}

function drawGrey() {
  beginShape();
  ambientMaterial(183,182,187);
  translate(0,200,20);
  box(300,200,100);
  endShape();
}

function drawBlue() {
  beginShape();
  ambientMaterial(53, 86, 183);
  translate(-500,0,40);
  box(700,200,100);
  endShape();
}

function drawAntracite() {
  beginShape();
  ambientMaterial(39, 37, 42);
  translate(350,170,60);
  box(700,150,100);
  endShape();
}

function drawRed() {
  beginShape();
  ambientMaterial(220,20,60);
  translate(-150,150,80);
  box(600,150,100);
  endShape();
}

function drawThinGrey() {
  beginShape();
  ambientMaterial(183,182,187);
  translate(-400,0,20);
  box(300,150,100);
  endShape();
}

function drawAntracite2() {
  beginShape();
  ambientMaterial(39, 37, 42);
  translate(200,150,60);
  box(700,150,100);
  endShape();
}

function drawThinBlue() {
  beginShape();
  ambientMaterial(53, 86, 183);
  translate(350,150,40);
  box(700,150,100);
  endShape();
}

function draw() {
  background(237, 220, 200);
  rotateX(mouseX/100);
  rotateY(mouseY/100);
  directionalLight(250, 250, 250, 0, 0, 1);
  drawBlueGrey()
  drawGrey();
  drawBlue();
  drawAntracite();
  drawRed();
  drawThinGrey();
  drawAntracite2()
  drawThinBlue()
}