const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body=Matter.Body;
const Render=Matter.Render;
var ground, message,ground1;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
ground= new Ground(200,300,150,200)
message=new Message(200,160,50,50)
ground1=new Ground(600,380,1200,20);
Body.setVelocity(message.body,{x:9,y:5});

var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1600,
      height: 700,
      wireframes: false
    }
  });

  Engine.run(engine);
  Render.run(render);
}

function draw(){
    background(0);
    Engine.update(engine);
     ground.display();
     message.display();
     ground1.display();

     
}




