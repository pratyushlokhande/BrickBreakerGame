export default class Brick {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 100;
    this.height = 50;
  }

  draw(ctx, x, y) {
    // let brick = document.getElementById("brick");
    // ctx.drawImage(brick, x, y, this.width, this.height);
    ctx.fillStyle = "#3D0000";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 10;
    ctx.fillRect(x, y, this.width, this.height);
    ctx.strokeRect(x, y, this.width, this.height);
  }
}
