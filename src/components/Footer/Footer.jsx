import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
          <div className={styles.foot}>
            <Link className={styles.Games} to="/games">Games</Link>
            <Link className={styles.NavLink} to="/moods">Mood Tracker</Link>
            <Link className={styles.NavLink} to="/">Home</Link>
          </div>
        </ul>
      :
        <ul>
        </ul>
      }
    </nav>
  )
}

export default Footer