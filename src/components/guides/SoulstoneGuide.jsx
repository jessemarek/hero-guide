import React, { useEffect } from 'react'

const SoulstoneGuide = () => {

    //Change Title
    useEffect(() => {
        document.title = 'SH Hero Guide -- Soulstones'

        return () => {
            document.title = 'Soul Hunters Hero Guide'
        }
    }, [])

    return (
        <div className="soulstone-guide wrapper">

            <section id="overview" className="guide-section">

                <div className="section-header">
                    <h2>Soulstone Locations</h2>
                </div>

                <div className="intro-text">

                    <ul id="hero-list" className="hero-menus">
                        <li className="menu-icon">
                            <a href="#campaign"><img src="/assets/images/icons/shops/campaign.png" alt="" width="86" height="86" /></a><p>Campaign</p>
                        </li>
                        <li className="menu-icon">
                            <a href="#arena-shop"><img src="/assets/images/icons/shops/arena.png" alt="" width="86" height="86" /></a><p>Arena Armory</p>
                        </li>
                        <li className="menu-icon">
                            <a href="#epic-shop"><img src="/assets/images/icons/shops/epic-arena.png" alt="" width="86" height="86" /></a><p>Champion's Corner</p>
                        </li>
                        <li className="menu-icon">
                            <a href="#cof-shop"><img src="/assets/images/icons/shops/crucible-of-fire.png" alt="" width="86" height="86" /></a><p>Crucible Supply Wagon</p>
                        </li>
                        <li className="menu-icon">
                            <a href="#guild-shop"><img src="/assets/images/icons/shops/guild-hall.png" alt="" width="86" height="86" /></a><p>Guild Emporium</p>
                        </li>
                        <li className="menu-icon">
                            <a href="#hol-shop"><img src="/assets/images/icons/shops/hall-of-legends.png" alt="" width="86" height="86" /></a><p>Legendary Shop</p>
                        </li>
                        <li className="menu-icon">
                            <a href="#gold-chest"><img src="/assets/images/icons/shops/summon-circle.png" alt="" width="86" height="86" /></a><p>Gold &amp; Diamond Chest</p>
                        </li>
                        <li className="menu-icon">
                            <a href="#not-released"><img src="/assets/images/icons/shops/not-released.png" alt="" width="86" height="86" /></a><p>Not Released</p>
                        </li>
                    </ul>
                </div>

            </section>

            <section id="campaign" className="guide-section">

                <div className="section-header">
                    <h2>Campaign</h2>
                </div>

                <div className="intro-text">
                    <p>The following Heroes' <img src="/assets/images/icons/hero-info/ss.png" alt="" width="20" height="20" /> are able to be farmed from various Campaign Stages</p>

                    <div>
                        <ul id="hero-list" className="hero-menus">
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/alana.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/arachna.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/boomer.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/drago.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/elric.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/ember.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/flora.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/gale.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/leah.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/leon.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/lucius.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/mortus.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/musashi.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/osiris.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/selene.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/sumiko.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/torsen.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/vincent.png" alt="" /></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="arena-shop" className="guide-section">

                <div className="section-header">
                    <h2>Arena Armory</h2>
                </div>

                <div className="intro-text">
                    <p>The following Heroes' <img src="/assets/images/icons/hero-info/ss.png" alt="" width="20" height="20" /> are available for purchase in the Arena Armory. They can be purchased in bundles of 5 <img src="/assets/images/icons/hero-info/ss.png" alt="" width="20" height="20" /> for 500 <img src="/assets/images/icons/shops/gladiator-medal.png" alt="" width="20" height="20" /></p>

                    <div>
                        <ul id="hero-list" className="hero-menus">
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/enrique.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/esabel.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/ethera.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/goblin-squad.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/hanzo.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/jasper.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/namtar.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/nilya.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/valan.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/vespix.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/xanos.png" alt="" /></li>
                        </ul>
                    </div>
                </div>

            </section>

            <section id="epic-shop" className="guide-section">

                <div className="section-header">
                    <h2>Champion's Corner</h2>
                </div>

                <div className="intro-text">
                    <p>The following Heroes' <img src="/assets/images/icons/hero-info/ss.png" alt="" width="20" height="20" /> are available for purchase in the Champion's Corner. They can be purchased in bundles of 5 <img src="/assets/images/icons/hero-info/ss.png" alt="" width="20" height="20" /> for 500 <img src="/assets/images/icons/shops/champion-coin.png" alt="" width="20" height="20" /></p>

                    <div>
                        <ul id="hero-list" className="hero-menus">
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/baltor.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/daphne.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/dr-zeno.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/garrick.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/lumos.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/magdor.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/riley.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/sagar.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/serafine.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/solomon.png" alt="" /></li>
                        </ul>
                    </div>
                </div>

            </section>

            <section id="cof-shop" className="guide-section">

                <div className="section-header">
                    <h2>Crucible Supply Wagon</h2>
                </div>

                <div className="intro-text">
                    <p>The following Heroes' <img src="/assets/images/icons/hero-info/ss.png" alt="" width="20" height="20" /> are available for purchase in the Supply Wagon. They can be purchased in bundles of 5 <img src="/assets/images/icons/hero-info/ss.png" alt="" width="20" height="20" /> for 500 <img src="/assets/images/icons/shops/dragon-scale.png" alt="" width="20" height="20" /></p>

                    <div>
                        <ul id="hero-list" className="hero-menus">
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/ariel.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/dokras.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/kong.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/ling-ling.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/mariana.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/octo.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/radulf.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/shirley.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/tashi.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/taurus.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/tholin.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/ulfang.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/zem.png" alt="" /></li>
                        </ul>
                    </div>
                </div>

            </section>

            <section id="guild-shop" className="guide-section">

                <div className="section-header">
                    <h2>Guild Emporium</h2>
                </div>

                <div className="intro-text">
                    <p>The following Heroes' <img src="/assets/images/icons/hero-info/ss.png" alt="" width="20" height="20" /> are available for purchase in the Guild Emporium. They can be purchased in bundles of 5 <img src="/assets/images/icons/hero-info/ss.png" alt="" width="20" height="20" /> for 500 <img src="/assets/images/icons/shops/brotherhood-coin.png" alt="" width="20" height="20" /></p>

                    <div>
                        <ul id="hero-list" className="hero-menus">
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/alastair.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/alice.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/avior.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/bloodspear.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/dina.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/driller.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/firehawk.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/jasmine.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/killjoy.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/lars.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/mirielle.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/slim.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/wraxius.png" alt="" /></li>
                        </ul>
                    </div>
                </div>

            </section>

            <section id="hol-shop" className="guide-section">

                <div className="section-header">
                    <h2>Legendary Shop</h2>
                </div>

                <div className="intro-text">
                    <p>The following Heroes' <img src="/assets/images/icons/hero-info/ss.png" alt="" width="20" height="20" /> are available for purchase in the Legendary Shop. They can be purchased in bundles of 5 <img src="/assets/images/icons/hero-info/ss.png" alt="" width="20" height="20" /> for 400 <img src="/assets/images/icons/shops/leaf-of-valor.png" alt="" width="20" height="20" /></p>

                    <div>
                        <ul id="hero-list" className="hero-menus">
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/arcturus.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/boreas.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/cara.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/crusher.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/cyana.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/gizmo.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/gus.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/havoc.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/konrad.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/li-twins.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/malrath.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/nightshade.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/tanya.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/tareth.png" alt="" /></li>
                        </ul>
                    </div>
                </div>

            </section>

            <section id="gold-chest" className="guide-section">

                <div className="section-header">
                    <h2>Gold Chest</h2>
                </div>

                <div className="intro-text">
                    <p>The following Heroes' Cards and <img src="/assets/images/icons/hero-info/ss.png" alt="" width="20" height="20" /> are available to drop when you open a <img src="/assets/images/icons/shops/gold-chest.png" alt="" width="30" height="30" /></p>

                    <div>
                        <ul id="hero-list" className="hero-menus">
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/arachna.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/ariel.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/bloodspear.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/boomer.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/boreas.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/cara.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/cyana.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/dokras.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/drago.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/dr-zeno.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/elric.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/ember.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/enrique.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/esabel.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/flora.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/gale.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/garrick.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/goblin-squad.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/gus.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/jasper.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/killjoy.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/kong.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/leon.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/lucius.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/lumos.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/magdor.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/mariana.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/mortus.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/namtar.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/octo.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/osiris.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/radulf.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/riley.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/sumiko.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/tanya.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/tashi.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/taurus.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/ulfang.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/valan.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/vincent.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/zem.png" alt="" /></li>
                        </ul>
                    </div>

                </div>

            </section>

            <section id="diamond-chest" className="guide-section">

                <div className="section-header">
                    <h2>Diamond Chest</h2>
                </div>

                <div className="intro-text">
                    <p>The following Heroes' Cards and <img src="/assets/images/icons/hero-info/ss.png" alt="" width="20" height="20" /> are available to drop when you open a <img src="/assets/images/icons/shops/diamond-chest.png" alt="" width="30" height="30" />. <b>Note:</b> Heroes that are in <img src="/assets/images/icons/shops/gold-chest.png" alt="" width="30" height="30" /> can also drop</p>

                    <div>
                        <ul id="hero-list" className="hero-menus">
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/alastair.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/alice.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/aqua.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/arcturus.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/avior.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/baltor.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/chrona.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/crusher.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/daphne.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/desmond.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/dina.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/driller.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/ethera.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/firehawk.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/gizmo.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/goram.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/hanzo.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/havoc.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/jasmine.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/kaneq.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/konrad.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/lars.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/leah.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/ling-ling.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/li-twins.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/malrath.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/mirielle.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/musashi.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/nightshade.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/nilya.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/orkon.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/sagar.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/selene.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/serafine.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/shirley.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/slim.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/solomon.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/sylphi.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/tareth.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/tholin.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/urestag.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/vespix.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/wraxius.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/xanos.png" alt="" /></li>
                        </ul>
                    </div>

                </div>

            </section>

            <section id="not-released" className="guide-section">

                <div className="section-header">
                    <h2>Not Released</h2>
                </div>

                <div className="intro-text">
                    <p>The following Heroes' <img src="/assets/images/icons/hero-info/ss.png" alt="" width="20" height="20" /> are not available except through Purchase Bonuses and when they are available in the Conjuring Stone.</p>

                    <div>
                        <ul id="hero-list" className="hero-menus">
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/sylphi.png" alt="" /><p className="tiny-text">First Appeared:<br />25 Dec 2016</p></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/goram.png" alt="" /><p className="tiny-text">First Appeared:<br />22 Jan 2017</p></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/chrona.png" alt="" /><p className="tiny-text">First Appeared:<br />14 Feb 2017</p></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/desmond.png" alt="" /><p className="tiny-text">First Appeared:<br />19 Feb 2017</p></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/orkon.png" alt="" /><p className="tiny-text">First Appeared:<br />19 Mar 2017</p></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/dalton.png" alt="" /><p className="tiny-text">First Appeared:<br />18 Apr 2017</p></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/tut.png" alt="" /><p className="tiny-text">First Appeared:<br />23 Apr 2017</p></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/vulko.png" alt="" /><p className="tiny-text">First Appeared:<br />14 May 2017</p></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/tsuki.png" alt="" /><p className="tiny-text">First Appeared:<br />25 May 2017</p></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/embrael.png" alt="" /><p className="tiny-text">First Appeared:<br />18 Jun 2017</p></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/sarya.png" alt="" /><p className="tiny-text">First Appeared:<br />26 Jun 2017</p></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/magnus.png" alt="" /><p className="tiny-text">First Appeared:<br />16 Jul 2017</p></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/hurok.png" alt="" /><p className="tiny-text">First Appeared:<br />23 Jul 2017</p></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/petros.png" alt="" /><p className="tiny-text">First Appeared:<br />20 Aug 2017</p></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/adeline.png" alt="" /><p className="tiny-text">First Appeared:<br />29 Aug 2017</p></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/volt.png" alt="" /><p className="tiny-text">First Appeared:<br />2 Sep 2017</p></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/mazir.png" alt="" /><p className="tiny-text">First Appeared:<br />17 Sep 2017</p></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/salus.png" alt="" /><p className="tiny-text">First Appeared:<br />26 Sep 2017</p></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/mog.png" alt="" /><p className="tiny-text">First Appeared:<br />2 Oct 2017</p></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/morfir.png" alt="" /><p className="tiny-text">First Appeared:<br />17 Oct 2017</p></li>

                        </ul>
                    </div>

                </div>

            </section>

            <section id="purchase-only" className="guide-section">

                <div className="section-header">
                    <h2>Purchase Only</h2>
                </div>

                <div className="intro-text">
                    <p>The following Heroes' <img src="/assets/images/icons/hero-info/ss.png" alt="" width="20" height="20" /> are only available by direct purchase in the game</p>

                    <div>
                        <ul id="hero-list" className="hero-menus">
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/ezio.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/prince-of-persia.png" alt="" /></li>
                            <li className="credit-icon"><img src="/assets/images/icons/portraits/rayman.png" alt="" /></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SoulstoneGuide