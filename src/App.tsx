import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Home from './components/Home'
import Projects from './components/Projects'
import './App.css'
import logo from './assets/IMG_5957.jpg'
import linkedin from './assets/linkedInLogo_cropped.webp'
import github from './assets/GitHub.png'
import moon from './assets/moon.png'
import satellite from './assets/sattelite.png'

function App() {
  const [, setImageError] = useState(false);
  const [isRotating] = useState(true);
  const [text] = useState("Hi, I'm Jaxson Gauthier");
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the original tabs position (you might need to adjust this value)
      const tabsPosition = window.innerHeight - 100; // Assuming tabs are near the bottom of the header
      setShowStickyNav(window.scrollY > tabsPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: .2,
        staggerChildren: 0.075
      }
    }
  };

  const letter = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const NavTabs = () => (
    <nav className="tabs">
      <Link to="/" className="tab">Home</Link>
      <Link to="/projects" className="tab">Projects</Link>
      <a href="https://www.linkedin.com/in/jaxson-gauthier-61b555252/" className="tab">
        <img src={linkedin} alt="LinkedIn" className="links-icon" />
      </a>
      <a href="https://github.com/jaxgauthier" className="tab">
        <img src={github} alt="GitHub" className="links-icon" />
      </a>
    </nav>
  );

  return (
    <Router>
      <div className="app-container">
        {/* Sticky Navigation */}
        <AnimatePresence>
          {showStickyNav && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-md z-50 py-3 px-4"
            >
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-800">Jaxson Gauthier</span>
                <NavTabs />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="header">
          <div className="stars">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="star" />
            ))}
          </div>
          <motion.div 
            className="moon-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            <motion.img
              src={moon}
              alt="Moon"
              className="moon-image"
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            />
          </motion.div>
          <motion.div 
            className="logo-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img 
              src={logo} 
              alt="Logo" 
              className={`logo ${isRotating ? 'logo-animate-fade-rotate' : ''}`}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                console.error('Image failed to load');
                setImageError(true);
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>
          <div className="header-content">
            <motion.h1
              className="site-title"
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              {text.split("").map((char, index) => (
                <motion.span
                  key={char + "-" + index}
                  variants={letter}
                  className={char === " " ? "space" : ""}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.div
              className="tabs-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
            >
              <NavTabs />
            </motion.div>
            <motion.div
              className="satellite-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            >
              <motion.img
                src={satellite}
                alt="Satellite"
                className="satellite-image"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Tab Content */}
        <main className="tab-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
