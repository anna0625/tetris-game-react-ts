export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
  return Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
};

export const checkCollision = (
  player: any,
  stage: any,
  { x, y }: { x: number; y: number }
): boolean => {
  for (let _y = 0; _y < player.tetromino.length; _y += 1) {
    for (let _x = 0; _x < player.tetromino[_y].length; _x += 1) {
      // 1. Check that we're on an actual Tetromino cell
      if (player.tetromino[_y][_x] !== 0) {
        // 2. Check that our move is inside the game areas height (y)
        // We shouldn't go through the bottom of the play area
        if (
          !stage[_y + player.pos.y + y] ||
          // 3. Check that our move is inside the game areas width (x)
          !stage[_y + player.pos.y + y][_x + player.pos.x + x] ||
          // 4. Check that the cell we're moving to isn't set to clear
          stage[_y + player.pos.y + y][_x + player.pos.x + x][1] !== "clear"
        ) {
          return true;
        }
      }
    }
  }
  return false;
};
