import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

type Props = {
  callback?: () => void;
};

export const StartButton = ({ callback }: Props) => {
  return <StyledStartButton onClick={callback}>Start Game</StyledStartButton>;
};
