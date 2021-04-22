//Create variables here
var dog, happyDog;
var foodS, foodStock;
var dogImage,happyDogImg;
var database;

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png")
  happyDogImg = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(400,300,150,150);
  dog.addImage(dogImage);
  dog.scale=0.15

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImg);
}
  drawSprites();
  //add styles here
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x+1
}

  database.ref('/').update({
    Food:x
  })
}

