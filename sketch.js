function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
function preload(){
nonplayer=loadImage(nonplayer.png)
nonplayer1=loadImage(nonplayer1.png)
nonplayer2=loadImage(nonplayer2.jpg)
player1=loadImage(player1.png)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}