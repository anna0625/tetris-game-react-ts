import { useCallback, useState } from "react";
import { checkCollision, STAGE_WIDTH } from "../gameHelpers";

import { Tetrominos, randomTetromino } from "../tetrominos";

export const usePlayer = (): [
  any,
  ({ x, y, collided }: { x: number; y: number; collided: boolean }) => void,
  () => void,
  (stage: any, direction: number) => void
] => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: Tetrominos[0].shape,
    collided: false,
  });

  const rotate = (matrix: any, direction: number) => {
    // Make the rows to become cols (transpose)
    const rotatedTetro = matrix.map((_: any, index: number) =>
      matrix.map((col: any[]) => col[index])
    );
    //   Reverse each row to get a rotated matrix
    if (direction > 0) return rotatedTetro.map((row: any) => row.reverse());
    return rotatedTetro.reverse();
  };

  const playerRotate = (stage: any, direction: number) => {
    const clonePlayer = JSON.parse(JSON.stringify(player));
    clonePlayer.tetromino = rotate(clonePlayer.tetromino, direction);

    // Check if the rotation is inside the game area
    const pos = clonePlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonePlayer, stage, { x: 0, y: 0 })) {
      clonePlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonePlayer.tetromino[0].length) {
        rotate(clonePlayer.tetromino, -direction);
        clonePlayer.pos.x = pos;
        return;
      }
    }

    setPlayer(clonePlayer);
  };

  const updatePlayerPos = ({
    x,
    y,
    collided,
  }: {
    x: number;
    y: number;
    collided: boolean;
  }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};
