interface Object {
  // [key: string]: string | Array<Array<string | number>>;
  [key: string]: any;
}

interface typeTetrominos {
  [key: string]: Object;
}

export const Tertrominos: typeTetrominos = {
  0: { shape: [[0]], color: "bg-slate-100" },
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "bg-slate-200",
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "bg-slate-300",
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "bg-slate-400",
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "bg-slate-500",
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],

    color: "bg-slate-600",
  },
  T: {
    shape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    color: "bg-slate-700",
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],

    color: "bg-gray-100",
  },
};

export const randomTetromino = () => {
  const tetrominos = "IJLOSTZ";
  const randomTetrominoStr =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return Tertrominos[randomTetrominoStr];
};
