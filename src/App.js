import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import NasaPhoto from "./pages/NasaPhoto";
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  const [data, setData] = useState();
  useEffect (() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=q38xH01AefB5EUaEqt8hXQwGJLRGhTFa3M4PvaKF")
    .then(res => {
      console.log(res);
      setData(res.data);
    })
    .catch(err => console.error(err))
  }, [])

  return (
    
    <><div className="App">
      <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    </div><div>
    {data && <NasaPhoto photo={data} />}
      </div></>
  );
}


export default App;
