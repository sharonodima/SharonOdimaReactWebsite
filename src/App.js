import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navigation from "./pages/navigation";
function App() {
  
    return (
        <>
            
            <BrowserRouter>
                <Navigation/>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
  
export default App;
