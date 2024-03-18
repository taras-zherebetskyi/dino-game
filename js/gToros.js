// оголошення потрбних змінних, констант та текстур
const cvs = document.getElementById("gToros");
const ctx = cvs.getContext("2d");

//audio
const bdMusic = new Audio();
const santaM1 = new Audio();
const santaM2 = new Audio();
const santaM3 = new Audio();
const prig = new Audio();
const skok = new Audio();
const dinoM = new Audio();
const chiks = new Audio();
const riderM = new Audio();
const downM = new Audio();
const griz = new Audio();
const flyHeadM = new Audio();
const gmOverM = new Audio();
bdMusic.src = "../audio/gToros/BackgrondMusic.mp3";
santaM1.src = "../audio/gToros/santa1.mp3";
santaM2.src = "../audio/gToros/santa2.mp3";
santaM3.src = "../audio/gToros/santa3.mp3";
prig.src = "../audio/gToros/prig.mp3";
skok.src = "../audio/gToros/skok.mp3";
dinoM.src = "../audio/gToros/dino.mp3";
chiks.src = "../audio/gToros/chiks.mp3";
riderM.src = "../audio/gToros/rider.mp3";
downM.src = "../audio/gToros/down.mp3";
griz.src = "../audio/gToros/griz.mp3";
flyHeadM.src = "../audio/gToros/flyHead.mp3";
gmOverM.src = "../audio/gToros/gameOver.mp3";

const bg = new Image();
const ground = new Image();
const gmOver = new Image();
bg.src = "../img/Toros/bg.png";
ground.src = "../img/Toros/ground.png";
gmOver.src = "../img/Toros/gmOver.png";
const cl1 = new Image();
const cl2 = new Image();
const cl3 = new Image();
const cl4 = new Image();
cl1.src = "../img/Toros/cloud/cloud1.png";
cl2.src = "../img/Toros/cloud/cloud2.png";
cl3.src = "../img/Toros/cloud/cloud3.png";
cl4.src = "../img/Toros/cloud/cloud4.png";
const fll1 = new Image();
const fll2 = new Image();
const face1 = new Image();
const face2 = new Image();
const rn1 = new Image();
const rn2 = new Image();
const seat1 = new Image();
const seat2 = new Image();
const stay1 = new Image();
const stay2 = new Image();
const thw1 = new Image();
const thw2 = new Image();
const thw11 = new Image();
const thw22 = new Image();
const wlk1 = new Image();
const wlk2 = new Image();
const wlk_rn1 = new Image();
const wlk_rn2 = new Image();
fll1.src = "../img/Toros/move/fall1.png";
fll2.src = "../img/Toros/move/fall2.png";
face1.src = "../img/Toros/move/face1.png";
face2.src = "../img/Toros/move/face2.png";
rn1.src = "../img/Toros/move/running1.png";
rn2.src = "../img/Toros/move/running2.png";
seat1.src = "../img/Toros/move/seat1.png";
seat2.src = "../img/Toros/move/seat2.png";
stay1.src = "../img/Toros/move/stay1.png";
stay2.src = "../img/Toros/move/stay2.png";
thw1.src = "../img/Toros/move/throw12.png";
thw2.src = "../img/Toros/move/throw21.png";
thw11.src = "../img/Toros/move/throw1.png";
thw22.src = "../img/Toros/move/throw2.png";
wlk1.src = "../img/Toros/move/walking1.png";
wlk2.src = "../img/Toros/move/walking2.png";
wlk_rn1.src = "../img/Toros/move/walking11.png";
wlk_rn2.src = "../img/Toros/move/walking22.png";
const bdHead = new Image();
const drpHd = new Image();
const dino1 = new Image();
const dino2 = new Image();
const rider1 = new Image();
const rider2 = new Image();
const riderStay1 = new Image();
const riderStay2 = new Image();
riderStay1.src = "../img/Toros/bulet/riderStay1.png";
riderStay2.src = "../img/Toros/bulet/riderStay2.png";
bdHead.src = "../img/Toros/bulet/BadHead.png";
drpHd.src = "../img/Toros/bulet/DropHead.png";
dino1.src = "../img/Toros/bulet/dino1.png";
dino2.src = "../img/Toros/bulet/dino2.png";
rider1.src = "../img/Toros/bulet/rider1.png";
rider2.src = "../img/Toros/bulet/rider2.png";
const santa1 = new Image();
const santa2 = new Image();
const santaHd1 = new Image();
const santaHd2 = new Image();
santa1.src = "../img/Toros/bulet/santa1.png";
santa2.src = "../img/Toros/bulet/santa2.png";
santaHd1.src = "../img/Toros/bulet/SantaHd1.png";
santaHd2.src = "../img/Toros/bulet/SantaHd2.png";


