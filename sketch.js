var fixedrect, movingrect;

function setup() {
  createCanvas(1200,800);
  
  fixedrect=createSprite(200,200,30,60);
  movingrect=createSprite(400,200,20,90);

  fixedrect.shapeColor="yellow";
  movingrect.shapeColor="yellow";

  fixedrect.debug=true;
  movingrect.debug=true;

  //movingrect.velocityX=-3;
  //fixedrect.velocityX=3;
}

function draw() {
  background(0);  
 
  if(isTouching(movingrect,fixedrect)){

   movingrect.shapeColor="pink";
   fixedrect.shapeColor="pink";

  }
  else
  {
    movingrect.shapeColor="yellow";
    fixedrect.shapeColor="yellow";
  }
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
 
  

  drawSprites();
}

