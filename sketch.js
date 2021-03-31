var tom;
var jerry;
var tom1,tom2;
var jerry1,jerry2;
function preload() {
  tom1= loadAnimation("cat1.png") ; 
  tom2= loadAnimation("cat2.png","cat3.png");
  tom3= loadAnimation("cat4.png")  

  jerry1= loadAnimation("mouse1.png") ; 
  jerry2= loadAnimation("mouse2.png","mouse3.png");
  jerry3= loadAnimation("mouse4.png")  
  bg=loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom= createSprite(850,600);
tom.addAnimation("resting",tom1)
tom.scale=0.2;

jerry= createSprite(200,600);
jerry.addAnimation("standing",jerry1)
jerry.scale=0.2;
}

function draw() {

    background(bg);
    if (tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0;
        tom.addAnimation("last",tom3);
        tom.changeAnimation("last",tom3);
        jerry.addAnimation("last",jerry3);
        jerry.changeAnimation("last",jerry3);
    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();

}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW);
tom.velocityX=-5;
tom.addAnimation("run",tom2);
tom.changeAnimation("run",tom2);
jerry.addAnimation("run",jerry2);
jerry.changeAnimation("run",jerry2);
}