//оголошуємо потрібні змінні
var play = true;
var speed = 2;
var score = 0;
var cloudMove = [];
var cloudSpeed = [];
var face = true;
var trsPos = {
  x: 450,
  y: 660
};
var anim = true;
var animSpd = 0;
var animSpeed = 10;
var jmpTime = 14;
var jmpTm = 0;
var jmpanim = 0;
var jmpuse = true;
var moveKey = "walk";
var drpWait = Math.floor(Math.random()*30+30);
var drpBllt = 0;
var drpHdPos = {
  x: cvs.width,
  y: 50 + Math.random()*300
};
var flyanim = 0;
var flyTm = 0;
var headHere = false;
var hdReady = true;
var changeTm = 0;
var changeGo = false;
var hdPos = {
  x: -400,
  y: cvs.height
};
var hdLife = animSpeed*8;
var blkMv = {
  x:  drpHdPos.x - 125 ,
  y: drpHdPos.y -25
};
var dinoGo = Math.floor(Math.random()*30+20);
var dinoPos = {
  x: cvs.width,
  y: 567
};
var dinoEat = 0;
var dinoJmp = 17;
var riderPos = [];
 riderPos[0] = {
  x: cvs.width,
  y: 640
};
var riderNew = false;
var riderStay= false;
var santaPos = {
  x: -330,
  y: santa1.height + Math.random()*150
};
var santaAnim = 0;
var santaTm = 0;
var santaBllt = Math.floor(Math.random()*30+20);;
var santaHdTm = 0;
var santaHdPos = [];
santaHdPos[0] ={
  x: -100,
  y: 0
};
var hard = 1;
var heath = 1;
var protection = false;
var gameOverPos = {
  x: 100,
  y: 50
};
//генерація початкових координат для хмаринок
for(var i=0; i<4; i++){
  cloudSpeed[i]=Math.random()*5+5;
  var width = cvs.width/4;
  cloudMove[i]={
    x: width*i,
    y: Math.floor(Math.random()*380)
  };
}
var audioP = true;

//обробка натискання клавіш
document.addEventListener("keydown", move);
document.addEventListener("keyup", moveWalk);
function move(key){
  if(jmpuse){
    switch (key.keyCode) {
      case 87: moveKey = "jump";
      if(audioP){if(Math.floor(Math.random()*2)==0){prig.play();}else {skok.play();}}
        break;
      case 83: moveKey = "down"; if(audioP)downM.play();
          break;
      case 68: moveKey = "run";
        break;
      case 65: moveKey = "stay";
        break;
      case 32: moveKey = "change"; changeTm = 0; if(audioP)chiks.play();
        break;
    }
  }
}
function moveWalk(key){
    if(jmpuse)moveKey = "walk";
    if(play)bdMusic.play();
}

//рух хмаринок та їхня залежніть від швидкості
function cloud(){
  ctx.drawImage(cl1, cloudMove[0].x, cloudMove[0].y);
  ctx.drawImage(cl2, cloudMove[1].x, cloudMove[1].y);
  ctx.drawImage(cl3, cloudMove[2].x, cloudMove[2].y);
  ctx.drawImage(cl4, cloudMove[3].x, cloudMove[3].y);
  for(var i=0; i<cloudMove.length; i++){
    cloudMove[i].x -= speed/cloudSpeed[i];
    if(cloudMove[i].x <= 0-cl1.width){
      cloudMove[i].x = cvs.width + Math.floor(Math.random()*100);;
      cloudMove[i].y = Math.floor(Math.random()*380);
      cloudSpeed[i] = Math.random()*5+5;
    }
  }
}

