import styled from "styled-components";
import tw from "tailwind-styled-components";

// type Props = {
//   height: number;
//   width: number;
// };

const Stage = styled.div``;

/* grid-template-rows: ${(p) => `repeat(${p.height}, calc(25vw / ${p.width}))`};
  grid-template-columns: ${(p) => `repeat(${p.width}, 1fr)`}; */

export const StyledStage = tw(Stage)`
    grid
    grid-cols-12
    grid-rows-20
    gap-1
    w-96
    md:h-[90vh]
    h-[45vh]
    bg-gray-100
    border-2
    border-gray-300
    rounded
`;
