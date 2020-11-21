var fixedRect, movingRect


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 40, 80);
  movingRect = createSprite(600,200,80,40);

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";

  fixedRect.debug = true;
  movingRect.debug = true;

  fixedRect.velocityX = 2
  movingRect.velocityX = -2 
}

function draw() {
  background(0); 
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) 
    {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";

    movingRect.velocityX*=(-1)
    fixedRect.velocityX*=(-1)
  }
  else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  drawSprites();
}