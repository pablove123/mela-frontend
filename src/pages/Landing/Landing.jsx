import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <p>Welcome to Mela!</p>
      <h1>Hello {user ? user.name : 'friend'}!</h1>
    </main>
  )
}

export default Landing
