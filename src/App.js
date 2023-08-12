import './App.css';
import './styles/Reset.css'
import './styles/Global.css'
import GoogleFontLoader from 'react-google-font-loader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="App">
      <GoogleFontLoader 
        fonts={[
          { font: 'Work Sans', weights: [500] },
          { font: 'Montserrat', weights: [300, 500, 700] } 
        ]} 
      />      <Router basename='/'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
