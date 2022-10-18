import tw from "tailwind-styled-components";

interface Props {
  color?: string;
  type?: string | number;
}

export const StyledCell = tw.div<Props>`
  w-auto
  ${(p) => (p.type === 0 ? `${p.color}` : `border-blue-300 ${p.color}`)}
`;
