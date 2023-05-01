import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
          <li><Link className={styles.NavLink} to="/games">Games</Link></li>
          <li><Link className={styles.NavLink} to="/moods">Mood Tracker</Link></li>
          <li><Link className={styles.NavLink} to="/">Home</Link></li>
        </ul>
      :
        <ul>
        </ul>
      }
    </nav>
  )
}

export default Footer