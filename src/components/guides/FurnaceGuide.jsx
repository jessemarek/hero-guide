import React, { useEffect } from 'react'

const FurnaceGuide = () => {

    //Change Title
    useEffect(() => {
        document.title = 'SH Hero Guide -- Furnace'

        return () => {
            document.title = 'Soul Hunters Hero Guide'
        }
    }, [])

    return (
        <div className="furnace-guide wrapper">

            <div id="overview" className="guide-section">

                <div className="section-header">
                    <h2>Furnace	 Overview</h2>
                </div>

                <div className="intro-text">
                    <p>The <b>Furnace</b> is part of the <b>Heroes' Village</b>. Once a player reaches Level 85 they are granted access to the Village and its buildings. The Furnace allows players to melt down excess equipment and <img src="/assets/images/icons/hero-info/ss.png" alt="" width="16" height="16" /> in exchange for Heroes' Village resources ( <img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="16" height="16" />, <img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="16" height="16" />, <img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="16" height="16" /> ). Melting down equipment gives a combination of all 3 resources, while melting down <img src="/assets/images/icons/hero-info/ss.png" alt="" width="16" height="16" /> gives only <img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="16" height="16" />. Each item yields a different amount of resources when melted down. <img src="/assets/images/icons/hero-info/ss.png" alt="" width="16" height="16" /> yield 20 <img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="16" height="16" /> each. Melting down items requires <img src="/assets/images/icons/heroic-academy/resources/fuel.png" alt="" width="16" height="16" />, which replenishes over time. Melting down can "crit". When this occurs, one or more of the resources received from melting down an item may yield double the usual amount.</p>
                    <p>Upgrading the Furnace reduces the amount of <img src="/assets/images/icons/heroic-academy/resources/fuel.png" alt="" width="16" height="16" /> required to melt down items, increases maximum <img src="/assets/images/icons/heroic-academy/resources/fuel.png" alt="" width="16" height="16" />, and increases the variety of items available to melt down. While the building is being upgraded you will be unable to use its features until the upgrade is complete.</p>

                </div>

                <div className="intro-table">

                    <div className="resource-cost-table">
                        <h4>Upgrade Cost</h4>
                        <table>
                            <tr>
                                <th><b>Level</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                                <th>Time</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>- -</td>
                                <td>- -</td>
                                <td>- -</td>
                                <td>- -</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2,500</td>
                                <td>2,500</td>
                                <td>250</td>
                                <td>12 Hrs</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>5,000</td>
                                <td>5,000</td>
                                <td>500</td>
                                <td>24 Hrs</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>7,500</td>
                                <td>7,500</td>
                                <td>750</td>
                                <td>36 Hrs</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>10,000</td>
                                <td>10,000</td>
                                <td>1,500</td>
                                <td>48 Hrs</td>
                            </tr>
                            <tr className="totals-row">
                                <td><b>Total</b></td>
                                <td><b>25,000</b></td>
                                <td><b>25,000</b></td>
                                <td><b>3,000</b></td>
                                <td><b>120 Hrs</b></td>
                            </tr>
                        </table>
                    </div>

                    <div className="resource-cost-table">
                        <h4>Upgrade Bonuses</h4>
                        <table>
                            <tr>
                                <th><b>Level</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/fuel.png" alt="" width="24" height="24" /> Capacity</th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/fuel.png" alt="" width="24" height="24" /> Efficiency</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>10,000</td>
                                <td>- -</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>+ 2,000</td>
                                <td>-4% Burned</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>+ 4,000</td>
                                <td>-6% Burned</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>+ 6,000</td>
                                <td>-8% Burned</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>+ 8,000</td>
                                <td>-10% Burned</td>
                            </tr>
                            <tr className="totals-row">
                                <td><b>Total</b></td>
                                <td><b>18,000</b></td>
                                <td><b>-10% Burned</b></td>
                            </tr>
                        </table>
                    </div>

                </div>

                <div className="intro-text">
                    <p>By the time you reach Level 85 and gain access to the Furnace, <span className="blu-txt">Blue</span> Items will be the best option to melt down to fill your <img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="16" height="16" /> and <img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="16" height="16" /> needs. <span className="blu-txt">Blue</span> Items are also very useful for using as Enchantment Materials for your Hero's Gear. <span className="blu-txt">Blue</span> Items can be easily stockpiled by completing all your daily tasks such as: Crucible of Fire runs, Campaign Sweeps/Farming and opening Gold Chests. Below is a chart of the 6 <span className="blu-txt">Blue</span> Items that produce the most <img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="16" height="16" /> and <img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="16" height="16" /> from melting. If you focus on melting these, you can use the others for your Enchanment needs.</p>

                    <div className="intro-table">
                        <div className="resource-cost-table">
                            <table>
                                <tr>
                                    <th colSpan="4">Most Resouces per Melt</th>
                                </tr>
                                <tr>
                                    <td><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></td>
                                    <td><img src="/assets/images/icons/equipment/heavy-breastplate.png" alt="" width="36" height="36" /></td>
                                    <td><img src="/assets/images/icons/equipment/runic-eulogy.png" alt="" width="36" height="36" /></td>
                                    <td><img src="/assets/images/icons/equipment/ritual-blade.png" alt="" width="36" height="36" /></td>
                                </tr>
                                <tr>
                                    <td><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></td>
                                    <td><img src="/assets/images/icons/equipment/luna's-boots.png" alt="" width="36" height="36" /></td>
                                    <td><img src="/assets/images/icons/equipment/banshee-essence.png" alt="" width="36" height="36" /></td>
                                    <td><img src="/assets/images/icons/equipment/gem-of-vigor.png" alt="" width="36" height="36" /></td>
                                </tr>
                            </table>
                        </div>

                    </div>

                </div>

            </div>

            <div id="blue" className="guide-section">

                <div className="section-header">
                    <h2><span className="blu-txt">Blue Item</span> Melt Values</h2>
                </div>

                <div className="table-box">
                    <div className="melt-value-table blue-melt-table">
                        <h4>Level 1 Furnace</h4>
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/strand-of-rejuvenation.png" alt="" width="36" height="36" /></td>
                                <td>10</td>
                                <td>56</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/berserker's-claymore.png" alt="" width="36" height="36" /></td>
                                <td>40</td>
                                <td>21</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/meteor-flail.png" alt="" width="36" height="36" /></td>
                                <td>10</td>
                                <td>56</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/broadsword.png" alt="" width="36" height="36" /></td>
                                <td>83</td>
                                <td>44</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/thorned-pauldrons.png" alt="" width="36" height="36" /></td>
                                <td>20</td>
                                <td>113</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/shadow-mantle.png" alt="" width="36" height="36" /></td>
                                <td>89</td>
                                <td>48</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/luna's-boots.png" alt="" width="36" height="36" /></td>
                                <td>39</td>
                                <td>223</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/chipped-blade.png" alt="" width="36" height="36" /></td>
                                <td>143</td>
                                <td>77</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/soothsayer-handwraps.png" alt="" width="36" height="36" /></td>
                                <td>34</td>
                                <td>194</td>
                                <td>4</td>
                            </tr>
                        </table>
                    </div>

                    <div className="melt-value-table blue-melt-table">
                        <h4>Level 2 Furnace</h4>
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/gem-of-purification.png" alt="" width="36" height="36" /></td>
                                <td>15</td>
                                <td>45</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/dragon's-fang.png" alt="" width="36" height="36" /></td>
                                <td>50</td>
                                <td>16</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/bloody-hatchet.png" alt="" width="36" height="36" /></td>
                                <td>16</td>
                                <td>50</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/scepter-of-prophecy.png" alt="" width="36" height="36" /></td>
                                <td>96</td>
                                <td>31</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/demonic-longsword.png" alt="" width="36" height="36" /></td>
                                <td>32</td>
                                <td>95</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/dwarvish-chestplate.png" alt="" width="36" height="36" /></td>
                                <td>96</td>
                                <td>31</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/rotating-hacksaw.png" alt="" width="36" height="36" /></td>
                                <td>55</td>
                                <td>165</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/charger-boots.png" alt="" width="36" height="36" /></td>
                                <td>165</td>
                                <td>55</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/bulwark-of-vitality.png" alt="" width="36" height="36" /></td>
                                <td>55</td>
                                <td>165</td>
                                <td>4</td>
                            </tr>
                        </table>
                    </div>

                    <div className="melt-value-table blue-melt-table">
                        <h4>Level 3 Furnace</h4>
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/crystal-specs.png" alt="" width="36" height="36" /></td>
                                <td>21</td>
                                <td>38</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/casket-of-time.png" alt="" width="36" height="36" /></td>
                                <td>56</td>
                                <td>10</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/hefty-war-axe.png" alt="" width="36" height="36" /></td>
                                <td>21</td>
                                <td>39</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/mask-of-sacrifice.png" alt="" width="36" height="36" /></td>
                                <td>108</td>
                                <td>19</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/emerald-cuirass.png" alt="" width="36" height="36" /></td>
                                <td>44</td>
                                <td>83</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/bracer-of-salvation.png" alt="" width="36" height="36" /></td>
                                <td>108</td>
                                <td>19</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/golden-mallet.png" alt="" width="36" height="36" /></td>
                                <td>77</td>
                                <td>143</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/ritual-blade.png" alt="" width="36" height="36" /></td>
                                <td>187</td>
                                <td>33</td>
                                <td>4</td>
                            </tr>
                        </table>
                    </div>

                    <div className="melt-value-table blue-melt-table">
                        <h4>Level 4 Furnace</h4>
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/skull-bonnet.png" alt="" width="36" height="36" /></td>
                                <td>30</td>
                                <td>36</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/warrior's-gloves.png" alt="" width="36" height="36" /></td>
                                <td>63</td>
                                <td>3</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/aurora-torch.png" alt="" width="36" height="36" /></td>
                                <td>30</td>
                                <td>36</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/black-dragon's-tailbone.png" alt="" width="36" height="36" /></td>
                                <td>121</td>
                                <td>6</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/legendary-gemstone.png" alt="" width="36" height="36" /></td>
                                <td>56</td>
                                <td>69</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/heavy-breastplate.png" alt="" width="36" height="36" /></td>
                                <td>214</td>
                                <td>11</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/jade-kylin.png" alt="" width="36" height="36" /></td>
                                <td>99</td>
                                <td>121</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/runic-eulogy.png" alt="" width="36" height="36" /></td>
                                <td>209</td>
                                <td>11</td>
                                <td>4</td>
                            </tr>
                        </table>
                    </div>

                    <div className="melt-value-table blue-melt-table">
                        <h4>Level 5 Furnace</h4>
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/wizardry-codex.png" alt="" width="36" height="36" /></td>
                                <td>36</td>
                                <td>30</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/longsword-of-the-undead.png" alt="" width="36" height="36" /></td>
                                <td>3</td>
                                <td>65</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/obsidian-tome.png" alt="" width="36" height="36" /></td>
                                <td>75</td>
                                <td>61</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/viking-helmet.png" alt="" width="36" height="36" /></td>
                                <td>6</td>
                                <td>122</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/gem-of-fortitude.png" alt="" width="36" height="36" /></td>
                                <td>70</td>
                                <td>57</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/banshee-essence.png" alt="" width="36" height="36" /></td>
                                <td>11</td>
                                <td>209</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/cloud-walkers.png" alt="" width="36" height="36" /></td>
                                <td>121</td>
                                <td>99</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/gem-of-vigor.png" alt="" width="36" height="36" /></td>
                                <td>11</td>
                                <td>209</td>
                                <td>4</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div id="purple" className="guide-section">

                <div className="section-header">
                    <h2><span className="prp-txt">Purple Item</span> Melt Values</h2>
                </div>

                <div className="table-box">
                    <div className="melt-value-table purple-melt-table">
                        <h4>Level 1 Furnace</h4>
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/crystal-staff.png" alt="" width="36" height="36" /></td>
                                <td>226</td>
                                <td>122</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/stealth-cape.png" alt="" width="36" height="36" /></td>
                                <td>52</td>
                                <td>296</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/tribal-battleaxe.png" alt="" width="36" height="36" /></td>
                                <td>226</td>
                                <td>122</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/wellspring-water.png" alt="" width="36" height="36" /></td>
                                <td>78</td>
                                <td>441</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/elvish-etude.png" alt="" width="36" height="36" /></td>
                                <td>338</td>
                                <td>182</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/cap-of-souls.png" alt="" width="36" height="36" /></td>
                                <td>111</td>
                                <td>628</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/doomsday-blade.png" alt="" width="36" height="36" /></td>
                                <td>481</td>
                                <td>258</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/nature's-power.png" alt="" width="36" height="36" /></td>
                                <td>112</td>
                                <td>636</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/conqueror's-chestplate.png" alt="" width="36" height="36" /></td>
                                <td>475</td>
                                <td>256</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/goblin's-scimitar.png" alt="" width="36" height="36" /></td>
                                <td>154</td>
                                <td>873</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/butterfly-swords.png" alt="" width="36" height="36" /></td>
                                <td>668</td>
                                <td>359</td>
                                <td>20</td>
                            </tr>
                        </table>
                    </div>

                    <div className="melt-value-table purple-melt-table">
                        <h4>Level 2 Furnace</h4>
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/sapphire-bracelet.png" alt="" width="36" height="36" /></td>
                                <td>261</td>
                                <td>87</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/ancient-rune.png" alt="" width="36" height="36" /></td>
                                <td>87</td>
                                <td>261</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/fire-ruby.png" alt="" width="36" height="36" /></td>
                                <td>386</td>
                                <td>128</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/grim-slasher.png" alt="" width="36" height="36" /></td>
                                <td>130</td>
                                <td>389</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/natural-remedy.png" alt="" width="36" height="36" /></td>
                                <td>390</td>
                                <td>129</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/voodoo-manuscript.png" alt="" width="36" height="36" /></td>
                                <td>188</td>
                                <td>564</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/eye-of-death.png" alt="" width="36" height="36" /></td>
                                <td>546</td>
                                <td>182</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/light-battleaxe.png" alt="" width="36" height="36" /></td>
                                <td>185</td>
                                <td>555</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/whisperwind-bow.png" alt="" width="36" height="36" /></td>
                                <td>760</td>
                                <td>253</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/healing-stone.png" alt="" width="36" height="36" /></td>
                                <td>253</td>
                                <td>760</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/heavy-ballista.png" alt="" width="36" height="36" /></td>
                                <td>760</td>
                                <td>253</td>
                                <td>20</td>
                            </tr>
                        </table>
                    </div>

                    <div className="melt-value-table purple-melt-table">
                        <h4>Level 3 Furnace</h4>
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/clasp-of-life.png" alt="" width="36" height="36" /></td>
                                <td>121</td>
                                <td>225</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/explosive-scepter.png" alt="" width="36" height="36" /></td>
                                <td>296</td>
                                <td>52</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/heavy-club.png" alt="" width="36" height="36" /></td>
                                <td>122</td>
                                <td>226</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/destruction.png" alt="" width="36" height="36" /></td>
                                <td>442</td>
                                <td>77</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/lilith-staff.png" alt="" width="36" height="36" /></td>
                                <td>181</td>
                                <td>336</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/ice-smasher.png" alt="" width="36" height="36" /></td>
                                <td>471</td>
                                <td>83</td>
                                <td>11</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/scepter-of-time.png" alt="" width="36" height="36" /></td>
                                <td>282</td>
                                <td>523</td>
                                <td>16</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/scepter-of-the-abyss.png" alt="" width="36" height="36" /></td>
                                <td>629</td>
                                <td>110</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/athena's-blessing.png" alt="" width="36" height="36" /></td>
                                <td>259</td>
                                <td>480</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/azrael's-roar.png" alt="" width="36" height="36" /></td>
                                <td>875</td>
                                <td>154</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/maiden's-trinket.png" alt="" width="36" height="36" /></td>
                                <td>364</td>
                                <td>676</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/chain-pendant.png" alt="" width="36" height="36" /></td>
                                <td>854</td>
                                <td>154</td>
                                <td>20</td>
                            </tr>
                        </table>
                    </div>

                    <div className="melt-value-table purple-melt-table">
                        <h4>Level 4 Furnace</h4>
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/soul-stealing-necklace.png" alt="" width="36" height="36" /></td>
                                <td>148</td>
                                <td>181</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/carnage-mallet.png" alt="" width="36" height="36" /></td>
                                <td>366</td>
                                <td>19</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/phantom-jar.png" alt="" width="36" height="36" /></td>
                                <td>157</td>
                                <td>191</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/demolisher.png" alt="" width="36" height="36" /></td>
                                <td>494</td>
                                <td>25</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/guardian-plate.png" alt="" width="36" height="36" /></td>
                                <td>234</td>
                                <td>285</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/runic-crystal-ball.png" alt="" width="36" height="36" /></td>
                                <td>494</td>
                                <td>25</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/doomsday-armor.png" alt="" width="36" height="36" /></td>
                                <td>333</td>
                                <td>406</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/goblet-of-the-ancients.png" alt="" width="36" height="36" /></td>
                                <td>703</td>
                                <td>36</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/pride's-protector.png" alt="" width="36" height="36" /></td>
                                <td>350</td>
                                <td>427</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/shuriken.png" alt="" width="36" height="36" /></td>
                                <td>995</td>
                                <td>52</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/recovery-potion.png" alt="" width="36" height="36" /></td>
                                <td>456</td>
                                <td>557</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/art-of-war.png" alt="" width="36" height="36" /></td>
                                <td>963</td>
                                <td>50</td>
                                <td>20</td>
                            </tr>
                        </table>
                    </div>

                    <div className="melt-value-table purple-melt-table">
                        <h4>Level 5 Furnace</h4>
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/ancient-royal-sword.png" alt="" width="36" height="36" /></td>
                                <td>191</td>
                                <td>157</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/scorching-spear.png" alt="" width="36" height="36" /></td>
                                <td>16</td>
                                <td>313</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/conjuring-chain.png" alt="" width="36" height="36" /></td>
                                <td>191</td>
                                <td>157</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/sage-wand.png" alt="" width="36" height="36" /></td>
                                <td>29</td>
                                <td>551</td>
                                <td>11</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/ghostly-mantle.png" alt="" width="36" height="36" /></td>
                                <td>286</td>
                                <td>234</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/tri-spirit-orb.png" alt="" width="36" height="36" /></td>
                                <td>25</td>
                                <td>489</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/heavenly-amulet.png" alt="" width="36" height="36" /></td>
                                <td>407</td>
                                <td>333</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/adamantite-scimitar.png" alt="" width="36" height="36" /></td>
                                <td>37</td>
                                <td>714</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/grand-staff.png" alt="" width="36" height="36" /></td>
                                <td>442</td>
                                <td>361</td>
                                <td>16</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/dark-wizard's-figurine.png" alt="" width="36" height="36" /></td>
                                <td>102</td>
                                <td>984</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/spartan-dagger.png" alt="" width="36" height="36" /></td>
                                <td>597</td>
                                <td>488</td>
                                <td>21</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/frozen-teardrop.png" alt="" width="36" height="36" /></td>
                                <td>54</td>
                                <td>1,035</td>
                                <td>21</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div id="orange" className="guide-section">

                <div className="section-header">
                    <h2><span className="org-txt">Orange Item</span> Melt Values</h2>
                </div>

                <div className="table-box">
                    <div className="melt-value-table orange-melt-table">
                        <h4>Level 1 Furnace</h4>
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/midnight-dream.png" alt="" width="36" height="36" /></td>
                                <td>215</td>
                                <td>1,223</td>
                                <td>28</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/blade-of-chaos.png" alt="" width="36" height="36" /></td>
                                <td>877</td>
                                <td>472</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/gaia's-cutlass.png" alt="" width="36" height="36" /></td>
                                <td>202</td>
                                <td>1,147</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/victory's-scepter.png" alt="" width="36" height="36" /></td>
                                <td>1,108</td>
                                <td>596</td>
                                <td>34</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/blade-of-cataclysm.png" alt="" width="36" height="36" /></td>
                                <td>269</td>
                                <td>1,528</td>
                                <td>35</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/caduceus.png" alt="" width="36" height="36" /></td>
                                <td>1,197</td>
                                <td>645</td>
                                <td>36</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/staff-of-illumination.png" alt="" width="36" height="36" /></td>
                                <td>947</td>
                                <td>510</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/atlantean-battleaxe.png" alt="" width="36" height="36" /></td>
                                <td>?</td>
                                <td>?</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/beastly-guardian.png" alt="" width="36" height="36" /></td>
                                <td>?</td>
                                <td>?</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/blade-of-illusion.png" alt="" width="36" height="36" /></td>
                                <td>300</td>
                                <td>1,703</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/stormrider-armor.png" alt="" width="36" height="36" /></td>
                                <td>1,335</td>
                                <td>718</td>
                                <td>41</td>
                            </tr>
                        </table>
                    </div>

                    <div className="melt-value-table orange-melt-table">
                        <h4>Level 2 Furnace</h4>
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/ironbark-warbow.png" alt="" width="36" height="36" /></td>
                                <td>341</td>
                                <td>1,023</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/sword-of-olympus.png" alt="" width="36" height="36" /></td>
                                <td>1,023</td>
                                <td>340</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/angel's-wings.png" alt="" width="36" height="36" /></td>
                                <td>337</td>
                                <td>1,012</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/ethereal-cloak.png" alt="" width="36" height="36" /></td>
                                <td>1,313</td>
                                <td>437</td>
                                <td>35</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/book-of-mysteries.png" alt="" width="36" height="36" /></td>
                                <td>437</td>
                                <td>1,313</td>
                                <td>35</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/aegis.png" alt="" width="36" height="36" /></td>
                                <td>1,316</td>
                                <td>438</td>
                                <td>35</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/bandit's-dagger.png" alt="" width="36" height="36" /></td>
                                <td>1,093</td>
                                <td>364</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/angelic-fan.png" alt="" width="36" height="36" /></td>
                                <td>?</td>
                                <td>?</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/priestly-scepter.png" alt="" width="36" height="36" /></td>
                                <td>?</td>
                                <td>?</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/lost-epic.png" alt="" width="36" height="36" /></td>
                                <td>512</td>
                                <td>1,537</td>
                                <td>41</td>
                            </tr>
                        </table>
                    </div>

                    <div className="melt-value-table orange-melt-table">
                        <h4>Level 3 Furnace</h4>
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/torch-of-destruction.png" alt="" width="36" height="36" /></td>
                                <td>472</td>
                                <td>877</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/cosmic-shield.png" alt="" width="36" height="36" /></td>
                                <td>1,184</td>
                                <td>208</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/titanic-axe.png" alt="" width="36" height="36" /></td>
                                <td>477</td>
                                <td>886</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/helmet-of-darkness.png" alt="" width="36" height="36" /></td>
                                <td>1,488</td>
                                <td>262</td>
                                <td>35</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/ares'-spear.png" alt="" width="36" height="36" /></td>
                                <td>614</td>
                                <td>1,141</td>
                                <td>35</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/armor-of-shadows.png" alt="" width="36" height="36" /></td>
                                <td>1,479</td>
                                <td>261</td>
                                <td>34</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/scepter-of-truth.png" alt="" width="36" height="36" /></td>
                                <td>1,239</td>
                                <td>218</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/helira's-mask.png" alt="" width="36" height="36" /></td>
                                <td>?</td>
                                <td>?</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/shadow-slayer.png" alt="" width="36" height="36" /></td>
                                <td>?</td>
                                <td>?</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/oracle's-robe.png" alt="" width="36" height="36" /></td>
                                <td>733</td>
                                <td>1,361</td>
                                <td>41</td>
                            </tr>
                        </table>
                    </div>

                    <div className="melt-value-table orange-melt-table">
                        <h4>Level 4 Furnace</h4>
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/demonic-visage.png" alt="" width="36" height="36" /></td>
                                <td>629</td>
                                <td>769</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/poseidon's-trident.png" alt="" width="36" height="36" /></td>
                                <td>1,282</td>
                                <td>67</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/thunderbolt.png" alt="" width="36" height="36" /></td>
                                <td>621</td>
                                <td>759</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/blade-of-time.png" alt="" width="36" height="36" /></td>
                                <td>1,709</td>
                                <td>89</td>
                                <td>35</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/underworld-saber.png" alt="" width="36" height="36" /></td>
                                <td>824</td>
                                <td>1,007</td>
                                <td>36</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/commander's-blade.png" alt="" width="36" height="36" /></td>
                                <td>809</td>
                                <td>661</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/kretonian-talisman.png" alt="" width="36" height="36" /></td>
                                <td>1,385</td>
                                <td>72</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/jewel-of-helios.png" alt="" width="36" height="36" /></td>
                                <td>?</td>
                                <td>?</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/renegade's-armor.png" alt="" width="36" height="36" /></td>
                                <td>2,223</td>
                                <td>233</td>
                                <td>93</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/jupiter's-hammer.png" alt="" width="36" height="36" /></td>
                                <td>901</td>
                                <td>1,102</td>
                                <td>40</td>
                            </tr>
                        </table>
                    </div>

                    <div className="melt-value-table orange-melt-table">
                        <h4>Level 5 Furnace</h4>
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/demon's-skull.png" alt="" width="36" height="36" /></td>
                                <td>760</td>
                                <td>621</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/zealot-battleplate.png" alt="" width="36" height="36" /></td>
                                <td>67</td>
                                <td>1,282</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/nemean-hide.png" alt="" width="36" height="36" /></td>
                                <td>963</td>
                                <td>787</td>
                                <td>35</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/mystic-dragonscale.png" alt="" width="36" height="36" /></td>
                                <td>87</td>
                                <td>1,663</td>
                                <td>35</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/fire-hardened-steel.png" alt="" width="36" height="36" /></td>
                                <td>963</td>
                                <td>787</td>
                                <td>35</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/primordial-stone.png" alt="" width="36" height="36" /></td>
                                <td>144</td>
                                <td>1,385</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/kalerian-granite.png" alt="" width="36" height="36" /></td>
                                <td>?</td>
                                <td>?</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/transforming-mask.png" alt="" width="36" height="36" /></td>
                                <td>?</td>
                                <td>?</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/champion's-cloak.png" alt="" width="36" height="36" /></td>
                                <td>1,093</td>
                                <td>895</td>
                                <td>39</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div id="red" className="guide-section">

                <div className="section-header">
                    <h2><span className="red-txt">Red Item</span> Melt Values</h2>
                </div>

                <div className="table-box">
                    <div className="melt-value-table red-melt-table">
                        <h4>Level 1 Furnace</h4>
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/tyrant's-helmet.png" alt="" width="36" height="36" /></td>
                                <td>?</td>
                                <td>?</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/master's-cap.png" alt="" width="36" height="36" /></td>
                                <td>3,238</td>
                                <td>1,744</td>
                                <td>99</td>
                            </tr>
                        </table>
                    </div>

                    <div className="melt-value-table red-melt-table">
                        <h4>Level 2 Furnace</h4>
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/widowmaker.png" alt="" width="36" height="36" /></td>
                                <td>?</td>
                                <td>?</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/sphere-of-the-sands.png" alt="" width="36" height="36" /></td>
                                <td>?</td>
                                <td>?</td>
                                <td>?</td>
                            </tr>
                        </table>
                    </div>

                    <div className="melt-value-table red-melt-table">
                        <h4>Level 3 Furnace</h4>
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/pure-jade-chest.png" alt="" width="36" height="36" /></td>
                                <td>?</td>
                                <td>?</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/hurricane-blade.png" alt="" width="36" height="36" /></td>
                                <td>1913</td>
                                <td>3552</td>
                                <td>109</td>
                            </tr>
                        </table>
                    </div>

                    <div className="melt-value-table red-melt-table">
                        <h4>Level 4 Furnace</h4>
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/songbird-ring.png" alt="" width="36" height="36" /></td>
                                <td>4,674</td>
                                <td>245</td>
                                <td>98</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/crescent-staff.png" alt="" width="36" height="36" /></td>
                                <td>?</td>
                                <td>?</td>
                                <td>?</td>
                            </tr>
                        </table>
                    </div>

                    <div className="melt-value-table red-melt-table">
                        <h4>Level 5 Furnace</h4>
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" alt="" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" alt="" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/cloak-of-wisdom.png" alt="" width="36" height="36" /></td>
                                <td>?</td>
                                <td>?</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/paladin's-chestplate.png" alt="" width="36" height="36" /></td>
                                <td>?</td>
                                <td>?</td>
                                <td>?</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FurnaceGuide