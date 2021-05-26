const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,230,10);
 
  //set1
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //set2

  block01 = new Block(600,175,30,40);
  console.log(block1);
  block02 = new Block(630,175,30,40);
  block03 = new Block(660,175,30,40);
  block04 = new Block(690,175,30,40);
  block05 = new Block(720,175,30,40);
  block06 = new Block(750,175,30,40);
  block07 = new Block(780,175,30,40);
  //level two
  block08 = new Block(630,135,30,40);
  block09 = new Block(660,135,30,40);
  block010 = new Block(690,135,30,40);
  block011 = new Block(720,135,30,40);
  block012 = new Block(750,135,30,40);
  //level three
  block013 = new Block(660,95,30,40);
  block014 = new Block(690,95,30,40);
  block015 = new Block(720,95,30,40);
  //top
  block016 = new Block(690,155,30,40);
   
   

   

  //ball with slings
  polygon_img = Bodies.circle(50,200,20)
  World.add(world,polygon_img);
 


  slingShot = new SlingShot(this.polygon_img,{x:200,y:200})

}
function draw() {
  background("white"); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("skyblue");
  block01.display();
  block02.display();
  block03.display();
  block04.display();
  block05.display();
  block06.display();
  block07.display();
  fill("pink");
  block08.display();
  block09.display();
  block010.display();
  block011.display();
  block012.display();
  fill("turquoise");
  block013.display();
  block014.display();
  block015.display();
  fill("grey");
  block016.display();



  text("Drag the line and release to hit the blocks",100,50)

  ellipse(polygon_img.position.x,polygon_img.position.y,20);
      slingShot.display();

}
 function mouseDragged(){
   Matter.Body.setPosition(this.polygon_img,{x:mouseX,y:mouseY});
 }

 function mouseReleased(){
   slingShot.fly();
 }