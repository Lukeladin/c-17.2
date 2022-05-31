var player, obstaculo,road;
var playerImg,obstaculoImg,roadImg;
function preload(){
 roadImg = loadImage("images/road.png");
}

function setup() {
  createCanvas(800, 400);
  road = createSprite(0,0);
  road.addImage(roadImg);
}

function draw() {
  background(220);

  drawSprites();
}