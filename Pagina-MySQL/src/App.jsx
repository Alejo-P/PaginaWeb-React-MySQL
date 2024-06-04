import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import UserLists from './pages/UserLists'
import NavBar from './components/NavBar'
import FormUser from './pages/FormUser'

function App() {
  return (
    <>
        <BrowserRouter>
          <NavBar/>
          <main>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/users' element={<UserLists />} />
              <Route path='/newUser' element={<FormUser/>} />
            </Routes>
          </main>
        </BrowserRouter>
    </>
  )
}

export default App
