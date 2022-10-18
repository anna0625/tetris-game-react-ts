import tw from "tailwind-styled-components";
import styled from "styled-components";

type Props = {
  role?: string;
  tabIndex?: number;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
};

export const StyledTetrisWrapper = styled.div<Props>`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: #000;
`;

// export const TetrisWrapper = tw(TetrisWrapper)`
//     container
//     w-full
//     h-screen
//     bg-gray-900
// `;

const Tetris = styled.div<Props>``;
export const StyledTetris = tw(Tetris)`
    flex
    items-center
    justify-center
    p-4
    mx-auto
    max-w-screen-lg
    h-screen
`;
