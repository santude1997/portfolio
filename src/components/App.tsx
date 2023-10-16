import "../styles/App.css";
import About from "./About/About";
import Cereer from "./Cereer/Cereer";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Cereer />
      <Education />
      <Contact />
    </>
  );
}

export default App;
