import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
          {/* <li><Link to="/profiles">Profiles</Link></li> */}
          <li><Link className={styles.NavLink} to="" onClick={handleLogout}>LOG OUT</Link></li>
          {/* <li><Link to="/change-password">Change Password</Link></li> */}
          <li><Link className={styles.NavLink} to="/games">Games</Link></li>
          <li><Link className={styles.NavLink} to="/moods">Mood Tracker</Link></li>
          <li><Link className={styles.NavLink} to="/">Home</Link></li>
        </ul>
      :
        <ul>
          <li><Link className={styles.NavLink} to="/login">Log In</Link></li>
          <li><Link className={styles.NavLink} to="/signup">Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
