import { useParams } from "react-router-dom";
const MoodCard = (props) => {

  const { id } = useParams()

  return ( 
    <>
      <h1>Entry: {props.length}</h1> 
      <p>Mood:{props.entry.feeling}</p>
      <p>Notes: {props.entry.notes}</p>
      <p><button  onClick={() => props.handleDeleteExperience(id)}>Delete</button></p>
    </>
    );
}

export default MoodCard;