var backgroundImg;
var balloon, balloonImg;
var database;





function preload(){
  backgroundImg = loadImage("cityImage.png");
  balloonImg = loadImage("HotAirBallon-01.png");
}



function setup() {
  createCanvas(1500,800);

  database = firebase.database();
  

  balloon = createSprite(150,250);
  balloon.addImage(balloonImg);
  balloon.scale=0.5;

  var balloonPositionRef = database.ref("ball/position");
  balloonPositionRef.on("value", readPosition);

}

function draw() {
  background(backgroundImg);  

  if(keyDown(UP_ARROW)){
    changePosition(0,-10);
  }
  if(keyDown(DOWN_ARROW)){
    changePosition(0,10)
  }
  if(keyDown(RIGHT_ARROW)){
    changePosition(10,0);
  }
  if(keyDown(LEFT_ARROW)){
    changePosition(-10,0);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
}

function changePosition(x,y){
    balloon.x = balloon.x+x;
    balloon.y = balloon.y+y;
    database.ref("ball/position").update({x:balloon.x,y:balloon.y});
}

function readPosition(data){
    balloonPosition = data.val();
    balloon.x = balloonPosition.x;
    balloon.y = balloonPosition.y;
}