//анімація ходьби
function walk(){
  if(face){
    if(anim){
      ctx.drawImage(wlk_rn1, trsPos.x, trsPos.y - wlk_rn1.height);
    } else {
        ctx.drawImage(wlk1, trsPos.x, trsPos.y - wlk1.height);
    }
  }else {
    if(anim){
      ctx.drawImage(wlk_rn2, trsPos.x, trsPos.y - wlk_rn2.height);
    } else {
        ctx.drawImage(wlk2, trsPos.x, trsPos.y - wlk2.height);
    }
  }
}

//анімація бігу
function run(){
  trsPos.x+=2.7;
  if(face){
    if(anim){
      ctx.drawImage(wlk_rn1, trsPos.x, trsPos.y - wlk_rn1.height);
    } else {
        ctx.drawImage(rn1, trsPos.x, trsPos.y - rn1.height);
    }
  }else {
    if(anim){
      ctx.drawImage(wlk_rn2, trsPos.x, trsPos.y - wlk_rn2.height);
    } else {
        ctx.drawImage(rn2, trsPos.x, trsPos.y - rn2.height);
    }
  }
}

//анімація зупинки
function stay(){
  trsPos.x-=speed*1.3;
  if(face){
    ctx.drawImage(stay1, trsPos.x, trsPos.y - stay1.height);
  } else {
    ctx.drawImage(stay2, trsPos.x, trsPos.y - stay2.height);
  }
}

//реалістична анімація стрибка
function jumpObject(jmpHeight, pos) {
  switch (jmpanim) {
    case 0:
      if(jmpTime <= jmpTm){jmpanim=1;}
      jmpTm++;
      return (-jmpTm*1.2);
      break;
    case 1:
      if(0 >= jmpTm){jmpanim=2;}
      jmpTm--;
      trsPos.x += speed-2+jmpTm;
      return (-jmpTm*1.1);
      break;
    case 2:
      if(jmpTime <= jmpTm){jmpanim=3;}
      jmpTm++;
      trsPos.x += speed;
      return jmpTm*1.1;
      break;
    case 3:
      if(pos > jmpHeight  ){jmpanim=0; jmpTm=0; moveKey = "walk";jmpuse=true;}
      jmpTm++;
      return jmpTm*1.2;
      break;
  }
}

//анімація стрибка
function jump(){
  jmpuse=false;
 trsPos.x += speed/2;
  trsPos.y += jumpObject(660, trsPos.y);

  if(face){
      ctx.drawImage(fll1, trsPos.x, trsPos.y - fll1.height);
    } else {
      ctx.drawImage(fll2, trsPos.x, trsPos.y - fll2.height);
    }
  }

//анімація присідання
function down(){
  trsPos.x-=speed/2.8;
  if(face){
    ctx.drawImage(seat1, trsPos.x, trsPos.y - seat1.height);
  } else {
    ctx.drawImage(seat2, trsPos.x, trsPos.y - seat2.height);
  }

}

//зміна обличча
function throwFace(){
  jmpuse = false;
  if(!face){
    if(changeTm <= animSpeed){
      ctx.drawImage(thw11, trsPos.x, trsPos.y - thw11.height);
    } else if(changeTm <= animSpeed*2){
      ctx.drawImage(thw1, trsPos.x, trsPos.y - thw1.height);
    } else {
      hdPos.x = trsPos.x;
      hdPos.y = trsPos.y - thw1.height;
      face = true;
      changeGo = true;
      jmpuse = true;
      hdLife = animSpeed*8;
     moveKey = "walk";
    }
  } else {
    if(changeTm <= animSpeed){
      ctx.drawImage(thw22, trsPos.x, trsPos.y - thw22.height);
    } else if(changeTm <= animSpeed*2){
      ctx.drawImage(thw2, trsPos.x, trsPos.y - thw2.height);
    } else {
      hdPos.x = trsPos.x;
      hdPos.y = trsPos.y - thw2.height;
      face = false;
      changeGo = true;
      jmpuse = true;
      hdLife = animSpeed*8;
      moveKey = "walk";
    }
  }
}

