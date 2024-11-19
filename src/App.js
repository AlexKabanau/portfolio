import './styles/main.css'

import vkIcon from './img/icons/vk.svg'
import instagrammIcon from './img/icons/instagram.svg'
import gitHubIcon from './img/icons/gitHub.svg'
// import gitHubBlackIcon from './img/icons/gitHub-black.svg'
import linkedInIcon from './img/icons/linkedIn.svg'
import xIcon from './img/icons/twitter.svg'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Header />

      <main className="section">
        <div className="container">

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
            </li>
          </ul>

        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item"><a href="#!"><img src={vkIcon} alt="Link" /></a></li>
              <li className="social__item"><a href="#!"><img src={instagrammIcon} alt="Link" /></a></li>
              <li className="social__item"><a href="#!"><img src={xIcon} alt="Link" /></a></li>
              <li className="social__item"><a href="#!"><img src={gitHubIcon} alt="Link" /></a></li>
              <li className="social__item"><a href="#!"><img src={linkedInIcon} alt="Link" /></a></li>
            </ul>
            <div className="copyright">
              <p>© 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
