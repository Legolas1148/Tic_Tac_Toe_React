import {useState} from "react";

function Sqaure({value, onSquareClick})
{  
  return (<button className="square" onClick = {onSquareClick}>{value}</button>);
}

export default function Board() {

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares);

  let status;
  if(winner)
  {
    status = 'Winner: ' + winner;
  }
  else
  {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i)
  {
    if(squares[i] || calculateWinner(squares))
    {
      return;
    }
    const nextSqaures = squares.slice();
    if(xIsNext)
    {
      nextSqaures[i] = 'X';
    }
    else
    {
      nextSqaures[i] = 'O';
    }
    setSquares(nextSqaures);
    setXIsNext(!xIsNext);
  }
  
  return( 
  <>
    <div className = "board-row">
      <Sqaure value = {squares[0]} onSquareClick ={() => handleClick(0)}/>
      <Sqaure value = {squares[1]} onSquareClick ={() => handleClick(1)}/>
      <Sqaure value = {squares[2]} onSquareClick ={() => handleClick(2)}/>  
    </div>
    <div className = "board-row">
      <Sqaure value = {squares[3]} onSquareClick ={() => handleClick(3)}/>
      <Sqaure value = {squares[4]} onSquareClick ={() => handleClick(4)}/>
      <Sqaure value = {squares[5]} onSquareClick ={() => handleClick(5)}/> 
    </div>
    <div className = "board-row">
      <Sqaure value = {squares[6]} onSquareClick ={() => handleClick(6)}/>
      <Sqaure value = {squares[7]} onSquareClick ={() => handleClick(7)}/>
      <Sqaure value = {squares[8]} onSquareClick ={() => handleClick(8)}/> 
    </div>
  </>
  );
}
