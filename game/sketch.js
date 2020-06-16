let GG;
let Mana;
let MoreMagic;
let Enemy;
let Enemys;
let Life;
let GameState = 'Load';
let LifeBar = 4;
let SP = 4;
let Bottle;
let MoreBottles;
let ScoreEnemy;
let Kill = 0;
let Motion; 
let StateChanged = false;


function preload() {
  GGImg = loadImage('Sprites/Front.png');
  MagicImg = loadImage('Sprites/bullet1.png');
  ManaImg = loadImage('Sprites/Mana.png');
  HeartImg = loadImage('Sprites/Heart_0001.png');
  GameOverImg = loadImage('Sprites/GameOver.gif');
  FirstScreenImg = loadImage('Sprites/FirstScreen.gif');
  BottleImg = loadImage('Sprites/Bottle.gif');
  ScoreEnemy = loadFont('Sprites/Score.ttf');
  EnemyImg = loadImage('Sprites/E_0001.gif');
}

function setup() {
  createCanvas(800, 600);
  Motion = createVector(width / 2, height / 2);
}

function draw() {
  background(227, 230, 255);
  drawSprites();
    if (GameState == 'Start' && LifeBar > 0) { 
      textFont(ScoreEnemy, 25);
      fill(0, 0, 0);
      text('Score:  ' + Kill, 600, 25);
        
      MoreMagic.overlap(Enemys, iveBeenWatingForThis);
      Enemys.overlap(GG, Hit);
      MoreBottles.overlap(GG, MagicPotion);
    
  
        if (keyDown('S')) {
          GG.changeAnimation('Up');
          Motion.add(0, 1.2)
        }   
        else if (keyWentUp('S')) {
          GG.changeAnimation('UpSt');
          Motion.add(0, 0);
        }
    
        if (keyDown('D')) {
          GG.changeAnimation('Rt');
          Motion.add(1.2, 0);
        } 
        else if (keyWentUp('D')) {
          GG.changeAnimation('RtSt');
          Motion.add(0, 0)
        }

        if (keyDown('A')) {
          GG.changeAnimation('Lt');
          Motion.add(-1.2, 0)
          } 
        else if (keyWentUp('A')) {
          GG.changeAnimation('LtSt');
          Motion.add(0, 0)
          }
  
        if (keyDown('W')) {
          GG.changeAnimation('Dn');
          Motion.add(0, -1.2)
        } 
        else if (keyWentUp('W')) {
          GG.changeAnimation('DnSt');
          Motion.add(0, 0)
        }
    
    GG.position = Motion;
    
    if (mouseWentDown(LEFT) && SP > 0) {
      Abracadabra();
      PSYPower();
    }
  } 
  
  if (GameState == 'Load') {
    image(FirstScreenImg, 200, 175);
    if (keyDown ('N')){
      GameStart();
    }
  } 
  
  if (GameState == 'Over') {
    background(0, 0, 0);
    image(GameOverImg, 287.5, 237.5);
  }
  
  if (GameState == 'Over' && keyIsPressed && key === 'r'){
      document.location.reload(true);
      }
}



function PSYPower() {
  Magic = createSprite(GG.position.x, GG.position.y);
  Magic.addImage(MagicImg);
  Magic.attractionPoint(2, mouseX, mouseY);
  Magic.life = 100;
  MoreMagic.add(Magic);
}

function Soma() {
  Bottle = createSprite(random(10, 700), random(10, 500));
  Bottle.addImage(BottleImg);
  Bottle.life = 1000;
  MoreBottles.add(Bottle);
}

function gaspTheEnemy() {
  
  let px = width / 2 + 1000 * cos(radians(random(360)));
  let py = height / 2 + 1000 * sin(radians(random(360)));

  Enemy = createSprite(px, py);
  Enemy.addImage('ok', EnemyImg);
  Enemy.attractionPoint(5, GG.position.x, GG.position.y);
  Enemys.add(Enemy);
}

function iveBeenWatingForThis(Enemy, Magic) {
  Kill = Kill + 1;
  Enemy.remove();
  Magic.remove();
}

