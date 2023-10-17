import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from './pages/About';
import Exercise from './pages/Exercise';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Equipment from './pages/Equipment';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/exercises' element={<Exercise />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/equipments' element={<Equipment />} />

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
