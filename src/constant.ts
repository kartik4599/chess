import blackBishop from "./assets/black-bishop.png";
import whiteBishop from "./assets/white-bishop.png";
import blackKnight from "./assets/black-knight.png";
import whiteKnight from "./assets/white-knight.png";
import whitePawn from "./assets/white-pawn.png";
import blackPawn from "./assets/black-pawn.png";
import whiteQueen from "./assets/white-queen.png";
import blackQueen from "./assets/black-queen.png";
import whiteRook from "./assets/white-rook.png";
import blackRook from "./assets/black-rook.png";
import whiteKing from "./assets/white-king.png";
import blackKing from "./assets/black-king.png";

export const boardArray = [
  {
    col: 0,
    row: 0,
  },
  {
    col: 0,
    row: 1,
  },
  {
    col: 0,
    row: 2,
  },
  {
    col: 0,
    row: 3,
  },
  {
    col: 0,
    row: 4,
  },
  {
    col: 0,
    row: 5,
  },
  {
    col: 0,
    row: 6,
  },
  {
    col: 0,
    row: 7,
  },
  {
    col: 1,
    row: 0,
  },
  {
    col: 1,
    row: 1,
  },
  {
    col: 1,
    row: 2,
  },
  {
    col: 1,
    row: 3,
  },
  {
    col: 1,
    row: 4,
  },
  {
    col: 1,
    row: 5,
  },
  {
    col: 1,
    row: 6,
  },
  {
    col: 1,
    row: 7,
  },
  {
    col: 2,
    row: 0,
  },
  {
    col: 2,
    row: 1,
  },
  {
    col: 2,
    row: 2,
  },
  {
    col: 2,
    row: 3,
  },
  {
    col: 2,
    row: 4,
  },
  {
    col: 2,
    row: 5,
  },
  {
    col: 2,
    row: 6,
  },
  {
    col: 2,
    row: 7,
  },
  {
    col: 3,
    row: 0,
  },
  {
    col: 3,
    row: 1,
  },
  {
    col: 3,
    row: 2,
  },
  {
    col: 3,
    row: 3,
  },
  {
    col: 3,
    row: 4,
  },
  {
    col: 3,
    row: 5,
  },
  {
    col: 3,
    row: 6,
  },
  {
    col: 3,
    row: 7,
  },
  {
    col: 4,
    row: 0,
  },
  {
    col: 4,
    row: 1,
  },
  {
    col: 4,
    row: 2,
  },
  {
    col: 4,
    row: 3,
  },
  {
    col: 4,
    row: 4,
  },
  {
    col: 4,
    row: 5,
  },
  {
    col: 4,
    row: 6,
  },
  {
    col: 4,
    row: 7,
  },
  {
    col: 5,
    row: 0,
  },
  {
    col: 5,
    row: 1,
  },
  {
    col: 5,
    row: 2,
  },
  {
    col: 5,
    row: 3,
  },
  {
    col: 5,
    row: 4,
  },
  {
    col: 5,
    row: 5,
  },
  {
    col: 5,
    row: 6,
  },
  {
    col: 5,
    row: 7,
  },
  {
    col: 6,
    row: 0,
  },
  {
    col: 6,
    row: 1,
  },
  {
    col: 6,
    row: 2,
  },
  {
    col: 6,
    row: 3,
  },
  {
    col: 6,
    row: 4,
  },
  {
    col: 6,
    row: 5,
  },
  {
    col: 6,
    row: 6,
  },
  {
    col: 6,
    row: 7,
  },
  {
    col: 7,
    row: 0,
  },
  {
    col: 7,
    row: 1,
  },
  {
    col: 7,
    row: 2,
  },
  {
    col: 7,
    row: 3,
  },
  {
    col: 7,
    row: 4,
  },
  {
    col: 7,
    row: 5,
  },
  {
    col: 7,
    row: 6,
  },
  {
    col: 7,
    row: 7,
  },
];

export type piece =
  | "black-bishop"
  | "white-bishop"
  | "black-knight"
  | "white-knight"
  | "white-pawn"
  | "black-pawn"
  | "white-queen"
  | "black-queen"
  | "white-rook"
  | "black-rook"
  | "white-king"
  | "black-king";

export const icons: { [key in piece]: string } = {
  "black-bishop": blackBishop,
  "white-bishop": whiteBishop,
  "black-knight": blackKnight,
  "white-knight": whiteKnight,
  "white-pawn": whitePawn,
  "black-pawn": blackPawn,
  "white-queen": whiteQueen,
  "black-queen": blackQueen,
  "white-rook": whiteRook,
  "black-rook": blackRook,
  "white-king": whiteKing,
  "black-king": blackKing,
};

export type BoardPiece = {
  col: number;
  row: number;
  type: piece;
  name: string;
  black: boolean;
};

export type ChessContextType = {
  currentPieces: BoardPiece[];
  movePieces: (arg: { col: number; row: number }) => void;
  getPieces: (arg: { col: number; row: number }) => {
    src?: string;
    canplace: boolean;
    cankill: boolean;
    black?: boolean;
  };
  setPieces: (arg: { col: number; row: number }) => void;
  elementedPieces: {
    black: BoardPiece[];
    white: BoardPiece[];
  };
  blackPlay: boolean;
};

