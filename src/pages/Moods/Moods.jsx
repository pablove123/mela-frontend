import MoodCard from "../../components/MoodCard/MoodCard";
import GameCard from "../../components/GameCard/GameCard";
import { useState } from "react";
import styles from "./Moods.module.css"

function Moods (props) {

  console.log("this is props", props.entries)

  return ( 
    <>
      <h1 className={styles.entryHeader}>Mood Entries</h1>
      <button className={styles.moodButton}><a href="/moods/entry">New entry</a></button>
      <div className={styles.moodCards}>
      {props.entries.map((entry)=> (
        <MoodCard key={entry.id} entry={entry} date={entry.createdAt} />
      ))}
      </div>
    </>
    );
}

export default Moods;