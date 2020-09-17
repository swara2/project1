var car,wall;
var speed,weight;

function preload(){

}

function setup() {
  createCanvas(1600,400);
 car=createSprite(55, 200, 50, 50);
wall=createSprite(1490, 200, 40, 200);
speed = random(55,90);
 weight = random(400,1500);
 

car.velocityX = 5;
}

function draw() {
  background(0); 
 
  bounceoff(car,wall);
  if(car.x - wall.x < car.width/2 + wall.width/2 && 
    wall.x - car.x < car.width/2 + wall.width/2 && 
    car.y - wall.y < car.height/2 + wall.height/2 && 
    wall.y - car.y < car.height/2 + wall.height/2   ) {
    car.shapeColor = "green";
   
  } 
 
 
  drawSprites(); 
}  