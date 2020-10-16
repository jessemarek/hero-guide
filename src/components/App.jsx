import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

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
      {/* Front page / landing page */}
      <Route exact path="/" component={FrontPage} />
      {/* Hero related Guides */}
      <Route exact path="/(heroes|awakenings)/" component={HeroMenu} />
      <Route exact path="/heroes/:hero" component={HeroGuide} />
      <Route exact path="/awakenings/:hero" component={AwakeningGuide} />
      {/* redirects for 2 guides to put user on the proper page */}
      <Route
        exact
        path="/guides/heroes"
        component={() => <Redirect to="/heroes" />}
      />
      <Route
        exact
        path="/guides/awakenings"
        component={() => <Redirect to="/awakenings" />}
      />
      {/* Other guides */}
      <Route exact path="/guides/soulstones" component={SoulstoneGuide} />
      <Route exact path="/guides/forge" component={ForgeGuide} />
      <Route exact path="/guides/runestones" component={RunestoneGuide} />
      {/* Village Guides */}
      <Route exact path="/guides/furnace" component={FurnaceGuide} />
      <Route exact path="/guides/academy" component={AcademyGuide} />
      <Route exact path="/guides/workshop" component={WorkshopGuide} />
      {/* Credits Page */}
      <Route exact path="/credits" component={Credits} />
      {/* site footer at bottom of most pages and in sidebar on desktop views with sidebar */}
      <Footer />
    </Router>
  );
};

export default App;
