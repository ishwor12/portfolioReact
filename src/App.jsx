import { Hero } from "./Sections/Hero";
import { About } from "./Sections/About";
import { Navbar } from "./Layout/Navbar";
import { Contact } from "./Sections/Contact";
import { Experience } from "./Sections/Experience";
import { Projects } from "./Sections/Projects";
import { Testimonial } from "./Sections/Testimonial";
import { Button } from "./Components/Button";
function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <min>
        <Hero />
        <About />
        <Contact />
        <Experience />
        <Projects />
        <Testimonial />
      </min>
    </div>
  );
}

export default App;
