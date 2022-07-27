import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
