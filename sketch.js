var car,wall;
var speed,weight;

function preload() {
 speed = random(55,90);
 weight = random(400,1500);
}

function setup() {
  createCanvas(1600,400);
 car=createSprite(55, 200, 50, 50);
wall=createSprite(1490, 200, 40, 200);

wall.shapeColor = (80,80,80,80);
car.velocityX = 5;
}

function draw() {
  background(0);  
  drawSprites(); 
}  