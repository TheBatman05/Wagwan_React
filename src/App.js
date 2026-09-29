import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Laerning from "./components/Learning"
import About from "./components/About"

function App() {
  return(
    <body>
      <Header />
      {/* <Hero /> */}
      <About />
      <Laerning />
      <Footer />
    </body>
  );
}
export default App;
