import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { Tetrominos } from "../tetrominos";

type Props = {
  type?: string;
};

const Cell = ({ type }: Props) => {
  const colorT: string = Tetrominos[type!].color;
  return <StyledCell type={type} color={colorT} />;
};

export default React.memo(Cell);
