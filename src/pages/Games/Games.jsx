import styles from './Games.module.css'
import GameCard from '../../components/GameCard/GameCard';

const Games = (props) => {
  return (
    <>
      <h1>Games List</h1>
      <p><button><a href="/games/ttt">TicTacToe</a></button></p>
      <p><button><a href="/games/guess">Guess The Number</a></button></p>
      <p><button><a href="/games/hangman">HangMan</a></button></p>
    </>

    );
}

export default Games;