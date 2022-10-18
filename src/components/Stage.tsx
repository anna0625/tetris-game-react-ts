import React from "react";
import { Cell } from "./Cell";
import { StyledStage } from "./styles/StyledStage";

type Props = {
  stage: any[][];
};

export const Stage = ({ stage }: Props) => {
  return (
    <StyledStage>
      {stage.map((row) =>
        row.map((cell, x) => <Cell key={x} type={cell[0]} />)
      )}
    </StyledStage>
  );
};
