import React, { useState } from 'react';
import "./Style.css"
const Main = () => {
  const [btn1, setBtn1] = useState(null);
  const [btn2, setBtn2] = useState(null);
  const [btn3, setBtn3] = useState(null);
  const [btn4, setBtn4] = useState(null);
  const [btn5, setBtn5] = useState(null);
  const [btn6, setBtn6] = useState(null);
  const [btn7, setBtn7] = useState(null);
  const [btn8, setBtn8] = useState(null);
  const [btn9, setBtn9] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const handleClick = (setButton) => {
    if (setButton === 'X' || setButton === 'O') return;
    setButton(currentPlayer);
    checkForWinner();
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const checkForWinner = () => {
    const combo = [
      [btn1, btn2, btn3],
      [btn4, btn5, btn6],
      [btn7, btn8, btn9],
      [btn1, btn4, btn7],
      [btn2, btn5, btn8],
      [btn3, btn6, btn9],
      [btn1, btn5, btn9],
      [btn3, btn5, btn7],
    ];

    for (let x of combo) {
      if (x[0] && x[0] === x[1] && x[0] === x[2]) {
        alert(`${x[0]} wins!`);
        resetGame();
        return;
      }
    }
  };

  const resetGame = () => {
    setBtn1(null);
    setBtn2(null);
    setBtn3(null);
    setBtn4(null);
    setBtn5(null);
    setBtn6(null);
    setBtn7(null);
    setBtn8(null);
    setBtn9(null);
    setCurrentPlayer('X');
  };

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <td>
              <button onClick={() => handleClick(setBtn1)}>{btn1}</button>
            </td>
            <td>
              <button onClick={() => handleClick(setBtn2)}>{btn2}</button>
            </td>
            <td>
              <button onClick={() => handleClick(setBtn3)}>{btn3}</button>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button onClick={() => handleClick(setBtn4)}>{btn4}</button>
            </td>
            <td>
              <button onClick={() => handleClick(setBtn5)}>{btn5}</button>
            </td>
            <td>
              <button onClick={() => handleClick(setBtn6)}>{btn6}</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClick(setBtn7)}>{btn7}</button>
            </td>
            <td>
              <button onClick={() => handleClick(setBtn8)}>{btn8}</button>
            </td>
            <td>
              <button onClick={() => handleClick(setBtn9)}>{btn9}</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default Main;
