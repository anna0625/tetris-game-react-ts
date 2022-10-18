interface Object {
  // [key: string]: string | Array<Array<string | number>>;
  [key: string]: any;
}

interface typeTetrominos {
  [key: string]: Object;
}

export const Tetrominos: typeTetrominos = {
  0: { shape: [[0]], color: "bg-slate-900" },
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "bg-blue-100",
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "bg-blue-200",
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "bg-blue-300",
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "bg-blue-400",
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],

    color: "bg-blue-500",
  },
  T: {
    shape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    color: "bg-blue-600",
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],

    color: "bg-blue-700",
  },
};

export const randomTetromino = () => {
  const tetrominos = "IJLOSTZ";
  const randomTetrominoStr =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return Tetrominos[randomTetrominoStr];
};
