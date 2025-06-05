import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import './App.css'
import logo from './assets/IMG_5957.jpg'
import linkedin from './assets/linkedInLogo_cropped.webp'
import github from './assets/GitHub.png'


function App() {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    console.log('App component mounted');
  }, []);

  return (
    <Router>
      <div className="app-container">
        <div className="header">
          <div className="logo-container">
            <img 
              src={logo} 
              alt="Logo" 
              className="logo" 
              onError={(e) => {
                console.error('Image failed to load');
                setImageError(true);
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="header-content">
            <h1 className="site-title">My Website</h1>
            <nav className="tabs">
              <Link to="/" className="tab">Home</Link>
              <Link to="/about" className="tab">About</Link>
              <Link to="/projects" className="tab">Projects</Link>
              <a href="https://www.linkedin.com/in/jaxson-gauthier-61b555252/" className="tab">
                <img src={linkedin} alt="LinkedIn" className="links-icon" />
              </a>
              <a href="https://github.com/jaxgauthier" className="tab">
                <img src={github} alt="GitHub" className="links-icon" />
              </a>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <main className="tab-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
