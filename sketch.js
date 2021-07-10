var canvas;
var music;
var music2;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var ball;
var edges;
var score=4;

function preload(){
    music = loadSound("black.mp3");
    music2=loadSound("white.mp3");
}


function setup(){
    canvas = createCanvas(1600,700);

    //create 4 different surfaces
 box1=createSprite(100,600,200,50);
 box1.shapeColor="black";
 box2=createSprite(300,650,200,50)
 box2.shapeColor="white";
box3=createSprite(500,600,200,50)
box3.shapeColor="black";
box4=createSprite(700,650,200,50)
box4.shapeColor="white";
box5=createSprite(900,600,200,50)
box5.shapeColor="black";
box6=createSprite(1100,650,200,50)
box6.shapeColor="white";
box7=createSprite(1300,600,200,50)
box7.shapeColor="black";
box8=createSprite(1500,650,200,50)
box8.shapeColor="white";


    //create box sprite and give velocity

    ball=createSprite(100,50,55,55,50)
   ball.shapeColor="green";
   ball.velocityX=4;
   ball.velocityY=7;

}

function draw() {
    background(6,133,207);
   
   fill("yellow");
   textSize(60)
   text("score = "+score,100,50)
   
    //create edgeSprite
   edges= createEdgeSprites();
    ball.bounceOff(edges);


    if(box1.isTouching(ball)&&ball.bounceOff(box1)){
        score=score/2;
        ball.scale=0.5
        music.play();
        ball.shapeColor="red"    
    }

    if(box2.isTouching(ball)&&ball.bounceOff(box2)){
        score=score*2;
        ball.scale+=0.1
        music2.play();
        ball.shapeColor=rgb(80,36,140);    
    }

    



    //add condition to check if box touching surface and make it box

    drawSprites();
}
