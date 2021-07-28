var player, playerimg;
var bullet , bulletimg;
// var enemy , enemyimg;
var gun , gunimg;
var wall ;
var bg , bgimg;
var clouds , cloudsimg , cloudsGroup;
var enemy1;
var boundary1 , boundary2;




function setup() {
  createCanvas(1200,600);
var enemy1 = createSprite(1100,500)
enemy1.velocityY = -6;

enemy2 = createSprite(950,400)
enemy2.velocityY = -6;

enemy3 = createSprite(800,300)
enemy3.velocityY = -6;
var edges = createEdgeSprites();

 
 player = createSprite(50,300 , 20 , 20)

boundary1 = createSprite(200,10,2000,5)


 if(enemy2.isTouching(boundary1)){
  enemy2.bounceOff(boundary1);
}

if(enemy3.isTouching(boundary1)){
  enemy3.bounceOff(boundary1);
}
}

function draw() {
   background("yellow");  
  
  Player();
  Enemy();
  Bullet();
  Clouds();
  Gun();  
  
  if(enemy1.isTouching(boundary1)){
   enemy1.x = 1100
 }

drawSprites();
}

function Player(){





}

function Enemy(){




}

function Bullet(){

}

function Clouds(){

}

function Gun(){

}

function keyPressed(){

if(keyCode === UP_ARROW){

player.y = player.y-7;

}

if(keyCode === DOWN_ARROW){


player.y = player.y+7;
  
}

}






















