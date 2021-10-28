export default class Wall {
  constructor() {
    this.bricks = [
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    ];
  }

  draw(ctx, brick) {
    this.bricks.forEach((row, rowIndex) => {
      row.forEach((element, elementIndex) => {
        if (element === 1) {
          brick.draw(ctx, 100 * elementIndex, 50 * (rowIndex + 1));
        }
      });
    });
  }

  update(ctx, ball, brick, SCORE) {
    let x = ball.position.x;
    let y = ball.position.y;

    this.bricks.forEach((row, rowIndex) => {
      row.forEach((element, elementIndex) => {
        if (element === 1) {
          if (
            x > 100 * elementIndex &&
            x < 100 * (elementIndex + 1) &&
            y > 50 * (rowIndex + 1) &&
            y < 50 * (rowIndex + 2)
          ) {
            this.bricks[rowIndex][elementIndex] = 0;
            ball.speed.x = -ball.speed.x;
            ball.speed.y = -ball.speed.y;
            SCORE += 10;
            this.draw(ctx, brick);
          }
        }
      });
    });
    return SCORE;
  }
}
