import "./components/Base.css";
import Nav from "./components/navigation/Nav.jsx";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/navigation/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <hr className="h-px bg-gray-500 border-0 dark:bg-gray-400" />
      <About />
      <hr className="h-px bg-gray-500 border-0 dark:bg-gray-400" />
      <Skills />
      <hr className="h-px mt-64 bg-gray-500 border-0 dark:bg-gray-400" />
      <Projects />
      <hr className="h-px bg-gray-500 border-0 dark:bg-gray-400" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