export const initState: BoardPiece[] = [
  { col: 0, row: 0, type: "black-rook", name: "black-rook-1", black: true },
  { col: 0, row: 1, type: "black-knight", name: "black-knight-1", black: true },
  { col: 0, row: 2, type: "black-bishop", name: "black-bishop-1", black: true },
  { col: 0, row: 3, type: "black-queen", name: "black-queen", black: true },
  { col: 0, row: 4, type: "black-king", name: "black-king", black: true },
  { col: 0, row: 5, type: "black-bishop", name: "black-bishop-2", black: true },
  { col: 0, row: 6, type: "black-knight", name: "black-knight-2", black: true },
  { col: 0, row: 7, type: "black-rook", name: "black-rook-2", black: true },
  { col: 1, row: 0, type: "black-pawn", name: "black-pawn-1", black: true },
  { col: 1, row: 1, type: "black-pawn", name: "black-pawn-2", black: true },
  { col: 1, row: 2, type: "black-pawn", name: "black-pawn-3", black: true },
  { col: 1, row: 3, type: "black-pawn", name: "black-pawn-4", black: true },
  { col: 1, row: 4, type: "black-pawn", name: "black-pawn-5", black: true },
  { col: 1, row: 5, type: "black-pawn", name: "black-pawn-6", black: true },
  { col: 1, row: 6, type: "black-pawn", name: "black-pawn-7", black: true },
  { col: 1, row: 7, type: "black-pawn", name: "black-pawn-8", black: true },
  { col: 6, row: 0, type: "white-pawn", name: "white-pawn-1", black: false },
  { col: 6, row: 1, type: "white-pawn", name: "white-pawn-2", black: false },
  { col: 6, row: 2, type: "white-pawn", name: "white-pawn-3", black: false },
  { col: 6, row: 3, type: "white-pawn", name: "white-pawn-4", black: false },
  { col: 6, row: 4, type: "white-pawn", name: "white-pawn-5", black: false },
  { col: 6, row: 5, type: "white-pawn", name: "white-pawn-6", black: false },
  { col: 6, row: 6, type: "white-pawn", name: "white-pawn-7", black: false },
  { col: 6, row: 7, type: "white-pawn", name: "white-pawn-8", black: false },
  { col: 7, row: 0, type: "white-rook", name: "white-rook-1", black: false },
  {
    col: 7,
    row: 1,
    type: "white-knight",
    name: "white-knight-1",
    black: false,
  },
  {
    col: 7,
    row: 2,
    type: "white-bishop",
    name: "white-bishop-1",
    black: false,
  },
  { col: 7, row: 3, type: "white-queen", name: "white-queen", black: false },
  { col: 7, row: 4, type: "white-king", name: "white-king", black: false },
  {
    col: 7,
    row: 5,
    type: "white-bishop",
    name: "white-bishop-2",
    black: false,
  },
  {
    col: 7,
    row: 6,
    type: "white-knight",
    name: "white-knight-2",
    black: false,
  },
  { col: 7, row: 7, type: "white-rook", name: "white-rook-2", black: false },
];

// export const initState: BoardPiece[] = [
//   { col: 0, row: 0, type: "black-rook", name: "black-rook-1", black: true },
//   { col: 0, row: 1, type: "black-knight", name: "black-knight-1", black: true },
//   { col: 0, row: 2, type: "black-bishop", name: "black-bishop-1", black: true },
//   { col: 0, row: 3, type: "black-queen", name: "black-queen", black: true },
//   { col: 0, row: 4, type: "black-king", name: "black-king", black: true },
//   { col: 0, row: 5, type: "black-bishop", name: "black-bishop-2", black: true },
//   { col: 0, row: 6, type: "black-knight", name: "black-knight-2", black: true },
//   { col: 0, row: 7, type: "black-rook", name: "black-rook-2", black: true },
//   { col: 1, row: 0, type: "black-pawn", name: "black-pawn-1", black: true },
//   { col: 1, row: 1, type: "black-pawn", name: "black-pawn-2", black: true },
//   { col: 1, row: 2, type: "black-pawn", name: "black-pawn-3", black: true },
//   { col: 1, row: 3, type: "black-pawn", name: "black-pawn-4", black: true },
//   { col: 1, row: 4, type: "black-pawn", name: "black-pawn-5", black: true },
//   { col: 1, row: 5, type: "black-pawn", name: "black-pawn-6", black: true },
//   { col: 1, row: 6, type: "black-pawn", name: "black-pawn-7", black: true },
//   { col: 1, row: 7, type: "black-pawn", name: "black-pawn-8", black: true },
//   { col: 6, row: 0, type: "white-pawn", name: "white-pawn-1", black: false },
//   { col: 6, row: 1, type: "white-pawn", name: "white-pawn-2", black: false },
//   { col: 6, row: 2, type: "white-pawn", name: "white-pawn-3", black: false },
//   { col: 6, row: 3, type: "white-pawn", name: "white-pawn-4", black: false },
//   { col: 6, row: 4, type: "white-pawn", name: "white-pawn-5", black: false },
//   { col: 6, row: 5, type: "white-pawn", name: "white-pawn-6", black: false },
//   { col: 6, row: 6, type: "white-pawn", name: "white-pawn-7", black: false },
//   { col: 6, row: 7, type: "white-pawn", name: "white-pawn-8", black: false },
//   { col: 7, row: 0, type: "white-rook", name: "white-rook-1", black: false },
//   {
//     col: 7,
//     row: 1,
//     type: "white-knight",
//     name: "white-knight-1",
//     black: false,
//   },
//   {
//     col: 7,
//     row: 2,
//     type: "white-bishop",
//     name: "white-bishop-1",
//     black: false,
//   },
//   { col: 7, row: 3, type: "white-queen", name: "white-queen", black: false },
//   { col: 7, row: 4, type: "white-king", name: "white-king", black: false },
//   {
//     col: 7,
//     row: 5,
//     type: "white-bishop",
//     name: "white-bishop-2",
//     black: false,
//   },
//   {
//     col: 7,
//     row: 6,
//     type: "white-knight",
//     name: "white-knight-2",
//     black: false,
//   },
//   { col: 7, row: 7, type: "white-rook", name: "white-rook-2", black: false },
// ];
