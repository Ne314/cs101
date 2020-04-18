function setup() {
  createCanvas(450, 450);
  getRect(random(4, 15), random(10,30));
  getLine(random(1,10));
  
  for (let i = 0; i < 25; i++){
    let crl4 = random(1, 100);
    let d = random(3, 15);
    fill(255, 255, 255, crl4);
    stroke(255, 255, 255, crl4);
    ellipse(random(0, width), random(0, height), d, d);
  }
}

let y = 0;
let crlB = 0;
let x = 1;

function getRect(n, b){

  for(let i =0; i < height/n; i++){
    stroke(255-crlB/2, 164 -crlB, 137);
    fill(255-crlB/2, 164 -crlB, 137);
    rect(0, 0 + y, width, height/n);
    y = y + height/n;
    crlB = crlB + b;
  }
}

function getLine(n){ 

  for (let i = 0; i < width; i++){
    strokeWeight(n/10);
    stroke(255, 236, 210);
    line(0, 0, width/2 - x, height);
    line(width, 0 , width/2 + x, height);
    line(0, height, width/2 - x , 0);
    line(width, height, width/2 + x , 0);
    x = x + n;
  }
}
