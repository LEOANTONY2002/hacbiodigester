import "./App.css";
import { Helmet } from "react-helmet";
import ema2 from "./images/ema2.png";
import ach from "./images/ach.png";
import abo from "./images/abo.png";
import pas from "./images/pas.png";
import gad from "./images/gad.png";
import gim from "./images/gim.png";
import { useState } from "react";
import About from "./pages/About";
import ProSol from "./pages/ProSol";
import Impact from "./pages/Impact";
import Advantage from "./pages/Advantage";
import Achieve from "./pages/Achieve";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function App() {
  const [menu, setMenu] = useState(false);

  const openClose = (e) => {
    e.preventDefault();
    if (menu) setMenu(false);
    else setMenu(true);
  };

  return (
    <div className="App">
      <Helmet>
        <title>HAC Biodigester</title>
        <meta
          name="HAC Biodigestor"
          content=" “HAC Bio digester” proves to be a savior by not only alleviating the problems of toilet waste disposal but also generates wealth out of it"
        />
      </Helmet>

      <Router>
        <div
          className={menu ? "menu menop" : "menu"}
          onClick={() => setMenu(false)}
        >
          <Link to="/about" className="items">
            <img src={abo} alt="" />
            <p>ABOUT US</p>
          </Link>
          <Link to="/problems&solutions" className="items">
            <img src={gim} alt="" />
            <p>PROBS & SOLS</p>
          </Link>
          <Link to="/impacts" className="items">
            <img src={pas} alt="" />
            <p>IMPACTS</p>
          </Link>
          <Link to="/advantages" className="items">
            <img src={gad} alt="" />
            <p>ADVANTAGES</p>
          </Link>
          <Link to="/achievements" className="items">
            <img src={ach} alt="" />
            <p>ACHIEVEMENTS</p>
          </Link>
          <Link to="/contact" className="items">
            <img src={ema2} alt="" />
            <p>CONTACT US</p>
          </Link>
        </div>
        <div className={menu ? "close open" : "close"} onClick={openClose}>
          <div className={menu ? "l1" : ""}></div>
          <div className={menu ? "l2" : ""}></div>
          <div className={menu ? "l3" : ""}></div>
        </div>

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/achievements">
            <Achieve />
          </Route>
          <Route path="/advantages">
            <Advantage />
          </Route>
          <Route path="/impacts">
            <Impact />
          </Route>
          <Route path="/problems&solutions">
            <ProSol />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <About />
            <ProSol />
            <Impact />
            <Advantage />
            <Achieve />
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// •
