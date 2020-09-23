

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  marioLeftImg = loadImage("images/marleft.png");
  marioRightImg = loadImage("images/marright.png");
  brickImage = loadImage("images/brick.png");
}

//  Controllers

function setup() {
  createCanvas(1000, 600);
  frameRate(60);
  mario = createSprite(200,505,20,50);
  mario.addImage("running", marioRightImg);
  mario.scale =0.3;
  ground = createSprite(200,585,400,10);
  ground.visible = false;
  bricksGroup = new Group();
 
 //gameStarted = false;
}

function draw() {
  background(247, 239, 231);
  
    generatePlatforms();
 
    if(keyDown("up") ) {
      mario.velocityY=-10;
    }
    if(keyDown("left") ) {
      mario.x=mario.x-5;
    }
    if(keyDown("right") ) {
      mario.x=mario.x+5;
    }
    mario.velocityY=mario.velocityY+0.5;

    for(var i = 0 ; i< (bricksGroup).length ;i++){
      var temp = (bricksGroup).get(i) ;
      
      if (temp.isTouching(mario)) {
         mario.collide(temp);
        }
          
      }
   drawSprites();
  
//  }
}




function generatePlatforms() {
  if (frameCount % 70 === 0) {
    var brick = createSprite(1200,10,40,10);
    brick.x = random(50,450);
    brick.addImage(brickImage);
    brick.scale = 0.5;
    brick.velocityY = 5;
    
    brick.lifetime =250;
   bricksGroup.add(brick);
  }
}
