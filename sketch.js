var moving ,fixed
function setup() {
    createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(World.mouseX,World.mouseY,50,50)
  fixed.shapeColor="red"
}

function draw() {
  background(0,0,0);  
  moving.x=World.mouseX
  moving.y=World.mouseY

  if(moving.x-fixed.x<moving.width/2+fixed.width/2&&
     fixed.x-moving.x<fixed.width/2+moving.width/2&&
     moving.y-fixed.y<moving.height/2+fixed.height/2&&
     fixed.y-moving.y<fixed.height/2+moving.height/2){
      fixed.shapeColor="blue"
   
  }
  else{
    fixed.shapeColor="red"

   }
   
 
  drawSprites();
}