import { createContext, useContext, useState } from "react";
import { BoardPiece, icons, initState } from "./constant";

type ChessContextType = {
  currentPieces: BoardPiece[];
  movePieces: (arg: { col: number; row: number }) => void;
  getPieces: (arg: { col: number; row: number }) => {
    src?: string;
    canplace: boolean;
    cankill: boolean;
  };
  setPieces: (arg: { col: number; row: number }) => void;
};

const ChessContext = createContext<ChessContextType>({
  currentPieces: [],
  movePieces: () => {},
  getPieces: () => ({ canplace: false, cankill: false }),
  setPieces: () => {},
});

const ChessProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentPieces, setCurrentPieces] = useState(initState);
  const [selectedPieces, setSelectedPieces] = useState<BoardPiece | null>(null);
  const [canPlace, setCanPlace] = useState<
    {
      col: number;
      row: number;
    }[]
  >([]);
  const [canKill, setCanKill] = useState<
    {
      col: number;
      row: number;
    }[]
  >([]);

  // helper function

  const setBlackPawn = ({ col, row }: { col: number; row: number }) => {
    const arr = [];
    currentPieces.find(
      ({ col: cols, row: rows }) => cols === col + 1 && rows === row
    )
      ? undefined
      : arr.push({ col: col + 1, row });

    if (col === 1) {
      currentPieces.find(
        ({ col: cols, row: rows }) => cols === col + 2 && rows === row
      )
        ? undefined
        : arr.push({ col: col + 2, row });
    }

    const opponent = currentPieces.filter(
      ({ col: cols, row: rows }) =>
        cols === col + 1 && (rows === row + 1 || rows === row - 1)
    );
    opponent.forEach(({ col, row }) => arr.push({ col, row }));
    return arr;
  };

  const setWhitePawn = ({ col, row }: { col: number; row: number }) => {
    const arr = [];
    currentPieces.find(
      ({ col: cols, row: rows }) => cols === col - 1 && rows === row
    )
      ? undefined
      : arr.push({ col: col - 1, row });
    if (col === 6) {
      currentPieces.find(
        ({ col: cols, row: rows }) => cols === col - 2 && rows === row
      )
        ? undefined
        : arr.push({ col: col - 2, row });
    }
    const opponent = currentPieces.filter(
      ({ col: cols, row: rows }) =>
        cols === col - 1 && (rows === row + 1 || rows === row - 1)
    );
    opponent.forEach(({ col, row }) => arr.push({ col, row }));

    return arr;
  };

  const setRook = ({ col, row }: { col: number; row: number }) => {
    const arr = [];
    for (let cols = col; cols < 8; cols++) {
      arr.push({ col: cols, row: row });
    }
    for (let cols = col; cols >= 0; cols--) {
      arr.push({ col: cols, row: row });
    }
    for (let rows = row; rows < 8; rows++) {
      arr.push({ col: col, row: rows });
    }
    for (let rows = row; rows >= 0; rows--) {
      arr.push({ col: col, row: rows });
    }

    return arr;
  };

  const setBishop = ({ col, row }: { col: number; row: number }) => {
    const arr = [];
    let cols = col;
    let rows = row;
    while (cols < 8 && rows >= 0) {
      arr.push({ col: cols, row: rows });
      cols++;
      rows--;
    }
    cols = col;
    rows = row;
    while (cols >= 0 && rows < 8) {
      arr.push({ col: cols, row: rows });
      cols--;
      rows++;
    }
    cols = col;
    rows = row;
    while (cols < 8 && rows < 8) {
      arr.push({ col: cols, row: rows });
      cols++;
      rows++;
    }
    cols = col;
    rows = row;
    while (cols >= 0 && rows >= 0) {
      arr.push({ col: cols, row: rows });
      cols--;
      rows--;
    }

    return arr;
  };

  const setKinghts = ({ col, row }: { col: number; row: number }) => {
    return [
      { col: col - 1, row: row - 2 },
      { col: col - 1, row: row + 2 },
      { col: col - 2, row: row - 1 },
      { col: col - 2, row: row + 1 },
      { col: col + 1, row: row - 2 },
      { col: col + 1, row: row + 2 },
      { col: col + 2, row: row - 1 },
      { col: col + 2, row: row + 1 },
    ];
  };

  const setKings = ({ col, row }: { col: number; row: number }) => {
    return [
      { col: col + 1, row },
      { col: col + 1, row: row - 1 },
      { col: col + 1, row: row + 1 },
      { col, row },
      { col, row: row - 1 },
      { col, row: row + 1 },
      { col: col - 1, row },
      { col: col - 1, row: row - 1 },
      { col: col - 1, row: row + 1 },
    ];
  };

  // hook functions
  const movePieces = ({ col, row }: { col: number; row: number }) => {
    if (!selectedPieces) return;
    const selected = currentPieces.find(
      ({ name }) => name === selectedPieces.name
    );
    if (!selected) return;
    setCurrentPieces((previous) => {
      const remaingArr = previous.filter(({ name }) => name !== selected.name);
      setSelectedPieces(null);
      setCanPlace([]);
      setCanKill([]);
      return [{ ...selected, col, row }, ...remaingArr];
    });
  };

  const getPieces = ({ col, row }: { col: number; row: number }) => {
    const src = currentPieces.find(
      (piece) => piece.col === col && piece.row === row
    )?.type;
    const canplace = canPlace.find(
      (piece) => piece.col === col && piece.row === row
    );
    const cankill = canKill.find(
      (piece) => piece.col === col && piece.row === row
    );

    return {
      src: src ? icons[src] : undefined,
      canplace: canplace ? true : false,
      cankill: cankill ? true : false,
    };
  };

  const setPieces = ({ col, row }: { col: number; row: number }) => {
    const piece = currentPieces.find(
      (piece) => piece.col === col && piece.row === row
    );
    if (!piece) return;
    setSelectedPieces(piece);
    let arr: {
      col: number;
      row: number;
    }[] = [];

    switch (piece.type) {
      case "black-pawn": {
        arr = setBlackPawn({ col, row });
        break;
      }
      case "white-pawn": {
        arr = setWhitePawn({ col, row });
        break;
      }
      case "black-rook": {
        arr = setRook({ col, row });
        break;
      }
      case "white-rook": {
        arr = setRook({ col, row });
        break;
      }
      case "black-bishop": {
        arr = setBishop({ col, row });
        break;
      }
      case "white-bishop": {
        arr = setBishop({ col, row });
        break;
      }
      case "black-knight": {
        arr = setKinghts({ col, row });
        break;
      }
      case "white-knight": {
        arr = setKinghts({ col, row });
        break;
      }
      case "black-queen": {
        arr = [...setRook({ col, row }), ...setBishop({ col, row })];
        break;
      }
      case "white-queen": {
        arr = [...setRook({ col, row }), ...setBishop({ col, row })];
        break;
      }
      case "black-king": {
        arr = setKings({ col, row });
        break;
      }
      case "white-king": {
        arr = setKings({ col, row });
        break;
      }
    }

    const canplace: {
      col: number;
      row: number;
    }[] = [];
    const cankill: {
      col: number;
      row: number;
    }[] = [];
    arr.forEach(({ col, row }) => {
      const secoundPiece = currentPieces.find(
        ({ col: cols, row: rows }) => cols === col && rows === row
      );
      if (!secoundPiece) {
        canplace.push({ col, row });
        return;
      }
      if (secoundPiece.black !== piece.black) cankill.push({ col, row });
    });
    setCanPlace(canplace);
    setCanKill(cankill);
  };

  return (
    <ChessContext.Provider
      value={{ currentPieces, movePieces, setPieces, getPieces }}>
      {children}
    </ChessContext.Provider>
  );
};

export default ChessProvider;

export const useChess = () => {
  const context = useContext(ChessContext);
  if (!context) throw new Error("useChess must be used within a ChessProvider");
  return context;
};