function changeHd() {
    if(!face){
      ctx.drawImage(face1, hdPos.x, hdPos.y);
    }else {
      ctx.drawImage(face2, hdPos.x, hdPos.y);
    }

  if(hdLife < 0){
    hdPos.x = -100;
    hdPos.y = -100;
    changeGo = false;
  }
}

//dino eat head
function dino() {
  if(audioP)dinoM.play();
  switch (dinoEat) {
    case 0:
      dinoPos.x -=speed*(1.5*hard);
      if(dinoPos.x  >= hdPos.x - 10 &&  dinoPos.x - 20 <= hdPos.x && hdLife > 0){
        dinoEat = 1;
      }
      break;
    case 1:
      hdLife++;
      dinoPos.x -=speed;
      dinoPos.y -=dinoJmp--;
      if(hdPos.x + face1.width >= dinoPos.x  &&  dinoPos.y  <= hdPos.y){
        if(audioP)griz.play();
        hdLife = -10;
        dinoEat = 2;
      }
      break;
    case 2:
      dinoM.pause();
      dinoPos.x -=speed*1.1;
      dinoPos.y -=dinoJmp--;
      if(dinoPos.y > cvs.height){
        dinoEat = 0;
        dinoJmp = 17;
        dinoGo = Math.floor(Math.random()*30+(20-speed*hard));
        dinoPos.x = cvs.width;
        dinoPos.y = 567;
      }
      break;
  }
  if(anim){
    ctx.drawImage(dino1, dinoPos.x, dinoPos.y );
  } else {
    ctx.drawImage(dino2, dinoPos.x, dinoPos.y );
  }
}

//запуск анімації літаючої голови
function drpHdMv(drpHdAnim) {
  ctx.drawImage(drpHd, drpHdPos.x, drpHdPos.y);
  if(drpHdPos.x >= cvs.width-drpHd.width && drpHdAnim){
    drpHdPos.x -=1.5;
    if(drpHdPos.x <= cvs.width-drpHd.width){
      headHere = true;
      flyanim=0;
      blkMv.x = drpHdPos.x - 25;
      blkMv.y = drpHdPos.y -25;
    }
  }else if(drpHdPos.x <= cvs.width && !drpHdAnim) {

    drpHdPos.x +=1.9;
    if(drpHdPos.x >= cvs.width){
      drpHdPos.x = cvs.width;
      drpHdPos.y = 50 + Math.random()*300;
      hdReady = true;
      headHere = false;
    }
  }
}

//Літаючий Санта
function santaFly() {
  santaPos.x += speed*1.1;
if(audioP){
  switch (Math.floor(Math.random()*3)) {
    case 0: santaM1.play();
      break;
    case 1: santaM2.play();
      break;
    case 2: santaM3.play();
      break;
}

  }
  if(santaPos.y <= 103){
    switch (santaAnim) {
      case 0:
        santaTm++;
        santaPos.y--;
        if(santaTm >=30){
          santaHdTm = Math.floor(Math.random()*(5 - hard));
          santaTm = 0;
          santaAnim = Math.floor(Math.random()*5);
        }
        break;
      case 1:
        santaTm++;
        santaPos.y++;
        if(santaTm >=30){
          santaHdTm = Math.floor(Math.random()*(5 - hard));
          santaTm = 0;
          santaAnim = Math.floor(Math.random()*5);
        }
        break;
      case 2:
        santaTm++;
        santaPos.y +=2;
        if(santaTm >=30){
          santaHdTm = Math.floor(Math.random()*(5 - hard));
          santaTm = 0;
          santaAnim = Math.floor(Math.random()*5);
        }
        break;
      case 3:
        santaTm++;
        santaPos.y -=2;
        if(santaTm >=30){
          santaHdTm = Math.floor(Math.random()*(5 - hard));
          santaTm = 0;
          santaAnim = Math.floor(Math.random()*5);
          }
          break;
        case 4:
          santaTm++;
          santaPos.x++;
          if(santaTm >=30){
            santaHdTm = Math.floor(Math.random()*(5 - hard));
            santaTm = 0;
            santaAnim = Math.floor(Math.random()*5);
          }
          break;
        case 5:
          santaTm++;
          santaPos.x+=2;
          if(santaTm >=30){
            santaHdTm = Math.floor(Math.random()*(5 - hard));
            santaTm = 0;
            santaAnim = Math.floor(Math.random()*5);
          }
          break;
        }
    }else {
      santaPos.y-=speed;
      santaTm = 0;
      santaAnim = Math.floor(Math.random()*5);
  }

  if(santaHdTm <= 1 && santaPos.x <= cvs.width){
    santaHdPos.push({
      x: santaPos.x + 100,
      y: santaPos.y + santa1.height - 100
    });
    santaHdTm = 100;
  }


    for(var i=0; i<santaHdPos.length; i++){
      if(anim){
        ctx.drawImage(santaHd1, santaHdPos[i].x, santaHdPos[i].y );
      } else {
        ctx.drawImage(santaHd2, santaHdPos[i].x, santaHdPos[i].y );
      }
      santaHdPos[i].y +=speed/1.7;
      if(cvs.height <= santaHdPos[i].y){
        santaHdPos.shift();
      }
       if( santaPos.x >= cvs.width && santaHdPos.length == 0){
        santaBllt = Math.floor(Math.random()*40+20);
        santaPos.x = -330;
        santaPos.y = santa1.height + Math.random()*150;
        hard += 0.3;
        speed +=0.05;
      }
    }

  if(anim){
    ctx.drawImage(santa1, santaPos.x, santaPos.y );
  } else {
    ctx.drawImage(santa2, santaPos.x, santaPos.y );
  }
}

