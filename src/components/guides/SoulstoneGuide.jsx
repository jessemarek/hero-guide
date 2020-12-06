import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { sortByProp } from "../../utils";
import LoadingSpinner from "../LoadingSpinner";

const SoulstoneGuide = () => {
  const [heroList, setHeroList] = useState(null);
  //Change Title
  useEffect(() => {
    document.title = "SH Hero Guide -- Soulstones";

    return () => {
      document.title = "Soul Hunters Hero Guide";
    };
  }, []);

  //Load Hero data from menu
  useEffect(() => {
    axiosWithAuth()
      .get("/api/heroes")
      .then((res) => {
        res.data
          //Alphabetize the Hero List by name
          .sort(sortByProp("name"));
        setHeroList(res.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <div className="soulstone-guide wrapper">
      <section id="overview" className="guide-section">
        <div className="section-header">
          <h2>Soulstone Locations</h2>
        </div>

        <div className="intro-text">
          <ul id="hero-list" className="hero-menus">
            <li className="menu-icon">
              <a href="#campaign">
                <img
                  src="/assets/images/icons/shops/campaign.png"
                  alt=""
                  width="86"
                  height="86"
                />
              </a>
              <p>Campaign</p>
            </li>
            <li className="menu-icon">
              <a href="#arena-shop">
                <img
                  src="/assets/images/icons/shops/arena.png"
                  alt=""
                  width="86"
                  height="86"
                />
              </a>
              <p>Arena Armory</p>
            </li>
            <li className="menu-icon">
              <a href="#epic-shop">
                <img
                  src="/assets/images/icons/shops/epic-arena.png"
                  alt=""
                  width="86"
                  height="86"
                />
              </a>
              <p>Champion's Corner</p>
            </li>
            <li className="menu-icon">
              <a href="#cof-shop">
                <img
                  src="/assets/images/icons/shops/crucible-of-fire.png"
                  alt=""
                  width="86"
                  height="86"
                />
              </a>
              <p>Crucible Supply Wagon</p>
            </li>
            <li className="menu-icon">
              <a href="#guild-shop">
                <img
                  src="/assets/images/icons/shops/guild-hall.png"
                  alt=""
                  width="86"
                  height="86"
                />
              </a>
              <p>Guild Emporium</p>
            </li>
            <li className="menu-icon">
              <a href="#hol-shop">
                <img
                  src="/assets/images/icons/shops/hall-of-legends.png"
                  alt=""
                  width="86"
                  height="86"
                />
              </a>
              <p>Legendary Shop</p>
            </li>
            <li className="menu-icon">
              <a href="#gold-chest">
                <img
                  src="/assets/images/icons/shops/summon-circle.png"
                  alt=""
                  width="86"
                  height="86"
                />
              </a>
              <p>Gold &amp; Diamond Chest</p>
            </li>
            <li className="menu-icon">
              <a href="#not-released">
                <img
                  src="/assets/images/icons/shops/not-released.png"
                  alt=""
                  width="86"
                  height="86"
                />
              </a>
              <p>Not Released</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="campaign" className="guide-section">
        <div className="section-header">
          <h2>Campaign</h2>
        </div>

        <div className="intro-text">
          <p>
            The following Heroes'{" "}
            <span className="soulstone-icon">
              <img
                src="/assets/images/icons/hero-info/ss.png"
                alt=""
                width="20"
              />
            </span>{" "}
            are able to be farmed from various Campaign Stages
          </p>
          <br />
          <div>
            <ul id="hero-list" className="hero-menus">
              {heroList ? (
                heroList
                  .filter((hero) => hero.available_in === "campaign")
                  .map((hero, idx) => (
                    <li key={idx} className="credit-icon">
                      <img
                        src={`/assets/images/icons/portraits/${hero.name}.png`}
                        alt=""
                      />
                    </li>
                  ))
              ) : (
                <LoadingSpinner />
              )}
            </ul>
          </div>
        </div>
      </section>

      <section id="arena-shop" className="guide-section">
        <div className="section-header">
          <h2>Arena Armory</h2>
        </div>

        <div className="intro-text">
          <p>
            The following Heroes'{" "}
            <span className="soulstone-icon">
              <img
                src="/assets/images/icons/hero-info/ss.png"
                alt=""
                width="20"
              />
            </span>{" "}
            are available for purchase in the Arena Armory. They can be
            purchased in bundles of 5{" "}
            <span className="soulstone-icon">
              <img
                src="/assets/images/icons/hero-info/ss.png"
                alt=""
                width="20"
              />
            </span>{" "}
            for 500{" "}
            <span className="shop-coin-icon">
              <img
                src="/assets/images/icons/shops/gladiator-medal.png"
                alt=""
                width="20"
              />
            </span>
          </p>
          <br />
          <div>
            <ul id="hero-list" className="hero-menus">
              {heroList ? (
                heroList
                  .filter((hero) => hero.available_in === "arena")
                  .map((hero, idx) => (
                    <li key={idx} className="credit-icon">
                      <img
                        src={`/assets/images/icons/portraits/${hero.name}.png`}
                        alt=""
                      />
                    </li>
                  ))
              ) : (
                <LoadingSpinner />
              )}
            </ul>
          </div>
        </div>
      </section>

      <section id="epic-shop" className="guide-section">
        <div className="section-header">
          <h2>Champion's Corner</h2>
        </div>

        <div className="intro-text">
          <p>
            The following Heroes'{" "}
            <span className="soulstone-icon">
              <img
                src="/assets/images/icons/hero-info/ss.png"
                alt=""
                width="20"
              />
            </span>{" "}
            are available for purchase in the Champion's Corner. They can be
            purchased in bundles of 5{" "}
            <span className="soulstone-icon">
              <img
                src="/assets/images/icons/hero-info/ss.png"
                alt=""
                width="20"
              />
            </span>{" "}
            for 500{" "}
            <span className="shop-coin-icon">
              <img
                src="/assets/images/icons/shops/champion-coin.png"
                alt=""
                width="20"
              />
            </span>
          </p>
          <br />
          <div>
            <ul id="hero-list" className="hero-menus">
              {heroList ? (
                heroList
                  .filter((hero) => hero.available_in === "epic-arena")
                  .map((hero, idx) => (
                    <li key={idx} className="credit-icon">
                      <img
                        src={`/assets/images/icons/portraits/${hero.name}.png`}
                        alt=""
                      />
                    </li>
                  ))
              ) : (
                <LoadingSpinner />
              )}
            </ul>
          </div>
        </div>
      </section>

      <section id="cof-shop" className="guide-section">
        <div className="section-header">
          <h2>Crucible Supply Wagon</h2>
        </div>

        <div className="intro-text">
          <p>
            The following Heroes'{" "}
            <span className="soulstone-icon">
              <img
                src="/assets/images/icons/hero-info/ss.png"
                alt=""
                width="20"
              />
            </span>{" "}
            are available for purchase in the Supply Wagon. They can be
            purchased in bundles of 5{" "}
            <span className="soulstone-icon">
              <img
                src="/assets/images/icons/hero-info/ss.png"
                alt=""
                width="20"
              />
            </span>{" "}
            for 500{" "}
            <span className="shop-coin-icon">
              <img
                src="/assets/images/icons/shops/dragon-scale.png"
                alt=""
                width="20"
              />
            </span>
          </p>
          <br />
          <div>
            <ul id="hero-list" className="hero-menus">
              {heroList ? (
                heroList
                  .filter((hero) => hero.available_in === "crucible-of-fire")
                  .map((hero, idx) => (
                    <li key={idx} className="credit-icon">
                      <img
                        src={`/assets/images/icons/portraits/${hero.name}.png`}
                        alt=""
                      />
                    </li>
                  ))
              ) : (
                <LoadingSpinner />
              )}
            </ul>
          </div>
        </div>
      </section>

      <section id="guild-shop" className="guide-section">
        <div className="section-header">
          <h2>Guild Emporium</h2>
        </div>

        <div className="intro-text">
          <p>
            The following Heroes'{" "}
            <span className="soulstone-icon">
              <img
                src="/assets/images/icons/hero-info/ss.png"
                alt=""
                width="20"
              />
            </span>{" "}
            are available for purchase in the Guild Emporium. They can be
            purchased in bundles of 5{" "}
            <span className="soulstone-icon">
              <img
                src="/assets/images/icons/hero-info/ss.png"
                alt=""
                width="20"
              />
            </span>{" "}
            for 500{" "}
            <span className="shop-coin-icon">
              <img
                src="/assets/images/icons/shops/brotherhood-coin.png"
                alt=""
                width="20"
              />
            </span>
          </p>
          <br />
          <div>
            <ul id="hero-list" className="hero-menus">
              {heroList ? (
                heroList
                  .filter((hero) => hero.available_in === "guild-hall")
                  .map((hero, idx) => (
                    <li key={idx} className="credit-icon">
                      <img
                        src={`/assets/images/icons/portraits/${hero.name}.png`}
                        alt=""
                      />
                    </li>
                  ))
              ) : (
                <LoadingSpinner />
              )}
            </ul>
          </div>
        </div>
      </section>

      <section id="hol-shop" className="guide-section">
        <div className="section-header">
          <h2>Legendary Shop</h2>
        </div>

        <div className="intro-text">
          <p>
            The following Heroes'{" "}
            <span className="soulstone-icon">
              <img
                src="/assets/images/icons/hero-info/ss.png"
                alt=""
                width="20"
              />
            </span>{" "}
            are available for purchase in the Legendary Shop. They can be
            purchased in bundles of 5{" "}
            <span className="soulstone-icon">
              <img
                src="/assets/images/icons/hero-info/ss.png"
                alt=""
                width="20"
              />
            </span>{" "}
            for 400{" "}
            <span className="shop-coin-icon">
              <img
                src="/assets/images/icons/shops/leaf-of-valor.png"
                alt=""
                width="20"
              />
            </span>
          </p>
          <br />
          <div>
            <ul id="hero-list" className="hero-menus">
              {heroList ? (
                heroList
                  .filter((hero) => hero.available_in === "hall-of-legends")
                  .map((hero, idx) => (
                    <li key={idx} className="credit-icon">
                      <img
                        src={`/assets/images/icons/portraits/${hero.name}.png`}
                        alt=""
                      />
                    </li>
                  ))
              ) : (
                <LoadingSpinner />
              )}
            </ul>
          </div>
        </div>
      </section>

      <section id="gold-chest" className="guide-section">
        <div className="section-header">
          <h2>Gold Chest</h2>
        </div>

        <div className="intro-text">
          <p>
            The following Heroes' Cards and{" "}
            <span className="soulstone-icon">
              <img
                src="/assets/images/icons/hero-info/ss.png"
                alt=""
                width="20"
              />
            </span>{" "}
            are available to drop when you open a{" "}
            <span className="chest-icon">
              <img
                src="/assets/images/icons/shops/gold-chest.png"
                alt=""
                width="24"
              />
            </span>
          </p>
          <br />
          <div>
            <ul id="hero-list" className="hero-menus">
              {heroList ? (
                heroList
                  .filter((hero) => hero.chest_type === "gold")
                  .map((hero, idx) => (
                    <li key={idx} className="credit-icon">
                      <img
                        src={`/assets/images/icons/portraits/${hero.name}.png`}
                        alt=""
                      />
                    </li>
                  ))
              ) : (
                <LoadingSpinner />
              )}
            </ul>
          </div>
        </div>
      </section>

      <section id="diamond-chest" className="guide-section">
        <div className="section-header">
          <h2>Diamond Chest</h2>
        </div>

        <div className="intro-text">
          <p>
            The following Heroes' Cards and{" "}
            <span className="soulstone-icon">
              <img
                src="/assets/images/icons/hero-info/ss.png"
                alt=""
                width="20"
              />
            </span>{" "}
            are available to drop when you open a{" "}
            <span className="chest-icon">
              <img
                src="/assets/images/icons/shops/diamond-chest.png"
                alt=""
                width="24"
              />
            </span>{" "}
            <b>Note:</b> Heroes that are in{" "}
            <span className="chest-icon">
              <img
                src="/assets/images/icons/shops/gold-chest.png"
                alt=""
                width="24"
              />
            </span>{" "}
            can also drop
          </p>
          <br />
          <div>
            <ul id="hero-list" className="hero-menus">
              {heroList ? (
                heroList
                  .filter((hero) => hero.chest_type === "diamond")
                  .map((hero, idx) => (
                    <li key={idx} className="credit-icon">
                      <img
                        src={`/assets/images/icons/portraits/${hero.name}.png`}
                        alt=""
                      />
                    </li>
                  ))
              ) : (
                <LoadingSpinner />
              )}
            </ul>
          </div>
        </div>
      </section>

      <section id="not-released" className="guide-section">
        <div className="section-header">
          <h2>Not Released</h2>
        </div>

        <div className="intro-text">
          <p>
            The following Heroes'{" "}
            <span className="soulstone-icon">
              <img
                src="/assets/images/icons/hero-info/ss.png"
                alt=""
                width="20"
              />
            </span>{" "}
            are not available except through Purchase Bonuses and when they are
            available in the Conjuring Stone.
          </p>
          <br />
          <div>
            <ul id="hero-list" className="hero-menus">
              {heroList ? (
                heroList
                  .filter((hero) => hero.available_in === "not-released")
                  .map((hero, idx) => (
                    <li key={idx} className="credit-icon">
                      <img
                        src={`/assets/images/icons/portraits/${hero.name}.png`}
                        alt=""
                      />
                    </li>
                  ))
              ) : (
                <LoadingSpinner />
              )}
            </ul>
          </div>
        </div>
      </section>

      <section id="purchase-only" className="guide-section">
        <div className="section-header">
          <h2>Purchase Only</h2>
        </div>

        <div className="intro-text">
          <p>
            The following Heroes'{" "}
            <span className="soulstone-icon">
              <img
                src="/assets/images/icons/hero-info/ss.png"
                alt=""
                width="20"
                height="20"
              />
            </span>{" "}
            are only available by direct purchase in the game
          </p>
          <br />
          <div>
            <ul id="hero-list" className="hero-menus">
              {heroList ? (
                heroList
                  .filter((hero) => hero.available_in === "purchase-only")
                  .map((hero, idx) => (
                    <li key={idx} className="credit-icon">
                      <img
                        src={`/assets/images/icons/portraits/${hero.name}.png`}
                        alt=""
                      />
                    </li>
                  ))
              ) : (
                <LoadingSpinner />
              )}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoulstoneGuide;
