var fixedRect, movingRect;
var car , wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(100, 100, 50, 50);
  car.shapeColor = "blue";
  wall = createSprite(1000, 100, 150, 150);
  wall.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  car.velocityX = 4
 
if(isToching(car,wall)){
   car.velocityX=0
   movingRect.shapeColor = "red";
   fixedRect.shapeColor = "red";
  } else {
   movingRect.shapeColor = "blue";
   fixedRect.shapeColor = "blue";
   car.shapeColor = "yellow";
  }
  if(isToching(movingRect,fixedRect)){
   
    car.shapeColor = "red";
    wall.shapeColor = "red";
   }else{
    wall.shapeColor = "green";
    car.shapeColor = "green";
   }
bounceoff(car,wall)
  drawSprites();
}
