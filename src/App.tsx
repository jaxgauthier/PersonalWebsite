import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import './App.css'
import logo from './assets/IMG_5957.jpg'

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="header">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="header-content">
            <h1 className="site-title">My Website</h1>
            <nav className="tabs">
              <Link to="/" className="tab">Home</Link>
              <Link to="/about" className="tab">About</Link>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <main className="tab-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
