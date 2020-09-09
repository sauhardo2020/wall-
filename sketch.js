var wall,thickness,bullet,speed,weight; 

function setup(){
 createCanvas(1600,400)

  thickness=random(22,83);

  speed=random(223,321);

  weight=random(30,52);

  wall=createSprite(1200,200,thickness,height/2);

  wall.shapeColor=color(80,80,80)

  bullet=createSprite(120,180,40,20);

  bullet.velocityX=speed;


}

function draw(){

background("white");

drawSprites();

if(hasCollided(bullet,wall)){

  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage >10){
  
  wall.shapeColor=color(255,0,0);

}
if(damage<10){
  
  wall.shapeColor=color(0,255,0);

}

}
}

function hasCollided(lbullet, lwall)

{
   bulletRightEdge=lbullet.x +lbullet.width;

   wallLeftEdge = lwall.x;

   if(bulletRightEdge>=wallLeftEdge){

     return true;

   }

    return false;
}


  