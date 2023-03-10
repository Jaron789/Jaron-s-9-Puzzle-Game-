var backgroundSprite;

var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var img1,img2,img3,img4,img5,img6,img7,img8,img7;
var scramble,scrambleImg;
var emptyBlockNumber;

function preload(){
img1 = loadImage("box1.png")
img2 = loadImage("box2.png")
img3 = loadImage("box3.png")
img4 = loadImage("box4.png")
img5 = loadImage("box5.png")
img6 = loadImage("box6.png")
img7 = loadImage("box7.png")
img8 = loadImage("box8.png")
scrambleImg = loadImage("scramble.png")
}
function setup(){
createCanvas(600,600);
backgroundSprite = createSprite(300,300,450,450)
backgroundSprite.shapeColor = "white"
block1 = createSprite(140,140,300,300)
block1.shapeColor = "blue"
block1.scale = 0.34

block2 = createSprite(290,140,300,300)
block2.shapeColor = "blue"
block2.scale = 0.34


block3 = createSprite(440,140,300,300)
block3.shapeColor = "blue"
block3.scale = 0.34


block4 = createSprite(140,290,300,300)
block4.shapeColor = "blue"
block4.scale = 0.34


block5 = createSprite(290,290,300,300)
block5.shapeColor = "blue"
block5.scale = 0.34


block6 = createSprite(440,290,300,300)
block6.shapeColor = "blue"
block6.scale = 0.34


block7 = createSprite(140,450,300,300)
block7.shapeColor = "blue"
block7.scale = 0.34


block8 = createSprite(290,450,300,300)
block8.shapeColor = "blue"
block8.scale = 0.34


block9 = createSprite(440,450,300,300)
block9.shapeColor = "blue"
block9.scale = 0.34



var randomNumber = Math.round(random(0,2))
console.log(randomNumber)
if(randomNumber == 1){
  block1.addImage(img8)
  block2.addImage(img6)
  block3.addImage(img3)
  block4.addImage(img7)
  block5.addImage(img1)
  block6.addImage(img4)
  block7.addImage(img2)
  block8.addImage(img5)
  emptyBlockNumber = 9 
  emptyX = 440
  emptyY = 450
  if(mousePressedOver(block1)){
   console.log(block1.x)
   console.log(block1.y)
    if((block1.x == emptyX-150  && block1.y == emptyY) 
    ||(block1.x == emptyX+150 && block1.y == emptyY)
    ||(block1.x == emptyX && block1.y == emptyY - 160)
    ||(block1.x == emptyX && block1.y == emptyY +160)){
      block9.x = block1.x
      block9.y = block1.y
      block1.x = emptyX
      block1.y = emptyY
     
    }}
    if(mousePressedOver(block2)){
      if((block2.x == emptyX-150  && block2.y == emptyY) 
      ||(block2.x == emptyX+150 && block2.y == emptyY)
      ||(block2.x == emptyX && block2.y == emptyY - 160)
      ||(block2.x == emptyX && block2.y == emptyY +160)){
        block9.x = block2.x
        block9.y = block2.y
        block2.x = emptyX
        block2.y = emptyY
       
      }
  
  }
  if(mousePressedOver(block3)){
    if((block3.x == emptyX-150  && block3.y == emptyY) 
    ||(block3.x == emptyX+150 && block3.y == emptyY)
    ||(block3.x == emptyX && block3.y == emptyY - 160)
    ||(block3.x == emptyX && block3.y == emptyY +160)){
      block9.x = block3.x
      block9.y = block3.y
      block3.x = emptyX
      block3.y = emptyY
     
    }
 }
 if(mousePressedOver(block4)){
  if((block4.x == emptyX-150  && block4.y == emptyY) 
  ||(block4.x == emptyX+150 && block4.y == emptyY)
  ||(block4.x == emptyX && block4.y == emptyY - 160)
  ||(block4.x == emptyX && block4.y == emptyY +160)){
    block9.x = block4.x
    block9.y = block4.y
    block4.x = emptyX
    block4.y = emptyY
   
  }
}
if(mousePressedOver(block5)){
  if((block5.x == emptyX-150  && block5.y == emptyY) 
  ||(block5.x == emptyX+150 && block5.y == emptyY)
  ||(block5.x == emptyX && block5.y == emptyY - 160)
  ||(block5.x == emptyX && block5.y == emptyY +160)){
    block9.x = block5.x
    block9.y = block5.y
    block5.x = emptyX
    block5.y = emptyY
   
  }
}

if(mousePressedOver(block6)){
  if((block6.x == emptyX-150  && block6.y == emptyY) 
  ||(block6.x == emptyX+150 && block6.y == emptyY)
  ||(block6.x == emptyX && block6.y == emptyY - 160)
  ||(block6.x == emptyX && block6.y == emptyY +160)){
    block9.x = block6.x
    block9.y = block6.y
    block6.x = emptyX
    block6.y = emptyY
   
  }
}


if(mousePressedOver(block7)){
  if((block7.x == emptyX-150  && block7.y == emptyY) 
  ||(block7.x == emptyX+150 && block7.y == emptyY)
  ||(block7.x == emptyX && block7.y == emptyY - 160)
  ||(block7.x == emptyX && block7.y == emptyY +160)){
    block9.x = block7.x
    block9.y = block7.y
    block7.x = emptyX
    block7.y = emptyY
   
  }
}

if(mousePressedOver(block8)){
  if((block8.x == emptyX-150  && block8.y == emptyY) 
  ||(block8.x == emptyX+150 && block8.y == emptyY)
  ||(block8.x == emptyX && block8.y == emptyY - 160)
  ||(block8.x == emptyX && block8.y == emptyY +160)){
    block9.x = block8.x
    block9.y = block8.y
    block8.x = emptyX
    block8.y = emptyY
   
  }
}
}

if(randomNumber == 2){
  block1.addImage(img5)
  block2.addImage(img2)
  block3.addImage(img4)
  block4.addImage(img6)
  block5.addImage(img1)
  block6.addImage(img8)
  block7.addImage(img7)
  block9.addImage(img3)
 
  
}
if(randomNumber == 3){
  block1.addImage(img3)
  block3.addImage(img5)
  block4.addImage(img7)
  block5.addImage(img2)
  block6.addImage(img4)
  block7.addImage(img8)
  block8.addImage(img1)
  block9.addImage(img6)

}

if(randomNumber == 4){
  block1.addImage(img1)
  block2.addImage(img3)
  block3.addImage(img2)
  block4.addImage(img5)
  block6.addImage(img6)
  block7.addImage(img4)
  block8.addImage(img7)
  block9.addImage(img8)

}
}
function draw(){
background("black");
drawSprites()
}
