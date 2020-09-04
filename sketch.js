const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball, ball2;
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var ball_options ={
        restitution : 1.5
    }

    ball = Bodies.circle(180,50,50,ball_options);
    World.add(world,ball);


    var ball2_options ={
        restitution : 1.5
    }

    ball2 = Bodies.circle(180,50,50,ball2_options);
    World.add(world,ball2);



    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,390,800,20,ground_options);
    World.add(world,ground);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("yellow");
    rect(ground.position.x,ground.position.y,800,20);
    ellipseMode(CENTER);
    fill("lightBlue");
    ellipse(ball.position.x,ball.position.y,100,100);
    ellipseMode(CENTER);
    fill("red");
    ellipse(ball2.position.x,ball2.position.y,100,100);

}