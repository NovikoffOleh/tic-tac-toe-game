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
    if (winner || boardCopy[index]) return
    //определить чей ход
    boardCopy[index] = xIsNext ? 'X' : '0'
    //обновить стейт
    setBoard(boardCopy)
    setXIsNext(!xIsNext)
  }
<h1>Hello</h1>
  const startNewGame = () => {
    return (
      <button className='start__btn' onClick={(
      ) => setBoard (Array(9).fill(null))}>
        Почни з початку
      </button>
    )
  }

  return (
    <div className='wrapper'>
      <h1 className='transt'>Старовинна гра "Хрестики-Нолики"</h1>
      {startNewGame()}
      <Board squares={ board} click={handleClick} />
    </div>
  )
}
export default Game;
