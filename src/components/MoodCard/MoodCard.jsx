import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import styles from "./MoodCard.module.css"

const MoodCard = (props) => {

  const { id } = useParams()
  
  // const filterDate = (time) => {
  //   return time.slice(0,6)
  // }

  function formatDate(createdAt) {
    const date = new Date(createdAt);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }
  

  const date = formatDate(props.entry.createdAt)
  console.log(date)

  return ( 
    <>
      <Link to={`/entry/${props.entry._id}`}>
    {!date}
      <article className={styles.moodcard}>
        <h1>Entry: {date}</h1> 
        <p>Mood:{props.entry.feeling}</p>
      </article>
      </Link>
    </>
    );
}

export default MoodCard;