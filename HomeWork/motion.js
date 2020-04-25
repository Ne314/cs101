// Кривая погони + музыка из "Shin Megami Tensei: Nocturne" (фоновая музыка не оттуда) 
function setup() {
  createCanvas(500, 500);
}

let E = 0;

function draw() {
  translate(width/2, height/2);
  background(27, 16); 
  spiral(0.01, -E, 50); 
  E = E + 0.5;
  spiral(0.01 , E, 50, 30); 
  
  ost.setVolume(0.001);
  ost.play();
} 


function spiral(q, e, n, m){
  
  for(let i = 0; i < n; i++){
    e = e + 15;
    q = q*1.16;
    let a = 0;
    let r = 0;
      
    for(let i = 0; i < 5; i ++){
      push();
        rotate(radians(e+a));
        stroke(255 - r, 153, 157, m); 
        r = r + 51;
        line((-14.5)*q, (-20)*q, 14.5*q, -20*q);
      pop();  
      a = a + 72;
    }
  }
}

function preload() {
  soundFormats('mp3', 'ogg');
  ost = loadSound('TheDayOfNight.mp3');
}}
