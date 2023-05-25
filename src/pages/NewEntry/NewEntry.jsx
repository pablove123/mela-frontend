import { useState } from "react";
import styles from './NewEntry.module.css'

const NewEntry = (props) => {
  const [form, setForm] = useState({
    feeling: 'Happy',
    game: '',
    comment: '',
  })
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddMoodEntry(form)
  }

  return ( 
    <>
    <div className={styles.newEntryBorder}>

      <header className={styles.newHeader}>Add a new Mood entry</header>
      <form onSubmit={handleSubmit}>
        <div className={styles.newEntryDiv}>
          <label htmlFor="feeling-input">Current Mood </label>
          <select
            required
            name="feeling"
            id="feeling-input"
            value={form.feeling}
            onChange={handleChange}
            >
            <option value="Happy">Happy</option>
            <option value="Sad">Sad</option>
            <option value="Angry">Angry</option>
            <option value="Nuetral">Nuetral</option>
            <option value="Bored">Bored</option>
            <option value="Relaxed">Relaxed</option>
          </select>
        </div>
        <div className={styles.newEntryDiv}>
          <label  htmlFor="notes-input">Notes:</label>
          <input
          className={styles.newEntryNotes}
          required
          type="text"
          name="notes"
          id="notes-input"
          value={form.notes}
          placeholder="Write notes here"
          onChange={handleChange}
          />
        </div>
        <button  className={styles.newEntryButton} type="submit">SUBMIT</button>
      </form>
    </div>
    </>
    );

}

export default NewEntry;