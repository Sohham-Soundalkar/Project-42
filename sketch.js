const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var height;
var maxDrops = 100;
var drops = [];
var umbrella;
var thunder1, thunder2, thunder3, thunder4;
var thunderGroup;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
    createCanvas(300,1000);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    height = 1000;
    
    thunderGroup = createGroup();
    
    umbrella = new Umbrella(200,500);
    
  if(frameCount % 150 === 0){

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0,400)));
    }
}
}

function draw(){
    background("black");
    Engine.update(engine);

    lightningStrike();

    umbrella.display();

    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    drawSprites();
}

function lightningStrike(){
    if (frameCount % 60 === 0){
      var thunder = createSprite(150,0,30,30);
      
       var rand = Math.round(random(1,4));
       switch(rand) {
         case 1: thunder.addImage(thunder1);
                 break;
         case 2: thunder.addImage(thunder2);
                 break;
         case 3: thunder.addImage(thunder3);
                 break;
         case 4: thunder.addImage(thunder4);
                 break;
         default: break;
       }          
       thunder.scale = 0.5;
       thunder.lifetime = 25;
      
       thunderGroup.add(thunder);
    }
   }

