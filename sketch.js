const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = play;
var engine,world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
var particle;

function setup(){
    var canvas = createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(250,795,500,10);
}

function draw(){
    background();
    ground.display();

    text("score "+score,100,700);

    for(var k = 0; k <=width; k = k+80){
        divisions.push(new divisions(k,height-divisionHeight/2,10,divisionHeight));
    }

    for(var j = 40; j<=width-10; j=j+50){
        plinkos.push(new Plinko(j,75));
    }
    for(var j = 15; j<=width-10; j=j+50){
        plinkos.push(new Plinko(j,175));
    }

    for(var j = 0; j<particles.length; j++){
        particles[j].display();
    }
    for(var k = 0; k<divisions.length; k++){
        divisions[k].display();
    }

    if(particle!==null){
        particle.display();
        if(particle.body.position.x>601 && particle.body.position.x<900){
            score=score+200;
            particle=null;
            if(count>=5) {
                gameState="end";
            }
        }
    }
    if(particle!==null){
        particle.display();
        if(particle.body.position.x>301 && particle.body.position.x<600){
            score=score+100;
            particle=null;
            if(count>=5) {
                gameState="end";
            }
        }
    }
    if(particle!==null){
        particle.display();
        if(particle.body.position.x<300){
            score=score+500;
            particle=null;
            if(count>=5) {
                gameState="end";
            }
            
        }
    }
}

function mousePressed(){
    if(gameState!=="end"){
        count++;
        particle=new Particle(mouseX,10,10,10);
    }
}