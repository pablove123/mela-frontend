import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"
import * as entryService from '../../services/entryService'
import styles from "./EntryDetails.module.css"

const EntryDetails = (props) => {

  const [entry, setEntry] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    const fetchExperience = async () => {
      const data = await entryService.show(id)
      setEntry(data)
    }
    fetchExperience()
  }, [id])


  if (!entry) return <h1>Loading...</h1>

  console.log(entry)
  console.log(id)
  return (
    <>
      <h1>This is entry details</h1> 
      <p>Feeling: {entry.feeling}</p>
      <p>Notes: {entry.notes}</p>
      <div className={styles.updateDelete}>
              <button className={styles.deleteButton} onClick={() => props.handleDeleteEntry(id)}>Delete Entry</button>
      </div>
    </>
    );
} 
export default EntryDetails;