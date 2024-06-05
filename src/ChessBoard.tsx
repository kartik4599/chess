import { useChess } from "./ChessContext";
import { boardArray, icons } from "./constant";

const ChessBlock: React.FC<{ col: number; row: number }> = ({ col, row }) => {
  const even = (col + row) % 2 === 0;
  const { getPieces, setPieces, movePieces, blackPlay } = useChess();
  const { src, canplace, cankill } = getPieces({ col, row });

  return (
    <div
      className={blackPlay ? "pieces-rotate" : ""}
      // className={blackPlay ? "board-rotate" : "board"}
      onClick={() =>
        canplace || cankill ? movePieces({ col, row }) : setPieces({ col, row })
      }
      style={{
        background: cankill
          ? "#ff4d4d"
          : canplace
          ? "#69ff7c"
          : even
          ? "#eeeed2"
          : "#769656",
        height: "75px",
        width: "75px",
        border: "2px solid #769656",
      }}
    >
      {src && <img src={src} alt="" style={{ height: "75px" }} />}
    </div>
  );
};

const ChessBoard = () => {
  const { elementedPieces, blackPlay } = useChess();
  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <div
        style={{
          display: "flex",
          width: "120px",
          borderRadius: "5px",
          flexWrap: "wrap",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        {elementedPieces.black.map(({ type }) => (
          <img src={icons[type]} height={60} />
        ))}
      </div>
      <div
        className={blackPlay ? "board-rotate" : "board"}
        style={{
          display: "grid",
          width: "fit-content",
          gridTemplateColumns: "auto auto auto auto auto auto auto auto",
          borderRadius: "5px",
        }}
      >
        {boardArray.map(({ col, row }) => (
          <ChessBlock col={col} row={row} key={`${col}${row}`} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          width: "120px",
          borderRadius: "5px",
          flexWrap: "wrap",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        {elementedPieces.white.map(({ type }) => (
          <img src={icons[type]} height={60} />
        ))}
      </div>
    </div>
  );
};

export default ChessBoard;
