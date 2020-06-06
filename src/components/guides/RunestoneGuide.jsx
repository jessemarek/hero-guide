import React, { useEffect } from 'react'

const RunestoneGuide = () => {

    //Change Title
    useEffect(() => {
        document.title = 'SH Hero Guide -- Runestones'

        return () => {
            document.title = 'Soul Hunters Hero Guide'
        }
    }, [])

    return (
        <div className="runestones wrapper">

            <section id="overview" className="guide-section">

                <div className="section-header">
                    <h2>Runestone Overview</h2>
                </div>

                <div className="intro-text">
                    <p>Runestones are a further extension of the Upgrade and Customization Features that Soul Hunters offers. Once a player has completed Chapter 16 of the Campaign, Runestones can be Crafted and Polished at The Forge. Runestones add various Bonus Stats that can be customized. There are 3 types of Runestones: <span className="red-txt"><b>Sunstones</b></span>, <span className="blu-txt"><b>Moonstones</b></span> and <span className="grn-txt"><b>Starstones</b></span>. In addition, there are also 3 different Quality Levels: <span className="blu-txt"><b>Common</b></span>, <span className="prp-txt"><b>Rare</b></span> and <span className="org-txt"><b>Precious</b></span>.</p>
                    <br />
                    <p>The Crafting and Polishing process can be thought of as a combination of Forge Bonus Stats on a Signature Item and Heroic Academy Trees that can be equipped on any Awakened Hero. <img src="/assets/images/icons/forge/gold.png" width="16" height="16" /> or <img src="/assets/images/icons/forge/diamond.png" width="16" height="16" /> can be spent for a chance at changing the Runestone Bonus, but instead of static Stat Boosts, like on a Signature Item, you will be able to choose which bonuses get applied to the Awakened Hero you want.</p>
                    <br />
                    <p>The Stat Boosts are the same types offered by the Heroic Academy and Runestone Bonuses stack in addition to those applied from the Academy Talents. Imagine combining the +21% Crit Damage from the Academy with the +22% Crit Damage from a <span className="org-txt"><b>Precious</b></span> <span className="red-txt"><b>Sunstone</b></span>! Now you can turn your Glass Cannon into a Glass Thermonuclear ICBM or further bolster your Front Line Tank's Armor and Health. Upon completing all Chapter 17 Stages with 3 Stars you will receive a reward of 3 Runestones:</p>

                    <div className="runestone-triad">
                        <div className="reward-runestone">
                            <img src="/assets/images/icons/forge/precious-sunstone.png" width="60" height="60" /><br />
                            <p className="image-note"><span className="org-txt"><b>Precious</b></span> <span className="red-txt"><b>Sunstone</b></span></p>
                        </div>

                        <div className="reward-runestone">
                            <img src="/assets/images/icons/forge/rare-moonstone.png" width="60" height="60" /><br />
                            <p className="image-note"><span className="prp-txt"><b>Rare</b></span> <span className="blu-txt"><b>Moonstone</b></span></p>
                        </div>

                        <div className="reward-runestone">
                            <img src="/assets/images/icons/forge/common-starstone.png" width="60" height="60" /><br />
                            <p className="image-note"><span className="blu-txt"><b>Common</b></span> <span className="grn-txt"><b>Starstone</b></span></p>
                        </div>

                        <p className="reward-note">Runestones awarded for 21 Stars on Chapter 17</p>
                    </div>

                </div>

            </section>

            <section id="crafting" className="guide-section">

                <div className="section-header">
                    <h2>Crafting Runestones</h2>
                </div>

                <div className="intro-text">
                    <p>Crafting Runestones requires special resources called Essences. Each type of Runestone requires a different type of Essence. The Essence types are: <span className="red-txt"><b>Sunlight</b></span> <img src="/assets/images/icons/forge/sunlight-essence.png" width="16" height="16" />, <span className="blu-txt"><b>Moonbeam</b></span> <img src="/assets/images/icons/forge/moonbeam-essence.png" width="16" height="16" /> and <span className="grn-txt"><b>Stardust</b></span> <img src="/assets/images/icons/forge/stardust-essence.png" width="16" height="16" />. Runestone Essences can be farmed from certain Stages in Chapter 17 and are also available via both Free and Purchase Events. Crafting a Runestone is instantaneous with no wait time and no cooldown period. <span className="org-txt"><b>Precious</b></span> Runestones also require another resource in addition to the Runestone Essence called <b>Gaia Stones</b> <img src="/assets/images/icons/forge/gaia-stone-resource.png" width="16" height="16" />. Gaia Stones can be crafted by collecting 60 Gaia Stone Fragments. Currently the fragments are only available by completing the Daily Raid Quest. Occasionally, Gaia Stones are also available via both Free and Purchase Events. When a Runestone is crafted it will be assigned a random Stat Boost which can be modified by Polishing the Runestone.</p>
                </div>

                <div className="runestone-crafting-cost">
                    <h5>Runestone Crafting Costs</h5>
                    <table>
                        <tr>
                            <th></th>
                            <th><span className="red-txt">Sunstone</span></th>
                            <th><span className="blu-txt">Moonstone</span></th>
                            <th><span className="grn-txt">Starstone</span></th>
                        </tr>
                        <tr>
                            <td><span className="blu-txt"><b>Common</b></span></td>
                            <td>&nbsp;&nbsp;300 <img src="/assets/images/icons/forge/sunlight-essence.png" width="16" height="16" /><br />300k <img src="/assets/images/icons/forge/gold.png" width="16" height="16" /></td>
                            <td>&nbsp;&nbsp;300 <img src="/assets/images/icons/forge/moonbeam-essence.png" width="16" height="16" /><br />300k <img src="/assets/images/icons/forge/gold.png" width="16" height="16" /></td>
                            <td>&nbsp;&nbsp;300 <img src="/assets/images/icons/forge/stardust-essence.png" width="16" height="16" /><br />300k <img src="/assets/images/icons/forge/gold.png" width="16" height="16" /></td>
                        </tr>
                        <tr>
                            <td><span className="prp-txt"><b>Rare</b></span></td>
                            <td>&nbsp;&nbsp;900 <img src="/assets/images/icons/forge/sunlight-essence.png" width="16" height="16" /><br />900k <img src="/assets/images/icons/forge/gold.png" width="16" height="16" /></td>
                            <td>&nbsp;&nbsp;900 <img src="/assets/images/icons/forge/moonbeam-essence.png" width="16" height="16" /><br />900k <img src="/assets/images/icons/forge/gold.png" width="16" height="16" /></td>
                            <td>&nbsp;&nbsp;900 <img src="/assets/images/icons/forge/stardust-essence.png" width="16" height="16" /><br />900k <img src="/assets/images/icons/forge/gold.png" width="16" height="16" /></td>
                        </tr>
                        <tr>
                            <td><span className="org-txt"><b>Precious</b></span></td>
                            <td>1800 <img src="/assets/images/icons/forge/sunlight-essence.png" width="16" height="16" /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 <img src="/assets/images/icons/forge/gaia-stone-resource.png" width="16" height="16" /></td>
                            <td>1800 <img src="/assets/images/icons/forge/moonbeam-essence.png" width="16" height="16" /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 <img src="/assets/images/icons/forge/gaia-stone-resource.png" width="16" height="16" /></td>
                            <td>1800 <img src="/assets/images/icons/forge/stardust-essence.png" width="16" height="16" /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 <img src="/assets/images/icons/forge/gaia-stone-resource.png" width="16" height="16" /></td>
                        </tr>
                    </table>
                </div>

                <div className="intro-text">
                    <p>Runestones may also be dissolved into its base essence. To dissolve a Runestone it must be removed from a Hero or already in your bag. From the bag, simply tap the dissolve button and the Runestone will be permanently destroyed and you will be returned a portion of the correspoding essence. Currently, there is no way to fuse or upgrade the quality of Runestones. Due to the significantly greater Stat Boosts, it is recommended to save and craft only <span className="org-txt"><b>Precious</b></span> Runestones.</p>
                </div>

                <div className="runestone-dissolve-refund">
                    <h5>Runestone Dissolve Refund</h5>
                    <table>
                        <tr>
                            <th></th>
                            <th><span className="red-txt">Sunstone</span></th>
                            <th><span className="blu-txt">Moonstone</span></th>
                            <th><span className="grn-txt">Starstone</span></th>
                        </tr>
                        <tr>
                            <td><span className="blu-txt"><b>Common</b></span></td>
                            <td>&nbsp;210 <img src="/assets/images/icons/forge/sunlight-essence.png" width="16" height="16" /></td>
                            <td>&nbsp;210 <img src="/assets/images/icons/forge/moonbeam-essence.png" width="16" height="16" /></td>
                            <td>&nbsp;210 <img src="/assets/images/icons/forge/stardust-essence.png" width="16" height="16" /></td>
                        </tr>
                        <tr>
                            <td><span className="prp-txt"><b>Rare</b></span></td>
                            <td>&nbsp;420 <img src="/assets/images/icons/forge/sunlight-essence.png" width="16" height="16" /></td>
                            <td>&nbsp;420 <img src="/assets/images/icons/forge/moonbeam-essence.png" width="16" height="16" /></td>
                            <td>&nbsp;420 <img src="/assets/images/icons/forge/stardust-essence.png" width="16" height="16" /></td>
                        </tr>
                        <tr>
                            <td><span className="org-txt"><b>Precious</b></span></td>
                            <td>1260 <img src="/assets/images/icons/forge/sunlight-essence.png" width="16" height="16" /></td>
                            <td>1260 <img src="/assets/images/icons/forge/moonbeam-essence.png" width="16" height="16" /></td>
                            <td>1260 <img src="/assets/images/icons/forge/stardust-essence.png" width="16" height="16" /></td>
                        </tr>
                    </table>
                </div>

            </section>

            <section id="equipping" className="guide-section">

                <div className="section-header">
                    <h2>Equipping Runestones</h2>
                </div>

                <div className="intro-text">
                    <p>Runestones can only be equipped by Awakened Heroes. There is also a Star Rating requirement as well. 3 Star Heroes can equip 1 Runestone, 4 Star Heroes can equip 2 Runestones and 5 Star Heroes can equip all 3 Runestones. Each Runestone type is also assigned to the same slot and as such not only are 3 and 4 Star Heroes limited to the number of Runestones, but also the type of Runestones.</p>
                    <br />
                    <p>Runestones, unlike other equippable items, are not bound to the Hero once equipped. This means you can remove them if needed. The cost to remove is 20 <img src="/assets/images/icons/forge/diamond.png" width="16" height="16" /> per Runestone. Runestones must be removed in order to be polished. Because it takes a great amount of time to acquire the necessary components to craft Runestones, one great benefit to this feature is being able to rotate the same stone to different Heroes for Raids or Hall of Legends Bosses.</p>
                </div>

                <div className="example-image-box">

                    <div className="example-image">
                        <img src="/assets/images/icons/forge/runestone-example1.jpg" width="300" /><p className="image-note">Runestone Equip Slots</p>
                    </div>

                    <div className="example-image">
                        <img src="/assets/images/icons/forge/runestone-example2.jpg" width="300" /><p className="image-note">Example: Hero with 3 <span className="org-txt"><b>Precious</b></span> Runestones equipped</p>
                    </div>

                </div>

                <div className="runestone-equip-stars">
                    <table>
                        <tr>
                            <th><img src="/assets/images/icons/hero-info/star.png" width="16" height="16" /><img src="/assets/images/icons/hero-info/star.png" width="16" height="16" /><img src="/assets/images/icons/hero-info/star.png" width="16" height="16" /></th>
                            <th><img src="/assets/images/icons/hero-info/star.png" width="16" height="16" /><img src="/assets/images/icons/hero-info/star.png" width="16" height="16" /><img src="/assets/images/icons/hero-info/star.png" width="16" height="16" /><img src="/assets/images/icons/hero-info/star.png" width="16" height="16" /></th>
                            <th><img src="/assets/images/icons/hero-info/star.png" width="16" height="16" /><img src="/assets/images/icons/hero-info/star.png" width="16" height="16" /><img src="/assets/images/icons/hero-info/star.png" width="16" height="16" /><img src="/assets/images/icons/hero-info/star.png" width="16" height="16" /><img src="/assets/images/icons/hero-info/star.png" width="16" height="16" /></th>
                        </tr>
                        <tr>
                            <td><span className="red-txt"><b>Sunstone</b></span></td>
                            <td><span className="red-txt"><b>Sunstone</b></span></td>
                            <td><span className="red-txt"><b>Sunstone</b></span></td>
                        </tr>
                        <tr>
                            <td>--</td>
                            <td><span className="blu-txt"><b>Moonstone</b></span></td>
                            <td><span className="blu-txt"><b>Moonstone</b></span></td>
                        </tr>
                        <tr>
                            <td>--</td>
                            <td>--</td>
                            <td><span className="grn-txt"><b>Starstone</b></span></td>
                        </tr>
                    </table>
                </div>

            </section>

            <section id="polishing" className="guide-section">

                <div className="section-header">
                    <h2>Polishing Runestones</h2>
                </div>

                <div className="intro-text">
                    <p>Polishing allows you to change the Stat Bonus of the Runestone. This process is similar to using The Forge to upgrade a Hero's Signature Item. When you polish a Runestone you can choose to spend either <img src="/assets/images/icons/forge/gold.png" width="16" height="16" /> or <img src="/assets/images/icons/forge/diamond.png" width="16" height="16" /> for a new random Stat Bonus. A different Stat Boost is not guarenteed, however, and as such Polishing can be quite costly. Spending <img src="/assets/images/icons/forge/diamond.png" width="16" height="16" /> has a better chance of receiving a rarer Stat Boost. Once you tap the polish button there is no going back. The price will be deducted and the new Stat Bonus(if one is rolled) will be applied.</p>
                </div>

                <div className="runestone-polish-cost">
                    <table>
                        <tr>
                            <th>Polishing Cost</th>
                            <th><img src="/assets/images/icons/forge/gold.png" width="24" height="24" /></th>
                            <th><img src="/assets/images/icons/forge/diamond.png" width="24" height="24" /></th>
                        </tr>
                        <tr>
                            <td><span className="blu-txt"><b>Common</b></span></td>
                            <td>300k</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td><span className="prp-txt"><b>Rare</b></span></td>
                            <td>600k</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td><span className="org-txt"><b>Precious</b></span></td>
                            <td>900k</td>
                            <td>30</td>
                        </tr>
                    </table>
                </div>

                <div className="intro-text">
                    <p>Multi-Polish is similar to the Auto-Forge. You can select several parameters and execute a series of polishes auto-magically! The options that can be decided upon for Multi-Polish are: 10, 20 or 50 polishes; <img src="/assets/images/icons/forge/gold.png" width="16" height="16" /> or <img src="/assets/images/icons/forge/diamond.png" width="16" height="16" /> cost; and also an optional stopping condition. If no condition is selected or the condition is not met before all the polishes are used, a list of all the unique Stat Boosts that were rolled will be displayed. The Stat Boost you want can be selected and applied or discarded. If the condition is met before all the polishes are used, however, only the cost per polish performed will be deducted. Polishing a Runestone can be quite costly, but Multi-Polish offers more benefits than regular polishing.</p>
                </div>

                <div className="example-image-box">

                    <div className="example-image">
                        <img src="/assets/images/icons/forge/runestone-example3.jpg" width="300" /><p className="image-note">Select a desired Stat Bonus</p>
                    </div>

                    <div className="example-image">
                        <img src="/assets/images/icons/forge/runestone-example4.jpg" width="300" /><p className="image-note">Example: Multi-Polish stops if condition is met</p>
                    </div>

                </div>

            </section>

            <section id="stat-tables" className="guide-section">

                <div className="section-header">
                    <h2>Stat Tables</h2>
                </div>

                <div className="intro-text">
                    <p>Each type of Runestone has a specific range of Stat Boosts available. All 3 types share the 3 Basic Stat Boosts of Max Health, Physical Attack and Magic Attack. These are the only 3 Stats that can be increased up to 3 times by equipping more than one Runestone, however, the specific Stat Boosts available to each Runestone type will be more useful. Stat Boosts have rarities as noted by the color of the values in the tables. <span className="grn-txt"><b>Common</b></span>, <span className="blu-txt"><b>Rare</b></span> and <span className="prp-txt"><b>Very Rare</b></span>. The more rare the Stat Boost, the less likely each Polish will provide that type of Boost.</p>
                </div>

                <div className="stat-table-box">

                    <div id="sunstone-stats" className="runestone-stat-table">
                        <table>
                            <tr>
                                <th><span className="red-txt">Sunstone</span> Stats</th>
                                <th><img src="/assets/images/icons/forge/common-sunstone.png" width="48" height="48" /></th>
                                <th><img src="/assets/images/icons/forge/rare-sunstone.png" width="48" height="48" /></th>
                                <th><img src="/assets/images/icons/forge/precious-sunstone.png" width="48" height="48" /></th>
                            </tr>
                            <tr>
                                <td>Max Health</td>
                                <td><span className="grn-txt">600</span></td>
                                <td><span className="grn-txt">1500</span></td>
                                <td><span className="blu-txt">3000</span></td>
                            </tr>
                            <tr>
                                <td>Physical Attack</td>
                                <td><span className="grn-txt">50</span></td>
                                <td><span className="grn-txt">120</span></td>
                                <td><span className="blu-txt">260</span></td>
                            </tr>
                            <tr>
                                <td>Magic Attack</td>
                                <td><span className="grn-txt">50</span></td>
                                <td><span className="grn-txt">120</span></td>
                                <td><span className="blu-txt">260</span></td>
                            </tr>
                            <tr>
                                <td>Lifesteal</td>
                                <td><span className="blu-txt">6</span></td>
                                <td><span className="blu-txt">12</span></td>
                                <td><span className="prp-txt">22</span></td>
                            </tr>
                            <tr>
                                <td>Physical Crit Damage</td>
                                <td><span className="blu-txt">8%</span></td>
                                <td><span className="blu-txt">16%</span></td>
                                <td><span className="prp-txt">22%</span></td>
                            </tr>
                            <tr>
                                <td>Magic Crit Damage</td>
                                <td><span className="blu-txt">8%</span></td>
                                <td><span className="blu-txt">16%</span></td>
                                <td><span className="prp-txt">22%</span></td>
                            </tr>
                            <tr>
                                <td>DoT Bonus</td>
                                <td><span className="blu-txt">4%</span></td>
                                <td><span className="blu-txt">8%</span></td>
                                <td><span className="prp-txt">14%</span></td>
                            </tr>
                            <tr>
                                <td>Physical Toughness</td>
                                <td><span className="blu-txt">5%</span></td>
                                <td><span className="blu-txt">9%</span></td>
                                <td><span className="prp-txt">15%</span></td>
                            </tr>
                            <tr>
                                <td>Magic Toughness</td>
                                <td><span className="blu-txt">5%</span></td>
                                <td><span className="blu-txt">9%</span></td>
                                <td><span className="prp-txt">15%</span></td>
                            </tr>
                        </table>
                    </div>

                    <div id="moonstone-stats" className="runestone-stat-table">
                        <table>
                            <tr>
                                <th><span className="blu-txt">Moonstone</span> Stats</th>
                                <th><img src="/assets/images/icons/forge/common-moonstone.png" width="48" height="48" /></th>
                                <th><img src="/assets/images/icons/forge/rare-moonstone.png" width="48" height="48" /></th>
                                <th><img src="/assets/images/icons/forge/precious-moonstone.png" width="48" height="48" /></th>
                            </tr>
                            <tr>
                                <td>Max Health</td>
                                <td><span className="grn-txt">600</span></td>
                                <td><span className="grn-txt">1500</span></td>
                                <td><span className="blu-txt">3000</span></td>
                            </tr>
                            <tr>
                                <td>Physical Attack</td>
                                <td><span className="grn-txt">50</span></td>
                                <td><span className="grn-txt">120</span></td>
                                <td><span className="blu-txt">260</span></td>
                            </tr>
                            <tr>
                                <td>Magic Attack</td>
                                <td><span className="grn-txt">50</span></td>
                                <td><span className="grn-txt">120</span></td>
                                <td><span className="blu-txt">260</span></td>
                            </tr>
                            <tr>
                                <td>Physical Pierce</td>
                                <td><span className="blu-txt">65</span></td>
                                <td><span className="blu-txt">110</span></td>
                                <td><span className="prp-txt">200</span></td>
                            </tr>
                            <tr>
                                <td>Magic Pierce</td>
                                <td><span className="blu-txt">65</span></td>
                                <td><span className="blu-txt">110</span></td>
                                <td><span className="prp-txt">200</span></td>
                            </tr>
                            <tr>
                                <td>Physical Resistance</td>
                                <td><span className="blu-txt">2%</span></td>
                                <td><span className="blu-txt">4.5%</span></td>
                                <td><span className="prp-txt">7.5%</span></td>
                            </tr>
                            <tr>
                                <td>Magic Resistance</td>
                                <td><span className="blu-txt">2%</span></td>
                                <td><span className="blu-txt">4.5%</span></td>
                                <td><span className="prp-txt">7.5%</span></td>
                            </tr>
                            <tr>
                                <td>Silence Resistance</td>
                                <td><span className="blu-txt">12%</span></td>
                                <td><span className="blu-txt">18%</span></td>
                                <td><span className="prp-txt">28%</span></td>
                            </tr>
                            <tr>
                                <td>Time Under Control</td>
                                <td><span className="blu-txt">-8%</span></td>
                                <td><span className="blu-txt">-12%</span></td>
                                <td><span className="prp-txt">-18%</span></td>
                            </tr>
                            <tr>
                                <td>Energy Bonus</td>
                                <td><span className="blu-txt">4%</span></td>
                                <td><span className="blu-txt">6%</span></td>
                                <td><span className="prp-txt">10%</span></td>
                            </tr>
                            <tr>
                                <td>Energy Efficiency</td>
                                <td><span className="blu-txt">4%</span></td>
                                <td><span className="blu-txt">6%</span></td>
                                <td><span className="prp-txt">10%</span></td>
                            </tr>
                        </table>
                    </div>

                    <div id="starstone-stats" className="runestone-stat-table">
                        <table>
                            <tr>
                                <th><span className="grn-txt">Starstone</span> Stats</th>
                                <th><img src="/assets/images/icons/forge/common-starstone.png" width="48" height="48" /></th>
                                <th><img src="/assets/images/icons/forge/rare-starstone.png" width="48" height="48" /></th>
                                <th><img src="/assets/images/icons/forge/precious-starstone.png" width="48" height="48" /></th>
                            </tr>
                            <tr>
                                <td>Max Health</td>
                                <td><span className="grn-txt">600</span></td>
                                <td><span className="grn-txt">1500</span></td>
                                <td><span className="blu-txt">3000</span></td>
                            </tr>
                            <tr>
                                <td>Physical Attack</td>
                                <td><span className="grn-txt">50</span></td>
                                <td><span className="grn-txt">120</span></td>
                                <td><span className="blu-txt">260</span></td>
                            </tr>
                            <tr>
                                <td>Magic Attack</td>
                                <td><span className="grn-txt">50</span></td>
                                <td><span className="grn-txt">120</span></td>
                                <td><span className="blu-txt">260</span></td>
                            </tr>
                            <tr>
                                <td>Physical Crit Rate</td>
                                <td><span className="grn-txt">60</span></td>
                                <td><span className="blu-txt">100</span></td>
                                <td><span className="prp-txt">160</span></td>
                            </tr>
                            <tr>
                                <td>Magic Crit Rate</td>
                                <td><span className="grn-txt">60</span></td>
                                <td><span className="blu-txt">100</span></td>
                                <td><span className="prp-txt">160</span></td>
                            </tr>
                            <tr>
                                <td>Accuracy (Hit Bonus)</td>
                                <td><span className="grn-txt">25</span></td>
                                <td><span className="blu-txt">50</span></td>
                                <td><span className="prp-txt">100</span></td>
                            </tr>
                            <tr>
                                <td>Physical Armor</td>
                                <td><span className="grn-txt">65</span></td>
                                <td><span className="blu-txt">110</span></td>
                                <td><span className="prp-txt">200</span></td>
                            </tr>
                            <tr>
                                <td>Magic Armor</td>
                                <td><span className="grn-txt">65</span></td>
                                <td><span className="blu-txt">110</span></td>
                                <td><span className="prp-txt">200</span></td>
                            </tr>
                            <tr>
                                <td>Dodge Rating</td>
                                <td><span className="grn-txt">25</span></td>
                                <td><span className="blu-txt">50</span></td>
                                <td><span className="prp-txt">100</span></td>
                            </tr>
                            <tr>
                                <td>Healing</td>
                                <td><span className="grn-txt">4</span></td>
                                <td><span className="blu-txt">8</span></td>
                                <td><span className="prp-txt">14</span></td>
                            </tr>
                        </table>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default RunestoneGuide