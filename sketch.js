var balloon;

function preload(){
  Balloon1=loadImage(balloon1)
  Balloon2=loadImage(balloon2)
  Balloon3=loadImage(balloon3)
}

function setup() {
  createCanvas(500,500);
 Balloon=createSprite(400, 200, 50, 50);
 Balloon.addImage(Balloon1,Balloon2,Balloon3)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}