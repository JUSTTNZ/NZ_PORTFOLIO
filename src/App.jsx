import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout/Layout'
import About from './Pages/About/About'
import Dev from './Pages/About/Dev/Dev'
import Tech from './Pages/About/Tech/Tech'
import Work from './Pages/Work/Work'
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='about/dev' element={<Dev/>}/>
            <Route path='about/tech' element={<Tech/>}/>
            <Route path='work' element={<Work/>}/>
            <Route path='portfolio' element={<Portfolio/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
