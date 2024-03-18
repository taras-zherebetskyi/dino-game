// оголошення потрбних змінних, констант та текстур
const cvs = document.getElementById("gBird");
const ctx = cvs.getContext("2d");

const bird = new Image();
const bg = new Image();
const ground = new Image();
const pipeUp = new Image();
const pipeBottom = new Image();
const gameOver= new Image();

bird.src = "../img/Bird/flappy_bird_bird.png";
bg.src = "../img/Bird/flappy_bird_bg.png";
ground.src = "../img/Bird/flappy_bird_fg.png";
pipeUp.src = "../img/Bird/flappy_bird_pipeUp.png";
gameOver.src = "../img/gameOver.png";
pipeBottom.src = "../img/Bird/flappy_bird_pipeBottom.png";

var gap = 100;
var posY = 200;
var posX = 10;
var grav=2;
var jump=40;
var play=true;
var score=0;

var pipeLoc=[];
pipeLoc[0]={
  x: cvs.width,
  y: 0
};
//зчитування натискання на кнопки
document.addEventListener("keydown",fly);
document.addEventListener("mousedown",clickFly);
function fly(key){
  if(key.keyCode == 32){
      if(play)
    posY-=jump;

  }
}
function clickFly(){
  if(play)
  posY-=jump;

}

function pipe(x){
  //цикл для руху труб
  for(var i=0; i<pipeLoc.length; i++){
  if(play)  pipeLoc[i].x--;
    ctx.drawImage(pipeUp, pipeLoc[i].x, pipeLoc[i].y);
    ctx.drawImage(pipeBottom, pipeLoc[i].x, pipeUp.height+pipeLoc[i].y + gap);
    if(pipeLoc[i].x == 5)
    score++;
    if(pipeLoc[i].x == 124)
    //
    pipeLoc.push({
      x: cvs.width,
      y: -(Math.floor(Math.random()*pipeUp.height))
    });


    //перевірка зіткнення пташки та труби, землі та вихід за межі
      if(posX + bird.width >= pipeLoc[i].x && posX <= pipeLoc[i].x + pipeUp.width
      && (posY <= pipeLoc[i].y + pipeUp.height || pipeLoc[i].y + pipeUp.height + gap <= posY+bird.height )
      || posY + bird.width-15 >= cvs.height-ground.height || posY <= 0){
        //зупинка анімації гри
     play = false;
    }


  }
}

function drawEnd(){
ctx.drawImage(bg, 0, 0);
pipe();
ctx.drawImage(ground, 0, cvs.height - ground.height+2);
ctx.drawImage(bird, posX, posY);
ctx.drawImage(gameOver, cvs.width/2-gameOver.width/2, cvs.height/2-gameOver.height/2);

if(posY + bird.height <= cvs.height - ground.height){
  posY+=Math.floor(Math.random()*4);
  posX+=Math.floor(Math.random()*4);
}
  ctx.fillStyle = "#000";
  ctx.font = "26px Verdana";
  ctx.fillText("Score "+score, 15, cvs.height-30 );

requestAnimationFrame(drawEnd);

}
//фунція промальовує текстури гри
function draw(){
  ctx.drawImage(bg, 0, 0);
  pipe();
  ctx.drawImage(ground, 0, cvs.height - ground.height+2);
  ctx.drawImage(bird, posX, posY);
 ctx.fillStyle = "#000";
  ctx.font = "26px Verdana";
  ctx.fillText("Score "+score, 15, cvs.height-30 );

//гравітація для пташки
  posY += grav;
// анімування функції draw для плавного зображення
if(play) {requestAnimationFrame(draw);} else{drawEnd();}
}
//запуск фуннції draw після загрузки останнього елементу текстури
pipeBottom.onload = draw;
