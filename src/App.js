// import logo from './logo.svg';
// import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Socials from "./Components/Socials";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Exp from "./Components/Exp";
import { Contact } from "./Components/Contact";
function App() {
  return (
    <div >
     <Navbar/>
     <Home/>
     <Socials/>
     <About/>
     <Exp/>
     <Projects/>
     <Contact/>
    </div>
  );
}

export default App;