//Анімація літаючої голови
function flyHead(jmpHeight) {
  if(audioP)flyHeadM.play();
    switch (flyanim) {
      case 0:
        if(jmpTime-3 <= flyTm){flyanim=1;}
        flyTm++;
        blkMv.x -= 1.3;
        blkMv.y -= flyTm*1.2;
        break;
      case 1:
        if(0 >= flyTm){flyanim=2;}
        flyTm--;
        blkMv.x -= 1.3;
        blkMv.y -= flyTm*1.1;
        break;
      case 2:
        if(jmpTime-3 <= flyTm){flyanim=3;}
        flyTm++;
        blkMv.x -= 1.3;
        blkMv.y += flyTm*1.1;
        break;
      case 3:
        if(blkMv.y >= jmpHeight  ){flyanim=4;}
        flyTm++;
        blkMv.x -= 2.3;
        blkMv.y += flyTm*1.2;
        break;
      case 4:
        if(blkMv.x <= -3  ){flyanim=5;}
        if(blkMv.y >= jmpHeight - 100){blkMv.y -= flyTm/2.25;}
        blkMv.x -= speed*2.3;
        break;
      case 5:
        if(blkMv.x > cvs.width-drpHd.width-bdHead.width){
          drpWait = Math.floor(Math.random()*30+(20-speed * hard));
          hdReady = false;
          flyTm = 0;
        }
        blkMv.x += speed*2.1;
        break;
    }
}

//генерація та рух блоків
function blockMv(){
  if(drpWait <= 0 && hdReady){
    drpHdMv(true);
  }else {
    drpHdMv(false);
  }
  if(headHere){
        flyHead(490);
        ctx.drawImage(bdHead, blkMv.x, blkMv.y);
    }
}

//Анімація всадніка на динозаврі
function rider() {
  for(var i=0; i<riderPos.length; i++){
    riderPos[i].x -=speed*0.9;

    if(anim){
      ctx.drawImage(rider1, riderPos[i].x, riderPos[i].y - rider1.width);
    } else {
        ctx.drawImage(rider2, riderPos[i].x, riderPos[i].y - rider1.width);
    }
    if(930 <= riderPos[i].x && riderPos[i].x <= 950){riderNew = true;}
    if(900 <= riderPos[i].x && riderPos[i].x <= 910 && riderNew){
      riderPos.push({
        x: cvs.width + Math.floor(Math.random()*350),
        y:640
      });
      riderNew = false;
    }

    if(-rider1.width >= riderPos[i].x){
      riderPos.shift();
    }
  }
}

