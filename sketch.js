//create variables
var  nightimage;
var fairy, fairyimage;
var star, starimage; 

function preload()  {
//preload the images here
 nightimage = loadImage ("images/starnight.png");
 fairyimage = loadImage ("images/fairy1.png");
 starimage = loadImage ("images/star.png");
}

function setup() {
	createCanvas(800, 700);

  //create fairy
  fairy = createSprite (100,550,10,10);
  fairy.addImage(fairyimage);
  fairy.scale = 0.2;

  //create star
  star = createSprite(650,120,10,10);
  star.addImage(starimage);
  star.scale = 0.2;

  star.setCollider("rectangle",0,0,star.width,star.height);
  star.debug = false

  fairy.setCollider("rectangle",0,0,1020,150);
  fairy.debug = false



}


function draw() {
  background(nightimage);
    
 //control fairy with arrow keys
  if (keyDown("right")) {
    fairy.x = fairy.x+10;
  }
  
  if (keyDown("left")) {
    fairy.x = fairy.x-10;
  }
  
  // make star fall
  if(keyDown("DOWN_ARROW")) {
    star.velocityY = 3;
    star.velocityX = 0;
  }
  
  if (star.isTouching(fairy)) {
    star.velocityY = 0;
    star.velocityX = 0;
  }
  
  
  drawSprites();
}
