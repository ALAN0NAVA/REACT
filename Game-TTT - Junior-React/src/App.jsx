import { useState } from 'react'
import './App.css'
import { Square } from './Components/Square'
import { TURNS, WINNER_COMBOS } from './Constants'

function App() {
    //declaramos HOOKs useState
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)//lo convierte de string
    return Array(9).fill(null)
  }) 

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  }) //estado del turno

  const [winner, setWinner] =useState(() => {
    const winnerFromStorage = window.localStorage.getItem('winner')
    return winnerFromStorage ?? (null)
  }) //estado de winner//0-empate//1-winner
  

  const checkWinner = (boardToCheck) => {
    //revisamos todas las combinaciones ganadoras
    for (const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ){
        return boardToCheck[a]}
    }
    //si no hay ganador
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
    window.localStorage.removeItem('winner')
  }
  const checkEndGame = (newBoard) => {
    return newBoard.every((Square) => Square != null)
  }
  const updateBoard = (index) => {
    //no actualizamos esta posicion 
    //si ya tiene algo
    if (board[index] || winner) return
      //actualizar tablero
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)
      //cambiar turno
      const newTurn = turn == TURNS.X ? TURNS.O :  TURNS.X
      setTurn(newTurn) 
      //revisar si hay ganador
      const newWinner = checkWinner(newBoard)
    if (newWinner){
      setWinner(newWinner)
    }else if (checkEndGame(newBoard)){
      setWinner(false)//empate
    }
    //guardar la partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))//lo convierte en string
    window.localStorage.setItem('turn', newTurn)//lo convierte en string
    window.localStorage.setItem('winner', newWinner)//lo convierte en string

  }
  //////////////render///////////////////vvv
  return (
    <main className='board'>
      <h1>Tik Tak Toe</h1>
      <section className='game'>
          {
            board.map((_, index) => {
              return(
                <Square 
                  key={index}
                  index={index}
                  updateBoard={updateBoard}  //se le manda la funcion en si, no la ejecucion de la misma (updateboard())
                >
                  {board[index]}
                </Square>
              )
            })//renderizar los 9 square
          }
      </section>

      <section className='turn'>
        <Square isSelected = {turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected = {turn == TURNS.O}>{TURNS.O}</Square>
      </section>

      <button onClick={resetGame}>Reset del juego OwO</button>
      
      {
        winner != null && (
          <section className="winner">
            <div className="text">
              <h2>
                {winner == false ? 'Empate' : 'Ganó: '}
              </h2>
              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }

    </main> 
  )
//////////////render/////////////////// 
}

export default App