//Анімація зупинки всадніка на динозаврі
function riderStop() {
  for(var i=0; i<riderPos.length; i++){
    if(anim){
      ctx.drawImage(riderStay1, riderPos[i].x, riderPos[i].y - rider1.width);
    } else {
      ctx.drawImage(riderStay2, riderPos[i].x, riderPos[i].y - rider1.width);
    }
  }
}

//Game balance
function balans() {
  blockMv();
  if(santaBllt < 0){
    if( santaPos.x >= -20 && cvs.width + 400 >= santaPos.x){
      riderStay = true;
    } else {
      riderStay = false;
        rider();
    }
      santaFly();
  } else {
    rider();
  }
  if(dinoGo < 0){dino();}
}

//перевірка зіткнень
function life() {
  //вихід за ігрове поле
  if(trsPos.x < -10){
    trsPos.x +=speed*1.5;
  }else if(trsPos.x + rn1.width > cvs.width + 60){
      trsPos.x -=speed*2;
  }

  if(heath > 0){
    //літаюча голова
    if (blkMv.y > 370 && !protection
    && ((trsPos.x + 90 >= blkMv.x + 10 && trsPos.x + 90 <= blkMv.x + 60 && moveKey != "down")
    || (trsPos.x + 40 >= blkMv.x + 10 && trsPos.x + 40 <= blkMv.x + 60 && moveKey == "stay"))) {
      heath--;
    }

    //Динозав, що поїдає голови
    if(dinoPos.x < - 100){
      heath--;
      dinoEat = 0;
      dinoJmp = 17;
      dinoGo = Math.floor(Math.random()*30+20-speed);
      dinoPos.x = cvs.width;
      dinoPos.y = 567;
    }

    //падаючі голови санти
    for (var i = 0; i < santaHdPos.length; i++) {
      if(((santaHdPos[i].y >= trsPos.y - 260 && santaHdPos[i].y <= trsPos.y - 60)
      && (trsPos.x + 100 >= santaHdPos[i].x + 10 && trsPos.x + 30 <= santaHdPos[i].x + 60))
      && !protection){
        heath--;
      }
    }

    //Всадник на динозаврі
      for (var i = 0; i < riderPos.length; i++) {
        if (!protection && !riderStay && moveKey != "jump"
        &&(trsPos.x + 100 >= riderPos[i].x + 10 && trsPos.x + 30 <= riderPos[i].x + 60)) {
          heath--;
        }
      }

  }else {
    play = false;
    gameOverFg();
  }
}

//game Over animation
function gameOverFg() {
      dinoM.pause();
      bdMusic.pause();
      flyHeadM.pause();
      ctx.drawImage(gmOver, gameOverPos.x, gameOverPos.y);
      ctx.fillStyle = "#ea6ea1";
      ctx.font = "20px Verdana";
      ctx.fillText("Для повторної гри натисніть \"F5\"", gameOverPos.x+115, gameOverPos.y+420 );

}

//анімація вивід графіки
function drawGame(){
  ctx.drawImage(bg, 0, 0);
  ctx.drawImage(ground, 0, cvs.height - ground.height);
  cloud();
  if(riderStay){riderStop();}
  switch (moveKey) {
    case "walk": walk();
      break;
    case "jump": jump();
      break;
    case "run": run();
      break;
    case "down": down();
      break;
    case "stay": stay();
      break;
    case "change": throwFace();changeTm++;
      break;
  }
  if(changeGo){changeHd();hdLife--;}
  balans();
  life();
// передача даних для анімації за рахунок зміни картинок
  if(animSpd <= animSpeed){
    anim = false;
    animSpd++;
  }else if(animSpd <= animSpeed*2){
    anim = true;
    animSpd++;
  } else{
    anim = false;
    animSpd = 0;
    dinoGo--;
    score++;
    if(santaBllt>0){drpWait--;}
    santaBllt--;
  }
  //вивід метражу
  ctx.fillStyle = "#a0f583";
  ctx.font = "26px Verdana";
  ctx.fillText("Meters "+score , 50, cvs.height-35 );
  if(play) {requestAnimationFrame(drawGame);}else{if(audioP)gmOverM.play();}

}

//запуск фуннції draw після загрузки останнього елементу текстури
santaHd2.onload = drawGame;
