const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function setup() {
  createCanvas(480,800);
  
  ground = new Ground(240,height,800,10);
}

function draw() {
  background(0);  

  ground.display();

  drawSprites();
}