import './App.css';
import HomePage from './components/pages/HomePage'
import About from './components/pages/about';
import LoginPage from './components/pages/applogin';
import Navbar from './components/Navbar'
import Footer from './components/appFooter'
//import AuthContext from './components/context/auth-context';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/applogin' element={<LoginPage/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
    
  );
}

export default App;
