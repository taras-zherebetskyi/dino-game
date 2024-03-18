const canvas = document.getElementById("gSnake");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "../img/Snake/ground.png";

const foodImg=new Image();
foodImg.src="../img/Snake/food.png";

let box=32;

let score=0;

let food= {
  x: Math.floor(Math.random()*17+1)*box,
  y: Math.floor(Math.random()*14+3)*box
};

let snake=[];
snake[0]={
  x:9*box,
  y:10*box
};

document.addEventListener("keydown",move);

let mov;

function move(event){
  if((event.keyCode==37  || event.keyCode==65) && mov!="right")
    mov="left";
  else if((event.keyCode==38  || event.keyCode==87) && mov!="down")
    mov="up";
  else if((event.keyCode==39  || event.keyCode==68) && mov!="left")
    mov="right";
  else if((event.keyCode==40 || event.keyCode==83) && mov!="up")
    mov="down";

}


function DrawGame(){
  ctx.drawImage(ground, 0, 0);

  ctx.drawImage(foodImg, food.x, food.y);

  for(let i=0; i<snake.length; i++){
    if(i==0){
      ctx.fillStyle =  "black" ;
    ctx.fillRect(snake[i].x+1, snake[i].y+1, box-2, box-2);
  }else {  ctx.fillStyle =  "grey";
  ctx.fillRect(snake[i].x+2, snake[i].y+2, box-4, box-4);

  }
  }

  ctx.fillStyle="grey";
  ctx.font= "50px Arial";
  ctx.fillText(score, box*2.7, box*1.8);

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;
  if(snakeX == food.x && snakeY == food.y){
    score++;
    food= {
      x: Math.floor(Math.random()*17+1)*box,
      y: Math.floor(Math.random()*14+3)*box
    };
  }else {
      snake.pop();
  }

function snakeTail(head, tail){
  for(let i=0; i<tail.length; i++){
    if(head.x == tail[i].x && head.y == tail[i].y){
        clearInterval(game);
    }
  }

}


if(snakeX<1*box || snakeX >=18*box || snakeY<3*box || snakeY >=18*box){
clearInterval(game);
}
  if(mov == "left") snakeX -=  box;
  if(mov == "right") snakeX +=  box;
  if(mov == "up") snakeY -=  box;
  if(mov == "down") snakeY += box;

  let newHead = {
    x: snakeX,
    y: snakeY
  };




snakeTail(newHead, snake);
  snake.unshift(newHead);


}


let game= setInterval(DrawGame, 110)
