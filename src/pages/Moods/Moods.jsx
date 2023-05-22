import MoodCard from "../../components/MoodCard/MoodCard";
import GameCard from "../../components/GameCard/GameCard";
import { useState } from "react";
import styles from "./Moods.module.css"

function Moods (props) {

  console.log("this is props", props.entries)

  return ( 
    <>
      <h1>Mood Entries</h1>
      <button className={styles.moodButton}><a href="/moods/entry">Click here to add new entry</a></button>
      {props.entries.map((entry)=> (
        <MoodCard key={entry.id} entry={entry} date={entry.createdAt} />
      ))}
    </>
    );
}

export default Moods;