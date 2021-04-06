var dog,sadDog,happyDog,adder,feeder,foodObj,database;
var foodS=0;

function preload(){
  sadDog=loadImage("images/Dog.png");
  happyDog=loadImage("images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database=firebase.database();

  foodObj=new Food();
  foodObj.getFoodStock();
  console.log(foodObj.foodStock);
  //foodObj.addFood();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
}

function draw() {
  background(46,139,87);
  foodObj.display();
  feeder=createButton("Feed Dog");
  feeder.position(700,95);
  //feeder.mousePressed(feedDog());

  adder=createButton("Add Food");
  adder.position(800,95);
  //adder.mousePressed(foodObj.addFood());
  console.log(foodObj.getFoodStock());
  console.log(foodObj.foodStock);
  drawSprites();
}

function feedDog(){
  dog.addImage(happyDog);
  image(this.image,720,220,70,70);
  foodObj.getFoodStock();
  if (foodObj.foodStock<=0) {
    foodObj.updateFood(foodObj.foodStock*0);
  } else {
    foodObj.updateFood(foodObj.foodStock-1);
  }
}