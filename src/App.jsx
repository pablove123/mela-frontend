// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

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

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
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
              <Moods/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/moods/entry"
          element={
            <ProtectedRoute user={user}>
              <NewEntry/>
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
          path="/games/guess"
          element={
            <ProtectedRoute user={user}>
              <Guess/>
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer user={user}/>
    </>
  )
}

export default App
