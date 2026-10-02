import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Laerning from "./components/Learning"
import About from "./components/About"
import Services from "./components/Services"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return(
  <BrowserRouter>
    <body>
      <Header />
      <Hero />
      <Laerning />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      
      <Footer />
    </body>
  </BrowserRouter>
    
  );
}
export default App;
