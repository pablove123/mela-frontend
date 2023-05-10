import MoodCard from "../../components/MoodCard/MoodCard";
import GameCard from "../../components/GameCard/GameCard";
import { useState } from "react";

function Moods (props) {

  console.log("this is props", props.entries)

  return ( 
    <>
      <h1>This is Moods List</h1>
      <button><a href="/moods/entry">Click here to add new entry</a></button>

    </>
    );
}

export default Moods;