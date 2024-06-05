import "./App.css";
import ChessBoard from "./ChessBoard";
import ChessContext from "./ChessContext";

function App() {
  return (
    <div>
      <ChessContext>
        <ChessBoard />
      </ChessContext>
    </div>
  );
}

export default App;
