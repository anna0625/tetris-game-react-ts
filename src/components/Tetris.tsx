import React, { useState } from "react";
import { Stage } from "./Stage";
import { Display } from "./Display";
import { StartButton } from "./StartButton";
import { StyledTetrisWrapper } from "./styles/StyledTetris";
import { StyledTetris } from "./styles/StyledTetris";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useInterval } from "../hooks/useInterval";
import { createStage, checkCollision } from "../gameHelpers";
import { useGameStatus } from "../hooks/useGameStatus";

function Tetris() {
  const [dropTime, setDropTime] = useState(-1);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);

  console.log("re-render");

  const movePlayer = (direction: number) => {
    if (!checkCollision(player, stage, { x: direction, y: 0 })) {
      updatePlayerPos({ x: direction, y: 0, collided: false });
    }
  };

  const startGame = () => {
    // Reset everything
    setStage(createStage());
    setDropTime(500); // 0.5 second
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const drop = () => {
    // Increase level when player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel((prev: number) => prev + 1);
      // Also increase speed
      setDropTime(500 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game over
      if (player.pos.y < 1) {
        // coliision with the top of the stage
        console.log("GAME OVER!!!");
        setGameOver(true);
        setDropTime(-1);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ keyCode }: { keyCode: number }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        console.log("interval on");
        setDropTime(500 / (level + 1) + 200);
      }
    }
  };

  const dropPlayer = () => {
    console.log("interval off");
    setDropTime(-1);
    drop();
  };

  const move = ({ keyCode }: { keyCode: number }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <>
      <StyledTetrisWrapper
        role="button"
        tabIndex={0}
        onKeyUp={keyUp}
        onKeyDown={(e: any) => move(e)}
      >
        <StyledTetris>
          <Stage stage={stage} />
          <aside className="w-full max-w-sm block p-4">
            {gameOver ? (
              <Display gameOver={gameOver} text="Game Over" />
            ) : (
              <div>
                <Display text={`Score : ${score}`} gameOver={gameOver} />
                <Display text={`Rows : ${rows}`} gameOver={gameOver} />
                <Display text={`Level : ${level}`} gameOver={gameOver} />
              </div>
            )}
            <StartButton callback={startGame} />
          </aside>
        </StyledTetris>
      </StyledTetrisWrapper>
    </>
  );
}

export default Tetris;
