import { useEffect, useState } from "react";

import { createStage } from "../gameHelpers";

export const useStage = (
  player: any,
  resetPlayer: any
): [any[][], React.Dispatch<React.SetStateAction<any[][]>>, number] => {
  const [state, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);

    // when the row is full, we need to clear it
    const sweepRows = (newStage: any) =>
      newStage.reduce((ack: any, row: any) => {
        if (row.findIndex((cell: any) => cell[0] === 0) === -1) {
          setRowsCleared((prev) => prev + 1);
          ack.unshift(new Array(newStage[0].length).fill([0, "clear"]));
          return ack;
        }
        ack.push(row);
        return ack;
      }, []);

    const updateState = (prev: any) => {
      // First flush the stage
      const newStage = prev.map((row: any) =>
        row.map((cell: any) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // Then draw the tetromino
      player.tetromino.forEach((row: any, y: any) => {
        row.forEach((value: any, x: any) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });

      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }

      // console.log(newStage);
      return newStage;
    };
    setStage((prev: any) => updateState(prev));
  }, [player, resetPlayer]);

  return [state, setStage, rowsCleared];
};
