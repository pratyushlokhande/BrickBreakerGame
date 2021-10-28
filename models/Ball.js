export default class Ball {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.position = {
      x: 0,
      y: 0,
    };

    this.maxSpeed = 5;
    this.speed = {
      x: this.maxSpeed,
      y: this.maxSpeed,
    };
  }

  draw(ctx) {
    let ball = document.getElementById("ball");

    ctx.drawImage(ball, this.position.x, this.position.y, 30, 30);
  }

  update(paddle) {
    if (this.position.x > this.gameWidth - 30 || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    if (
      (this.position.y > this.gameHeight - paddle.height - 10 - 30 &&
        this.position.x >= paddle.position.x &&
        this.position.x <= paddle.position.x + paddle.width) ||
      this.position.y < 0
    ) {
      this.speed.y = -this.speed.y;
    }

    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }
}
