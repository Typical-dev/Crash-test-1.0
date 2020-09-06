var car,wall;
var car2, wall2;
var car3, wall3;
var car4, wall4;
var speed,weight;
var divide1,divide2,divide3,divide4,divide5;

function setup(){
    createCanvas(windowWidth,windowHeight);
    
    speed=random(55,90);
    weight=random(400,1500);

    car=createSprite(50,400,50,50);
    car.velocityX = speed;

    car2=createSprite(50,800,50,50);
    car2.velocityX = speed;

    car3=createSprite(50,600,50,50);
    car3.velocityX = speed;

    car4=createSprite(50,200,50,50);
    car4.velocityX = speed;

    wall=createSprite(1800,400,60,height/8);
    wall2=createSprite(1800,800,60,height/8);
    wall3=createSprite(1800,600,60,height/8);
    wall4=createSprite(1800,200,60,height/8);

    //divide1=createSprite(50,500,10000,30);
    //divide2=createSprite(50,900,10000,30);
    //divide3=createSprite(50,700,10000,30);
    //divide4=createSprite(50,300,10000,30);
    //divide5=createSprite(50,100,10000,30);
}

function draw(){
  background("#000000");
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180);
    {
      car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }

    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }
  
  if(wall2.x-car2.x < (car2.width+wall2.width)/2)
  {
    car2.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180);
    {
      car2.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car2.shapeColor=color(230,230,0);
    }

    if(deformation<100)
    {
      car2.shapeColor=color(0,255,0);
    }
  }
  
  if(wall3.x-car3.x < (car3.width+wall3.width)/2)
  {
    car3.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180);
    {
      car3.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car3.shapeColor=color(230,230,0);
    }

    if(deformation<100)
    {
      car3.shapeColor=color(0,255,0);
    }
  }
  
  if(wall4.x-car4.x < (car4.width+wall4.width)/2)
  {
    car4.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180);
    {
      car4.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car4.shapeColor=color(230,230,0);
    }

    if(deformation<100)
    {
      car4.shapeColor=color(0,255,0);
    }
  }

    divide1=createSprite(50,500,10000,20);
    divide2=createSprite(50,900,10000,20);
    divide3=createSprite(50,700,10000,20);
    divide4=createSprite(50,300,10000,20);
    divide5=createSprite(50,100,10000,20);
    divide1.shapeColor=color(255, 255, 255)
    divide2.shapeColor=color(255, 255, 255)
    divide3.shapeColor=color(255, 255, 255)
    divide4.shapeColor=color(255, 255, 255)
    divide5.shapeColor=color(255, 255, 255)


  drawSprites();
}