const Engine = Matter.Engine
const Body = Matter.Body
const Bodies = Matter.Bodies
const World = Matter.World
var manImg,thunderboltImg
var man, drop
drops = []
var maxDrops =100
var thunder, thunderCreatedFrame = 0;

function preload(){
  manWalking= loadAnimation("images/man/walking_1.png"
  ,"images/man/walking_2.png","images/man/walking_3.png" 
  ,"images/man/walking_4.png"  
  ,"images/man/walking_5.png"  
  ,"images/man/walking_6.png"  
  ,"images/man/walking_7.png"  
  ,"images/man/walking_8.png")  
  thunder1 = loadImage("images/thunderbolt/1.png")
  thunder2 = loadImage("images/thunderbolt/2.png")
  thunder3 = loadImage("images/thunderbolt/3.png")
  thunder4 = loadImage("images/thunderbolt/4.png")
    
}

function setup(){
   createCanvas(400,400)
    engine = Engine.create()
    world = engine.world
    
    man = new Man(200,200,60)

    if(frameCount%100===0){
        for(var i=0; i<maxDrops;i++){
          drops.push(new Drop(random(0,400),random(0,400),3,10));
         }
        }

    manImage = createSprite(man.body.position.x,man.body.position.y+35)
    manImage.addAnimation("walking",manWalking)
    manImage.scale = 0.3

}

function draw(){
    background("black");
  Engine.update(engine);

  var rand = Math.round(random(1,4));
  if(frameCount%80===0){
    thunderCreatedFrame = frameCount;
   thunder = createSprite(random(10,370),random(10,30),10,10);
   thunder.scale = 0.3;
   switch(rand){
     case 1 : thunder.addImage(thunder1);
     break;
     case 2 : thunder.addImage(thunder2);
     break;
     case 3 : thunder.addImage(thunder3);
     break;
     case 3 : thunder.addImage(thunder4);
     break;
     default : break;
   }
}

if(thunderCreatedFrame + 20 === frameCount && thunder){
    thunder.destroy();
 }

   for(var i=0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }
    drawSprites();
}   

