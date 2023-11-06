import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Wido from "./components/Wido";
import Proficiency from "./components/Proficiency";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

import { Toaster } from "react-hot-toast";
import Stars from "./components/canvas/Stars";
import { experiences } from "./constants";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-[0] w-full bg-slate-950">
      <Stars/>
        <Navbar />
        <About />
        <div className="relative z-[-1] bg-slate-950">
          <Wido />
          {
            experiences.length &&   <Experience />
          }
       
        </div>
        <Skills />
        <div className="relative z-0 bg-slate-950">
          <Projects />
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
        <Proficiency />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
