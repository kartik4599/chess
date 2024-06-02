import ChessContext, { useChess } from "./ChessContext";
import { boardArray } from "./constant";

const ChessBlock: React.FC<{ col: number; row: number }> = ({ col, row }) => {
  const even = (col + row) % 2 === 0;
  const { getPieces, setPieces, movePieces } = useChess();
  const { src, canplace, cankill } = getPieces({ col, row });

  return (
    <div
      onClick={() =>
        canplace ? movePieces({ col, row }) : setPieces({ col, row })
      }
      style={{
        background: cankill
          ? "#ff4d4d"
          : canplace
          ? "#babaff"
          : even
          ? "#eeeed2"
          : "#769656",
        height: "75px",
        width: "75px",
        border: "2px solid #769656",
      }}>
      {src && <img src={src} alt="" style={{ height: "75px" }} />}
    </div>
  );
};

const ChessBoard = () => {
  return (
    <ChessContext>
      <div
        style={{
          display: "grid",
          width: "fit-content",
          gridTemplateColumns: "auto auto auto auto auto auto auto auto",
          borderRadius: "5px",
        }}>
        {boardArray.map(({ col, row }) => (
          <ChessBlock col={col} row={row} />
        ))}
      </div>
    </ChessContext>
  );
};

export default ChessBoard;
