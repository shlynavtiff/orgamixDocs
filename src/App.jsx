
import './App.css'
import { Route, Routes } from 'react-router-dom'
// import { Layout } from 'lucide-react'
import Layout from './pages/Layout'
import Testing from './pages/Testing'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import Tasks from './pages/Tasks'
import Notes from './pages/Notes'
import Projects from './pages/Projects'
import Goals from './pages/Goals'
import Pomodoro from './pages/Pomodoro'
import Deadlines from './pages/Deadlines'
import AskAI from './pages/AskAI'
import Dashboard from './pages/Dashboard'
import Goal2 from './pages/Goal2'
import Notifications from './pages/Notifications'
import Settings from './pages/Settings'
import Drilon from './pages/Drilon'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Drilon />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/testing/tasks" element={<Tasks />} />
        <Route path="/testing/notes" element={<Notes />} />
        <Route path="/testing/dashboard" element={<Dashboard />} />
        <Route path="/testing/projects" element={<Projects />} />
        <Route path="/testing/goals" element={<Goals />} />
        <Route path="/testing/pomodoro" element={<Pomodoro />} />
        <Route path="/testing/deadline" element={<Deadlines />} />
        <Route path="/testing/ask-ai" element={<AskAI />} />
        <Route path="/testing/notifications" element={<Notifications />} />
        <Route path="/testing/settings" element={<Settings />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
