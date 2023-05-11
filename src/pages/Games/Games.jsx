import styles from './Games.module.css'
import GameCard from '../../components/GameCard/GameCard';

const Games = (props) => {
  return (
    <>
      <h1>Games List</h1>
    <div className={styles.list}>

      <p ><button className={styles.gameList} ><a href="/games/ttt">TicTacToe</a></button></p>
      <p  ><button className={styles.gameList}><a href="/games/guess">Guess The Number</a></button></p>
      <p  ><button className={styles.gameList} ><a href="/games/hangMan">HangMan</a></button></p>
    </div>
    </>

    );
}

export default Games;