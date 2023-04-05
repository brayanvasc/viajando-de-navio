var seaImg;
var shipImg1;
var sea,ship;


function preload(){
seaImg=loadImage("sea.png");
shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(1500,700);
  sea=createSprite(200,200,10,10);
  sea.addImage(seaImg);
  ship=createSprite(400,300,10,10);
  ship.addAnimation("shipNavegation",shipImg1);
  ship.scale=0.6;
}

function draw() {
  

  background("blue");
  
  sea.velocityX=3;
  if(sea.x < 0){
   sea.x = sea.width/2;
  }
    drawSprites();

 
}
