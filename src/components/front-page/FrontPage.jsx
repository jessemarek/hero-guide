import React from "react";

const FrontPage = () => {
  return (
    <>
      <header className="logo">
        <img src="/assets/images/sh-logo.png" alt="Soul Hunters logo image" />
      </header>

      <div className="front-page wrapper">
        <section className="new-heroes">
          <h4>New Heroes</h4>

          <ul>
            <li className="hero-card">
              <a href="guides/heroes/mog.html#hero-info">
                <img
                  src="/assets/images/hero-cards/mog.jpg"
                  alt="Hero artwork card for Mog. Link to this hero's guide"
                />
              </a>
              <p className="card-title">Mog</p>
            </li>

            <li className="hero-card">
              <a href="guides/heroes/morfir.html#hero-info">
                <img
                  src="/assets/images/hero-cards/morfir.jpg"
                  alt="Hero artwork card for Morfir. Link to this hero's guide"
                />
              </a>
              <p className="card-title">Morfir</p>
            </li>

            <li className="hero-card">
              <a href="guides/heroes/kasar.html#hero-info">
                <img
                  src="/assets/images/hero-cards/kasar.jpg"
                  alt="Hero artwork card for Kasar. Link to this hero's guide"
                />
              </a>
              <p className="card-title">Kasar</p>
            </li>
          </ul>

          <div className="date-updated">
            <p>*Updated: 22 October 2017</p>
          </div>
        </section>

        <section className="new-awakenings">
          <h4>New Awakenings</h4>

          <ul>
            <li className="hero-card">
              <a href="#">
                <div className="spoiler-card spoiler-off">
                  <div className="card-back">
                    <img
                      src="/assets/images/awakenings-card.png"
                      alt="Awakening Artwork Spoiler Card"
                    />
                    <p className="card-title cardback-title">Alice</p>
                  </div>

                  <div className="card-face">
                    <img
                      src="/assets/images/hero-cards-aw/alice-aw.jpg"
                      alt="Hero awakening card for Alice. Link to this hero's guide"
                    />
                    <p className="card-title">Alice</p>
                  </div>
                </div>
              </a>
            </li>

            <li className="hero-card">
              <a href="#">
                <div className="spoiler-card spoiler-off">
                  <div className="card-back">
                    <img
                      src="/assets/images/awakenings-card.png"
                      alt="Awakening Artwork Spoiler Card"
                    />
                    <p className="card-title cardback-title">Morfir</p>
                  </div>

                  <div className="card-face">
                    <img
                      src="/assets/images/hero-cards-aw/morfir-aw.jpg"
                      alt="Hero awakening card for Morfir. Link to this hero's guide"
                    />
                    <p className="card-title">Morfir</p>
                  </div>
                </div>
              </a>
            </li>

            <li className="hero-card">
              <a href="#">
                <div className="spoiler-card spoiler-off">
                  <div className="card-back">
                    <img
                      src="/assets/images/awakenings-card.png"
                      alt="Awakening Artwork Spoiler Card"
                    />
                    <p className="card-title cardback-title">Kasar</p>
                  </div>

                  <div className="card-face">
                    <img
                      src="/assets/images/hero-cards-aw/kasar-aw.jpg"
                      alt="Hero awakening card for Kasar. Link to this hero's guide"
                    />
                    <p className="card-title">Kasar</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>

          <div className="date-updated">
            <p>New Feature Coming Soon...</p>
          </div>
        </section>

        <section className="menu-box">
          <h4>Guides</h4>

          <ul>
            <li className="hero-card">
              <a href="guides/heroes.html">
                <img
                  src="/assets/images/heroes-card.png"
                  alt="Artwork card and link for Heroes Menu."
                />
              </a>
              <p className="card-title cardback-title">Heroes</p>
            </li>

            <li className="hero-card">
              <a href="guides/awakenings.html">
                <img
                  src="/assets/images/awakenings-card.png"
                  alt="Artwork card and link for Awakenings Menu."
                />
              </a>
              <p className="card-title cardback-title">Awakenings</p>
            </li>

            <li className="hero-card">
              <a href="guides/skins.html">
                <img
                  src="/assets/images/goblin-card.png"
                  alt="Artwork card and link for Skins Menu."
                />
              </a>
              <p className="card-title cardback-title">Skins</p>
            </li>

            <li className="hero-card">
              <a href="guides/soulstones.html">
                <img
                  src="/assets/images/summon-card.png"
                  alt="Artwork card and link for Soulstones Guide."
                />
              </a>
              <p className="card-title cardback-title">Soulstones</p>
            </li>

            <li className="hero-card">
              <a href="guides/forge.html">
                <img
                  src="/assets/images/forge-card.png"
                  alt="Artwork card and link for Forge Guide."
                />
              </a>
              <p className="card-title cardback-title">Forge</p>
            </li>

            <li className="hero-card">
              <a href="guides/runestones.html">
                <img
                  src="/assets/images/runestone-card.png"
                  alt="Artwork card and link for Runestones Guide."
                />
              </a>
              <p className="card-title card-title cardback-title">Runestones</p>
            </li>

            <li className="hero-card">
              <a href="guides/furnace.html">
                <img
                  src="/assets/images/furnace-card.png"
                  alt="Artwork card and link for Furnace Guide."
                />
              </a>
              <p className="card-title cardback-title">Furnace</p>
            </li>

            <li className="hero-card">
              <a href="guides/academy.html">
                <img
                  src="/assets/images/academy-card.png"
                  alt="Artwork card and link for Academy Guide."
                />
              </a>
              <p className="card-title cardback-title">Academy</p>
            </li>

            <li className="hero-card">
              <a href="guides/workshop.html">
                <img
                  src="/assets/images/workshop-card.png"
                  alt="Artwork card and link for Workshop Guide."
                />
              </a>
              <p className="card-title cardback-title">Workshop</p>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default FrontPage;
