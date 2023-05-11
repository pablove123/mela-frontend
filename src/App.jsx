// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { useEffect } from 'react'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Games from './pages/Games/Games'
import Moods from './pages/Moods/Moods'
import NewEntry from './pages/NewEntry/NewEntry'
import Footer from './components/Footer/Footer'
import TTT from './pages/TicTacToe/TicTacToe'
import Guess from './pages/GuessTheNumber/GuessTheNumber'
import HandMan from './pages/HangMan/HangMan'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as entryService from './services/entryService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [entries, setEntry] = useState([])


  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }



  useEffect(() => {
    const fetchAllEntries = async () => {
      const data = await entryService.getAllEntries()
      setEntry(data)
    } 
    if (user) fetchAllEntries()
  }, [user])

  const handleAddMoodEntry = async (entryData) => {
    const newEntry = await entryService.create(entryData)
    setEntry([newEntry, ...entries])
    navigate(`/moods`)
  }

  const handleDeleteEntry = async (id) => {
    const deletedEntry = await entryService.deleteEntry(id)
    setEntry(entries.filter(b => b._id !== deletedEntry._id))
    navigate('/moods')
  }
  
  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
    <Footer user={user}/>
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/games"
          element={
            <ProtectedRoute user={user}>
              <Games />
            </ProtectedRoute>
          }
        />
        <Route
          path="/moods"
          element={
            <ProtectedRoute user={user}>
              <Moods 
              handleDeleteEntry={handleDeleteEntry} entries={entries} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/moods/entry"
          element={
            <ProtectedRoute user={user}>
              <NewEntry handleAddMoodEntry={handleAddMoodEntry}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/games/ttt"
          element={
            <ProtectedRoute user={user}>
              <TTT/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/games/hangMan"
          element={
            <ProtectedRoute user={user}>
              <HandMan/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/games/guess"
          element={
            <ProtectedRoute user={user}>
              <Guess/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
