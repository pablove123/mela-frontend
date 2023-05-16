import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"
import * as entryService from '../../services/entryService'

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
      <p>{entry.feeling}</p>
      <p>{entry.notes}</p>
    </>
    );
} 
export default EntryDetails;