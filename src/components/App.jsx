import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//Components
import Navbar from "./Navbar";

import FrontPage from "./front-page/FrontPage";

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
import ScrollToTop from "./ScrollToTop";

const App = () => {
  // Dark mode state initializes from local storage item to save preference
  const [darkMode, setDarkMode] = useState(
    JSON.parse(window.localStorage.getItem("dark-mode"))
  );
  // Apply Dark Mode preference
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <Router>
      {/* fixed position navbar at top of site */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* moves window to the top of page when location changes */}
      <ScrollToTop />
      <Switch>
        {/* Front page / landing page */}
        <Route exact path="/" component={FrontPage} />
        {/* Hero related Guides */}
        <Route exact path="/(heroes|awakenings)/" component={HeroMenu} />
        <Route path="/heroes/:hero" component={HeroGuide} />
        <Route path="/awakenings/:hero" component={AwakeningGuide} />
        {/* redirects for 2 guides to put user on the proper page */}
        <Route
          path="/guides/heroes"
          component={() => <Redirect from="/guides/heroes" to="/heroes" />}
        />
        <Route
          path="/guides/awakenings"
          component={() => (
            <Redirect from="/guides/awakenings" to="/awakenings" />
          )}
        />
        {/* Soulstone/Forge/Runestone guides */}
        <Route path="/guides/soulstones" component={SoulstoneGuide} />
        <Route path="/guides/forge" component={ForgeGuide} />
        <Route path="/guides/runestones" component={RunestoneGuide} />
        {/* Heroes Village Guides */}
        <Route path="/guides/furnace" component={FurnaceGuide} />
        <Route path="/guides/academy" component={AcademyGuide} />
        <Route path="/guides/workshop" component={WorkshopGuide} />
        {/* Credits Page */}
        <Route path="/credits" component={Credits} />
      </Switch>
      {/* site footer at bottom of most pages and in sidebar on desktop views with sidebar */}
      <Footer />
    </Router>
  );
};

export default App;
