import { useDraggable, useDroppable } from "@dnd-kit/core";
import { useChess } from "./ChessContext";
import { boardArray, icons } from "./constant";
import { CSS } from "@dnd-kit/utilities";
import { useEffect } from "react";

const ChessBlock: React.FC<{ col: number; row: number }> = ({ col, row }) => {
  const even = (col + row) % 2 === 0;
  const { getPieces, setPieces, movePieces, blackPlay } = useChess();
  const { src, canplace, cankill, black } = getPieces({ col, row });

  const { setNodeRef: droppableRef } = useDroppable({
    id: `${col}${row}`,
    data: { col, row },
  });

  const {
    attributes,
    listeners,
    setNodeRef: draggableRef,
    transform,
    isDragging,
  } = useDraggable({
    id: `${col}${row}`,
    data: { col, row },
    disabled: black !== blackPlay,
  });

  useEffect(() => {
    if (isDragging) {
      setPieces({ col, row });
    }
  }, [isDragging, col, row]);

  return (
    <div
      ref={droppableRef}
      // className={blackPlay ? "pieces-rotate" : ""}
      onClick={() =>
        canplace || cankill ? movePieces({ col, row }) : setPieces({ col, row })
      }
      className="chess-block"
      style={{
        background: cankill
          ? "#d53e3e"
          : canplace
          ? "#FFB690"
          : even
          ? "#f6dcb9"
          : "#b85f30",
      }}
    >
      {src && (
        <img
          ref={draggableRef}
          {...listeners}
          {...attributes}
          src={src}
          alt=""
          style={{
            height: "75px",
            transform: CSS.Transform.toString(transform),
          }}
        />
      )}
    </div>
  );
};

const ChessBoard = () => {
  const { elementedPieces } = useChess();
  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <div className="sideChessBar">
        {elementedPieces.black.map(({ type, name }) => (
          <img key={name} src={icons[type]} height={60} />
        ))}
      </div>
      <div
        className="chess-board"
        // className={blackPlay ? "board-rotate" : "board"}
      >
        {boardArray.map(({ col, row }) => (
          <ChessBlock col={col} row={row} key={`${col}${row}`} />
        ))}
      </div>
      <div className="sideChessBar">
        {elementedPieces.white.map(({ type, name }) => (
          <img key={name} src={icons[type]} height={60} />
        ))}
      </div>
    </div>
  );
};

export default ChessBoard;
