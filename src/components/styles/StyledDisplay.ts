import styled from "styled-components";
import tw from "tailwind-styled-components";

type Props = {
  gameover?: string;
};
// const Display = styled.div<Props>``;
export const StyledDisplay = tw.div<Props>`
    container
    flex
    items-center
    w-full
    min-h-[10vh]
    rounded-lg
    p-5
    mt-5
    border-2
    border-gray-300
    bg-black
    font-mono
    text-2xl
    ${(p) => (p.gameover === "true" ? "text-red-300" : "text-green-300")}
`;