function Hit(Enemy) {

  LifeBar = LifeBar - 0.25;

  if (LifeBar == 3) {
    Heart.changeAnimation('3HP');
    Enemy.remove();
  }
  
  if (LifeBar == 2) {
    Heart.changeAnimation('2HP');
    Enemy.remove();
  }
  
  if (LifeBar == 1) {
    Heart.changeAnimation('1HP');
    Enemy.remove();
  }
  
  if (LifeBar == 0) {
    GG.changeAnimation('Dead');
    Heart.changeAnimation('0HP');
    background(255, 0, 0);
    setTimeout(GameOver, 2500);
    MoreMagic.removeSprites();
    Enemys.removeSprites();
    StateChanged = true; 

  }
}

function Abracadabra() {
  
  SP = SP - 1;
  
  if (SP == 3) {
    Mana.changeAnimation('-1SP');
  }
  if (SP == 2) {
    Mana.changeAnimation('-2SP');
  }
  if (SP == 1) {
    Mana.changeAnimation('-3SP');
  }
  if (SP == 0) {
    Mana.changeAnimation('-4SP');
  }
}

function MagicPotion() {
  Bottle.remove();
  SP = 4;
  Mana.changeAnimation('4SP');
}

function GameStart() {

    GameState = 'Start';

    Enemys = new Group();
    MoreMagic = new Group();
    MoreBottles = new Group();

    Heart = createSprite(width / 2, 30);
    Heart.scale = 1.5;
    Heart.addImage('4HP', HeartImg);
    Heart.addAnimation('3HP', 'Sprites/Heart_0002.gif');
    Heart.addAnimation('2HP', 'Sprites/Heart_0003.gif');
    Heart.addAnimation('1HP', 'Sprites/Heart_0004.gif');
    Heart.addAnimation('0HP', 'Sprites/Heart_0005.gif');

    GG = createSprite(width / 2, height / 2);
    GG.addImage('normal', GGImg);
    GG.scale = 1;
    GG.addAnimation('Up', 'Sprites/GG_0001.gif');
    GG.addAnimation('UpSt', 'Sprites/Front.png');
    GG.addAnimation('Rt', 'Sprites/GG_0002.gif');
    GG.addAnimation('RtSt', 'Sprites/Right.png');
    GG.addAnimation('Lt', 'Sprites/GG_0003.gif');
    GG.addAnimation('LtSt', 'Sprites/Left.png');
    GG.addAnimation('Dn', 'Sprites/GG_0004.gif');
    GG.addAnimation('Dead', 'Sprites/GG_0006.gif');
    GG.addAnimation('DnSt', 'Sprites/Back.png');

    Mana = createSprite(40, 20);
    Mana.addImage('4SP', ManaImg);
    Mana.addAnimation('-1SP', 'Sprites/Mana_0001.gif');
    Mana.addAnimation('-2SP', 'Sprites/Mana_0002.gif');
    Mana.addAnimation('-3SP', 'Sprites/Mana_0003.gif');
    Mana.addAnimation('-4SP', 'Sprites/Mana_0004.gif');


    setInterval(gaspTheEnemy, 1000);
    setInterval(Soma, 10000);
}

function GameOver() {
  GameState = 'Over';
    MoreMagic.removeSprites();
    Enemys.removeSprites();
    Heart.remove();
    GG.remove();
    Mana.remove();

    if (StateChanged){
      StateChanged = false; 
      let body = document.querySelector('body');
      
      let form = document.createElement('form');
      form.style.position = "absolute";
      form.style.top = "75%";
      form.style.left = "50%";
      form.style.transform = "translateX(-50%)";
      
      let  newBtn = document. createElement('button');
      newBtn.textContent = "Save";
      
      let newInput = document.createElement('input');
      newInput.setAttribute('type','text');
      newInput.setAttribute('placeholder', 'Enter your name');
      newInput.setAttribute('maxlength', 20);
      newInput.required = true;
      
      body.appendChild(form);
      body.appendChild(newBtn);
      body.appendChild(newInput);
      
      //form.addEventListener()
        }
}
