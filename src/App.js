import './styles/main.css'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Project from './pages/Project';
import Aboutme from './pages/Aboutme';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './utils/scrollToTop';
import PageTransition from './components/PageTransition/PageTransition';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path=''          element={<PageTransition><Home /></PageTransition>} />
        <Route path='/projects' element={<PageTransition><Projects /></PageTransition>} />
        <Route path='/aboutme'  element={<PageTransition><Aboutme /></PageTransition>} />
        <Route path='/project/:id' element={<PageTransition><Project /></PageTransition>} />
        <Route path='/contacts' element={<PageTransition><Contacts /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
