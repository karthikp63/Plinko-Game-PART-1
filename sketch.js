const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var wall1,wall2,wall3,wall4;
var div1,div2,div3,div4,div5,div6,div7,div8;
var particles = [];
var plinkos = [];
function setup(){
    var canvas = createCanvas(400,500);
    engine = Engine.create();
    world = engine.world;
    wall1 = new Wall(0,height/2,10,height,PI);
    wall2 = new Wall(width,height/2,10,height,PI)
    wall3 = new Wall(width/2,0,width,10,PI/2)
    wall4 = new Wall(width/2,height,width,10,PI/2)
    div1 = new Division(5,420,5,250,PI);
    div2 = new Division(70,420,5,250,PI);
    div3 = new Division(135,420,5,250,PI);
    div4 = new Division(200,420,5,250,PI);
    div5 = new Division(265,420,5,250,PI);
    div6 = new Division(330,420,5,250,PI);
    div7 = new Division(395,420,5,250,PI);
    div8 = new Division(width/2,494,width,5,PI)
    for (var x = 50; x <= width-20; x=x+45) {
        plinkos.push(new Plinko(x,50));
    }
    for (let x = 30; x <= width-10; x=x+45) {
        plinkos.push(new Plinko(x,100));
    }
    for (var x = 50; x <= width-20; x=x+45) {
        plinkos.push(new Plinko(x,150));
    }
    for (let x = 30; x <= width-10; x=x+45) {
        plinkos.push(new Plinko(x,200));
    }
    for (var x = 40; x <= width-20; x=x+45) {
        plinkos.push(new Plinko(x,250));
    }
}

function draw(){
    background("gray");
    Engine.update(engine);
    div1.display();
    div2.display();
    div3.display();
    div4.display();
    div5.display();
    div6.display();
    div7.display();
    div8.display();
    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();

    for (let j = 0; j < plinkos.length; j++) {
        plinkos[j].display();
    }
    for (let j = 0; j < particles.length; j++) {
        particles[j].display();
    }
    if(frameCount%60===0){
        particles.push(new Particle(random(width/2-20,width/2+20),10))
    }
}