import "./App.css";
import { useEffect, useState } from "react";
import { winCondition } from "./library/winCondition.js";
import Popup from "./popup/Popup.jsx";

function App() {
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("");
  const [count, setCount] = useState(0);
  const [popupActive, setPopupActive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [field, setField] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  useEffect(() => {
    const isWin = winCondition(field);
    if (isWin === "X") {
      setPopupActive(true);
      setWinner("Player X wins!");
      setIsDisabled(true);
    } else if (isWin === "O") {
      setPopupActive(true);
      setWinner("Player O wins!");
      setIsDisabled(true);
    }
    if (count === 9) {
      setPopupActive(true);
      setWinner("Tie");
    }
  }, [field]);
  const onTurn = (i, j) => {
    setPlayer(player === "X" ? "O" : "X");
    field[i][j] = player;
    setField((prevState) => [...prevState]);
    setCount(count + 1);
  };
  const reset = () => {
    setPopupActive(false);
    setField([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setIsDisabled(false);
    setTimeout(() => setPlayer("X"), 400);
    setWinner("");
    setCount(0);
  };

  return (
    <div>
      <div>
        <h2>Player: {player}</h2>
      </div>
      <div className="field">
        <button
          disabled={field[0][0] !== ""}
          className="field-part"
          onClick={isDisabled ? null : () => onTurn(0, 0)}
        >
          {field[0][0]}
        </button>
        <button
          disabled={field[0][1] !== ""}
          className="field-part"
          onClick={isDisabled ? null : () => onTurn(0, 1)}
        >
          {field[0][1]}
        </button>
        <button
          disabled={field[0][2] !== ""}
          className="field-part"
          onClick={isDisabled ? null : () => onTurn(0, 2)}
        >
          {field[0][2]}
        </button>
        <button
          disabled={field[1][0] !== ""}
          className="field-part"
          onClick={isDisabled ? null : () => onTurn(1, 0)}
        >
          {field[1][0]}
        </button>
        <button
          disabled={field[1][1] !== ""}
          className="field-part"
          onClick={isDisabled ? null : () => onTurn(1, 1)}
        >
          {field[1][1]}
        </button>
        <button
          disabled={field[1][2] !== ""}
          className="field-part"
          onClick={isDisabled ? null : () => onTurn(1, 2)}
        >
          {field[1][2]}
        </button>
        <button
          disabled={field[2][0] !== ""}
          className="field-part"
          onClick={isDisabled ? null : () => onTurn(2, 0)}
        >
          {field[2][0]}
        </button>
        <button
          disabled={field[2][1] !== ""}
          className="field-part"
          onClick={isDisabled ? null : () => onTurn(2, 1)}
        >
          {field[2][1]}
        </button>
        <button
          disabled={field[2][2] !== ""}
          className="field-part"
          onClick={isDisabled ? null : () => onTurn(2, 2)}
        >
          {field[2][2]}
        </button>
      </div>
      <div>
        <button className="resetButton" onClick={reset}>
          Reset
        </button>
      </div>
      <Popup active={popupActive} setActive={setPopupActive}>
        <div className="popupBlock">
          <span className="paddingB">{winner}</span>
          <span>Restart?</span>
          <div className="buttons">
            <button
              className="resetButton"
              onClick={() => setPopupActive(false)}
            >
              No
            </button>
            <button className="resetButton" onClick={reset}>
              Yes
            </button>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default App;
