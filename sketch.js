
var monkey , monkey_running , monkey_collided;
var banana ,bananaImage, obstacle, obstacleImage     
var FoodGroup, obstacleGroup
var score,survivalTime,ground

function preload(){       
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkey_collided = loadImage("sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  FoodGroup = new Group()
  obstacleGroup = new Group()
  
}

function setup() {
  
  createCanvas(670,400);
  score = 0;
  survivalTime = 0;
  
  
monkey = createSprite(90,370,20,20);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(0,400,1500,10);

  
}



function draw() {
  background("green");
  

  if (keyDown("space")&&monkey.y >=350){
    monkey.velocityY=-10
              
  }         
  
  
  
   monkey.velocityY = monkey.velocityY + 0.3
   monkey.collide(ground)
   
  
  ground.velocityX = -7;
  ground.x = ground.width/2;
  
  

  
  
  drawSprites();
  if (World.frameCount%200===0){
    fruits();
  }
  if(World.frameCount%300===0){
    stones();
  }
    if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.collide(monkey);
   FoodGroup.setVelocityXEach(0);
   obstacleGroup.setVelocityXEach(0);
     
      
    }
    
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach();
    score = score+1; 
     }
 fill("white");
  text("score: " + score, 500,50)
  
  fill("black");  
  var survivalTime=Math.round(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,350,50);
}
function fruits(){
  banana=createSprite(670,Math.round(random(170,320)),10,10)
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX = -3;
  FoodGroup.add(banana);
}
function stones(){
  obstacle = createSprite(670,380,10,10)
  obstacle.addImage(obstacleImage)
  obstacle.velocityX=-4
  obstacle.scale = 0.2 
  obstacleGroup.add(obstacle)

}
