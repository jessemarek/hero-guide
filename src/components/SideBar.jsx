import React from "react";
import { Route, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { heroState } from "../state/heroState";

const SideBar = () => {
  const { guide } = useParams();
  const heroData = useRecoilValue(heroState);

  return (
    <header>
      <aside className="section-bookmarks">
        <h4>Guide Bookmarks</h4>

        <div className="bookmark-list">
          {/* Bookmarks for hero guides */}
          <Route path="/heroes/:hero">
            <a className="bookmark-link" href="#hero-info">
              Hero Info
            </a>
            <a className="bookmark-link" href="#abilities">
              Abilities
            </a>
            <a className="bookmark-link" href="#fusion-items">
              Fusions
            </a>
            <a className="bookmark-link" href="#key-items">
              Key Fusion Items
            </a>
            <a className="bookmark-link" href="#academy">
              Heroic Academy Trees
            </a>
            {heroData && heroData.awakening.awakened ? (
              <a className="bookmark-link" href="#awakening">
                Awakening Quest
              </a>
            ) : null}
          </Route>

          {/* Bookmarks for awakening guides */}
          <Route path="/awakenings/:hero">
            <a className="bookmark-link" href={`/heroes/${guide}`}>
              Full Hero Guide
            </a>
          </Route>

          {/* Bookmarks for Soulstones guide */}
          <Route path="/guides/soulstones">
            <a className="bookmark-link" href="#campaign">
              Campaign
            </a>
            <a className="bookmark-link" href="#arena-shop">
              Arena Armory
            </a>
            <a className="bookmark-link" href="#epic-shop">
              Champion's Corner
            </a>
            <a className="bookmark-link" href="#cof-shop">
              Crucible Supply Wagon
            </a>
            <a className="bookmark-link" href="#guild-shop">
              Guild Emporium
            </a>
            <a className="bookmark-link" href="#hol-shop">
              Legendary Shop
            </a>
            <a className="bookmark-link" href="#gold-chest">
              Gold Chest
            </a>
            <a className="bookmark-link" href="#diamond-chest">
              Diamond Chest
            </a>
            <a className="bookmark-link" href="#not-released">
              Not Released
            </a>
          </Route>

          {/* Bookmarks for Forge guide */}
          <Route path="/guides/forge">
            <a className="bookmark-link" href="#overview">
              Forge Overview
            </a>
            <a className="bookmark-link" href="#upgrade">
              Upgrading the Forge
            </a>
            <a className="bookmark-link" href="#use">
              Using the Forge
            </a>
          </Route>

          {/* Bookmarks for Runestones guide */}
          <Route path="/guides/runestones">
            <a className="bookmark-link" href="#overview">
              Runestone Overview
            </a>
            <a className="bookmark-link" href="#crafting">
              Crafting
            </a>
            <a className="bookmark-link" href="#equipping">
              Equipping
            </a>
            <a className="bookmark-link" href="#polishing">
              Polishing
            </a>
            <a className="bookmark-link" href="#stat-tables">
              Stat Tables
            </a>
          </Route>

          {/* Bookmarks for Furnace guide */}
          <Route path="/guides/furnace">
            <a className="bookmark-link" href="#overview">
              Furnace Overview
            </a>
            <a className="bookmark-link" href="#blue">
              Blue Items
            </a>
            <a className="bookmark-link" href="#purple">
              Purple Items
            </a>
            <a className="bookmark-link" href="#orange">
              Orange Items
            </a>
            <a className="bookmark-link" href="#red">
              Red Items
            </a>
          </Route>

          {/* Bookmarks for Academy guide */}
          <Route path="/guides/academy">
            <a className="bookmark-link" href="#overview">
              Academy Overview
            </a>
            <a className="bookmark-link" href="#cost">
              Resource Costs
            </a>
            <a className="bookmark-link" href="#physical">
              Physical Attack
            </a>
            <a className="bookmark-link" href="#magic">
              Magic Attack
            </a>
            <a className="bookmark-link" href="#defense">
              Defense
            </a>
            <a className="bookmark-link" href="#resistance">
              Resistance
            </a>
            <a className="bookmark-link" href="#health">
              Health
            </a>
            <a className="bookmark-link" href="#energy">
              Energy / Ability
            </a>
          </Route>

          {/* Bookmarks for Workshop guide */}
          <Route path="/guides/workshop">
            <a className="bookmark-link" href="#overview">
              Workshop Overview
            </a>
            <a className="bookmark-link" href="#green">
              White/Green Items
            </a>
            <a className="bookmark-link" href="#blue">
              Blue Items
            </a>
            <a className="bookmark-link" href="#purple">
              Purple Items
            </a>
            <a className="bookmark-link" href="#orange">
              Orange Items
            </a>
          </Route>
        </div>
      </aside>
    </header>
  );
};

export default SideBar;
