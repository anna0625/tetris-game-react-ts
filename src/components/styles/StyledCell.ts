import tw from "tailwind-styled-components";

interface Props {
  color?: string;
  type?: string | number;
}

export const StyledCell = tw.div<Props>`
  w-auto
  ${(p) => p.color}
  ${(p) => (p.type === 0 ? "border-0" : "border-2 border-blue-300")}
`;
