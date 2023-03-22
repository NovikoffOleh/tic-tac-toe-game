import React, {useState} from 'react'
import Board from './Board';
import { calculateWinner } from "../helper";
import  './Game.css';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculateWinner(board)

  const handleClick = (index) => {
    const boardCopy = [...board]
    //определить біл ли клик по ячейке

    //определить чей ход

    //обновить стейт
  }

  return (
    <div className='wrapper'>
      <Board squares={ board} />
    </div>
  )
}
export default Game;
