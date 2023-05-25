import Navbar from "./components/Navbar"
import FrontPage from "./components/FrontPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className=" bg-slate-900">
      <Navbar />
      <FrontPage />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
