var  cat;
var mouse;
var bgImg;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat4.png");
    mouseImg1 = loadImage("images/mouse4.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catHap = loadImage("images/cat1.png");
    mouseHap = loadImage("images/mouse1.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createCanvas(800,600);
    cat.addImage(catImg1);

    mouse = createCanvas(200,600);
    mouse.addImage(mouseImg1);

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (mouse.width + cat.width)/2) {
        cat.velocityX = 0;
        cat.addImage(catHap);
        mouse.addImage(mouseHap);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW) {
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }
  if (keyCode === LEFT_ARROW) {
      cat.velocityX = -3;
      cat.addAnimation("catMoving",catImg2);
      cat.changeAnimation("catMoving");

  }
}
