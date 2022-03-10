import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from "./Pages/Home"
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import Pricing from "./Pages/Pricing";
import Reserve from "./Pages/Reserve";
import Waiver from "./Pages/Waiver";



function App() {
  return (
    <BrowserRouter> 
     <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="About" element={<About />}></Route>
          <Route exact path="Contact" element={<Contact />}></Route>
          <Route exact path="Pricing" element={<Pricing />}></Route>
          <Route exact path="Reserve" element={<Reserve />}></Route>
          <Route exact path="Waiver" element={<Waiver />}></Route>
        </Routes> 
        </BrowserRouter>

  );
}

export default App;
