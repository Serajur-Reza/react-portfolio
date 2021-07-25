import Aos from "aos";
import "aos/dist/aos.css";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from './Commons/Navbar';
import About from "./Components/About";
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';



function App() {

  React.useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
    
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/about">
          <div data-aos="fade-in">
            <About />
          </div>

          <div data-aos="fade-in">
            <Skills />
          </div>
          <div data-aos="fade-in">
            <Experience />
          </div>
        </Route>
        <Route exact path="/portfolio">
          <div data-aos="fade-in">
            <Portfolio />
          </div>
        </Route>
        <Route exact path="/contact">
          <div data-aos="fade-in">
            <Contact />
          </div>
        </Route>
        <Route exact path="/">
        <div data-aos="fade-in">
          <Home />
        </div>
        </Route>
        {/* <Route path="/about" component={(About, Skills)} /> */}
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
