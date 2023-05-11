import { useParams } from "react-router-dom";
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
    {!date}
      <h1>Entry: {date}</h1> 
      <p>Mood:{props.entry.feeling}</p>
      <p>Notes: {props.entry.notes}</p>
      <p><button  onClick={() => props.handleDeleteExperience(id)}>Delete</button></p>
    </>
    );
}

export default MoodCard;