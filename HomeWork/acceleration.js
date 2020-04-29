//объект - корбль, при нажатии на стрелку враво начинает движение по часовой стрелке, при нажатии на стрелку влево - против часовой стрелке. Для начала движения вперед необходимо нажать струлку вверх, при повторном нажатии - набирает скорость, для уменьшении скорости необходимо нажать на стрелку вниз, если нажать столько же раз, сколько и на стрелку вверх - объект остановится, при последуещем нажатии - объет будет двигаться в противоположную сторону 

let pos;
let Rotate;
let Motion;
let Acc;
let img;

function setup() {
  createCanvas(400, 400);
  pos = createVector(0, 0);
  Rotate = createVector(0,0);
  Motion = createVector(0,0);
  Acc = createVector(0,0);
  img = loadImage("boat.png");
}

function draw() {
 background(30, 50, 55);
  
  if(keyIsDown(RIGHT_ARROW)){
     Rotate.add(0.12, 0);
     }
  
  else if(keyIsDown(LEFT_ARROW)){
     Rotate.add(-0.2, 0);
  }
  
  else if (keyIsDown(UP_ARROW)){
    Motion.add(0.02, 0.01);
  }
  
  else if (keyIsDown(DOWN_ARROW)){
    Motion.add(-0.02, -0.01);
  }
  
  pos.add(Motion);
  
  push();
  translate(width/2, height/2);
  rotate(Rotate.x*0.01);
  image(img, pos.x, 0);
  pop();
}