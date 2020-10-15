import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Navbar from "./Navbar";

import LoadingSpinner from "./LoadingSpinner";

import HeroMenu from "./hero-menus/HeroMenu";
import HeroGuide from "./hero-guide/HeroGuide";
import AwakeningGuide from "./awakenings/AwakeningGuide";

import SoulstoneGuide from "./guides/SoulstoneGuide";
import ForgeGuide from "./guides/ForgeGuide";
import RunestoneGuide from "./guides/RunestoneGuide";

import FurnaceGuide from "./guides/FurnaceGuide";
import AcademyGuide from "./guides/AcademyGuide";
import WorkshopGuide from "./guides/WorkshopGuide";

import Credits from "./Credits";
import Footer from "./Footer";

const App = () => {
  // Look for Dark Mode preference in local storage and apply styles
  useEffect(() => {
    const darkMode = JSON.parse(window.localStorage.getItem("dark-mode"));

    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={LoadingSpinner} />
      <Route exact path="/(heroes|awakenings)/" component={HeroMenu} />
      <Route exact path="/heroes/:hero" component={HeroGuide} />
      <Route exact path="/awakenings/:hero" component={AwakeningGuide} />

      <Route exact path="/guides/soulstones" component={SoulstoneGuide} />
      <Route exact path="/guides/forge" component={ForgeGuide} />
      <Route exact path="/guides/runestones" component={RunestoneGuide} />

      <Route exact path="/guides/furnace" component={FurnaceGuide} />
      <Route exact path="/guides/academy" component={AcademyGuide} />
      <Route exact path="/guides/workshop" component={WorkshopGuide} />

      <Route exact path="/credits" component={Credits} />
      <Footer />
    </Router>
  );
};

export default App;
