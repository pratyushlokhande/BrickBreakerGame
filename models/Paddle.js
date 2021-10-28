export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.width = 200;
    this.height = 30;
    this.maxSpeed = 10;
    this.speed = 0;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10,
    };
  }

  draw(ctx) {
    ctx.fillStyle = "#161E54";
    ctx.strokeStyle = "#E02401";
    ctx.lineWidth = 2;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }

  update() {
    this.position.x += this.speed;

    if (this.position.x < 0) {
      this.position.x = 0;
    }

    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
  }
}
