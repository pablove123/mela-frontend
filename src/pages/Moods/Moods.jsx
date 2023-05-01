import MoodCard from "../../components/MoodCard/MoodCard";
import GameCard from "../../components/GameCard/GameCard";
import { useState } from "react";

const Moods = (props) => {
  const [entry, setEntry] = useState([])

  return ( 
    <>
      <h1>This is Moods List</h1>
      <button><a href="/moods/entry">Click here to add new entry</a></button>
      <p><MoodCard entry={entry} /></p>
    </>
    );
}

export default Moods;