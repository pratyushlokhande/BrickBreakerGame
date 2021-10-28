import EventHandler from "./models/EventHandler.js";
import Paddle from "./models/Paddle.js";
import Ball from "./models/Ball.js";
import Brick from "./models/Brick.js";
import Wall from "./models/Wall.js";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let scoreCard = document.getElementById("score");

const GAME_WIDTH = 1100;
const GAME_HEIGHT = 700;
let SCORE = 0;
let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);
let brick = new Brick(GAME_WIDTH, GAME_HEIGHT);
let wall = new Wall();
new EventHandler(paddle);

function gameLoop() {
  if (ball.position.y > GAME_HEIGHT) {
    ctx.rect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ctx.fillStyle = "rgba(0,0,0,0.7)";
    ctx.fill();

    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", GAME_WIDTH / 2, GAME_HEIGHT / 2);
    ctx.fillText(`YOUR SCORE : ${SCORE}`, GAME_WIDTH / 2, GAME_HEIGHT / 2 + 50);
    return;
  }
  scoreCard.innerHTML = SCORE;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  paddle.update();
  paddle.draw(ctx);
  ball.update(paddle);
  ball.draw(ctx);
  SCORE = wall.update(ctx, ball, brick, SCORE);
  wall.draw(ctx, brick);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
