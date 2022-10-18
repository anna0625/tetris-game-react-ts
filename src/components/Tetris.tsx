import React from "react";
import { Stage } from "./Stage";
import { Display } from "./Display";
import { StartButton } from "./StartButton";
import { createStage } from "../gameHelpers";
import { StyledTetrisWrapper } from "./styles/StyledTetris";
import { StyledTetris } from "./styles/StyledTetris";

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside className="w-full max-w-sm block p-4">
          <div>
            <Display text="Score" gameOver={undefined} />
            <Display text="Rows" gameOver={undefined} />
            <Display text="Level" gameOver={undefined} />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
