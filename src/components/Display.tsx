import React from "react";
import { StyledDisplay } from "./styles/StyledDisplay";

type Props = {
  text: string;
  gameOver: boolean;
};

export const Display = ({ gameOver, text }: Props) => {
  return <StyledDisplay gameover={gameOver.toString()}>{text}</StyledDisplay>;
};
