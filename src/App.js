import {useState} from "react";

function Sqaure({value, onSquareClick})
{  
  return (<button className="square" onClick = {onSquareClick}>{value}</button>);
}

export default function Board() {

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i)
  {
    if(squares[i])
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
