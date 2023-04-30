import styles from './Games.module.css'
import GameCard from '../../components/GameCard/GameCard';

const Games = (props) => {
  return (
    <>
      <h1>Games List</h1>
      <p><GameCard/></p>
    </>

    );
}

export default Games;