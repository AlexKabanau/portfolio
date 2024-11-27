import './styles/main.css'

import Navbar from './components/navbar/Navbar'
// import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Project from './pages/Project';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './utils/scrollToTop';
import Aboutme from './pages/Aboutme';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/aboutme' element={<Aboutme />} />
          <Route path='/project/:id' element={<Project />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
