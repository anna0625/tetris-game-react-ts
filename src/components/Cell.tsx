import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { Tertrominos } from "../tetrominos";

type Props = {
  type?: string;
};

export const Cell = ({ type }: Props) => {
  const colorT: string = Tertrominos["L"].color;
  return <StyledCell type={"L"} color={colorT} />;
};
