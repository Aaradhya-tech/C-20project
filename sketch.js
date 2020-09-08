var speed1,speed2,speed3;
var weight1,weight2,weight3;
var car1,car2,car3;
var wall;

function setup() {
  createCanvas(500,400);

  speed1 = random(52,90);
  speed2 = random(67,80);
  speed3 = random(55,90);
  weight1 = random(400,1500);
  weight2 = random(400,1500);
  weight3 = random(400,1500);

  car1 = createSprite(20, 50, 20, 20);
  car1.shapeColor = "white";
  car2 = createSprite(20, 170, 20, 20);
  car2.shapeColor = "white";
  car3 = createSprite(20, 300, 20, 20);
  car3.shapeColor = "white";

  wall = createSprite(470,200,10,400);
  wall.shapeColor = "white";

  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3;

}

function draw() {
  background(0);
  
car1.collide(wall);
car2.collide(wall);
car3.collide(wall);

// deformation for car1
var deformation=0.5 * weight1 * speed1* speed1/22509;
if(deformation>180)
{
  car1.shapeColor=color(255,0,0);
}

if(deformation<180 && deformation>100)
{
  car1.shapeColor=color(230,230,0);
}

if(deformation<100)
{
  car1.shapeColor=color(0,255,0);
}

// deformation for car2
var deformation2 = 0.5 * weight2 * speed2* speed2/22509;
if(deformation2 >180)
{
  car2.shapeColor= "red";
}

if(deformation2 < 180 && deformation2 > 100)
{
  car2.shapeColor= "yellow";
}

if(deformation2 < 100)
{
  car2.shapeColor= "green";
}

// deformation for car3
var deformation3 = 0.5 * weight3 * speed3* speed3/22509;
if(deformation3 >180)
{
  car3.shapeColor= "red";
}

if(deformation3 < 180 && deformation3 > 100)
{
  car3.shapeColor= "yellow";
}

if(deformation3 < 100)
{
  car3.shapeColor= "green";
}

drawSprites();
}

