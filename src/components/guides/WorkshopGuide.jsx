import React, { useEffect } from 'react'

const WorkshopGuide = () => {

    //Change Title
    useEffect(() => {
        document.title = 'SH Hero Guide -- Workshop'

        return () => {
            document.title = 'Soul Hunters Hero Guide'
        }
    }, [])

    return (
        <div className="workshop-guide wrapper">

            <div id="overview" className="guide-section">

                <div className="section-header">
                    <h2>Workshop Overview</h2>
                </div>

                <div className="intro-text">
                    <p>The <b>Workshop</b> is part of the <b>Heroes' Village</b>. Once a player reaches Level 85 they are granted access to the Village and its buildings. The workshop is where you can use resources to craft Items. You will see that a variety of items are available to craft when the Workshop is at level 1. Each item requires a different amount of resources and varying amount of time to craft. The crafting process cannot be hurried. If you cancel crafting an item before it is complete, some resources will be returned to you based on the progress in crafting the item. Upgrading the Workshop has two main benefits. First, it reduces crafting time for all items. Second, it makes more items available to craft. While the building is being upgraded you will be unable to use its features until the upgrade is complete.</p>

                </div>

                <div className="intro-table">

                    <div className="resource-cost-table">
                        <h4>Upgrade Cost</h4>
                        <table>
                            <tr>
                                <th><b>Level</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" width="24" height="24" /></th>
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
                                <th style={{ padding: "8px 0;" }}><b>Level</b></th>
                                <th style={{ padding: "8px 0;" }}>Crafting Time</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>- -</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>-2 Hrs</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>-4 Hrs</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>-6 Hrs</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>-8 Hrs</td>
                            </tr>
                            <tr className="totals-row">
                                <td><b>Total</b></td>
                                <td><b>-8 Hrs</b></td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>

            <div id="green" className="guide-section">

                <div className="section-header">
                    <h2>White/<span className="grn-txt">Green</span> Item Crafting</h2>
                </div>

                <div className="table-box">
                    <div className="melt-value-table craft-table">
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/gold.png" width="24" height="24" /></th>
                                <th>Time*</th>
                                <th>Level</th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/leather-kickers.png" width="36" height="36" /></td>
                                <td>10</td>
                                <td>190</td>
                                <td>0</td>
                                <td>0 Sec</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/redwood-crossbow.png" width="36" height="36" /></td>
                                <td>110</td>
                                <td>90</td>
                                <td>0</td>
                                <td>0 Sec</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/copper-axe.png" width="36" height="36" /></td>
                                <td>70</td>
                                <td>129</td>
                                <td>0</td>
                                <td>0 Sec</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/starfall-wand.png" width="36" height="36" /></td>
                                <td>190</td>
                                <td>9</td>
                                <td>0</td>
                                <td>0 Sec</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/crystal-vial.png" width="36" height="36" /></td>
                                <td>90</td>
                                <td>109</td>
                                <td>0</td>
                                <td>0 Sec</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/silk-shroud.png" width="36" height="36" /></td>
                                <td>30</td>
                                <td>570</td>
                                <td>0</td>
                                <td>0 Sec</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/amulet-of-dexterity.png" width="36" height="36" /></td>
                                <td>341</td>
                                <td>279</td>
                                <td>0</td>
                                <td>0 Sec</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/fleeting-boots.png" width="36" height="36" /></td>
                                <td>31</td>
                                <td>589</td>
                                <td>0</td>
                                <td>0 Sec</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/spiked-ball.png" width="36" height="36" /></td>
                                <td>81</td>
                                <td>458</td>
                                <td>0</td>
                                <td>0 Sec</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/wolf-fang.png" width="36" height="36" /></td>
                                <td>465</td>
                                <td>154</td>
                                <td>0</td>
                                <td>0 Sec</td>
                                <td>3</td>
                            </tr>
                        </table>
                    </div>
                    <div className="key-item-note">
                        <p>*Time Values based on a Level 5 Workshop</p>
                    </div>
                </div>
            </div>

            <div id="blue" className="guide-section">

                <div className="section-header">
                    <h2><span className="blu-txt">Blue</span> Item Crafting</h2>
                </div>

                <div className="table-box">
                    <div className="melt-value-table craft-table">
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/gold.png" width="24" height="24" /></th>
                                <th>Time*</th>
                                <th>Level</th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/longsword-of-the-undead.png" width="36" height="36" /></td>
                                <td>69</td>
                                <td>1,311</td>
                                <td>10</td>
                                <td>0 Sec</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/obsidian-tome.png" width="36" height="36" /></td>
                                <td>1,507</td>
                                <td>1,233</td>
                                <td>20</td>
                                <td>0 Sec</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/viking-helmet.png" width="36" height="36" /></td>
                                <td>129</td>
                                <td>2,451</td>
                                <td>20</td>
                                <td>0 Sec</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/banshee-essence.png" width="36" height="36" /></td>
                                <td>221</td>
                                <td>4,199</td>
                                <td>40</td>
                                <td>0 Sec</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/berserker's-claymore.png" width="36" height="36" /></td>
                                <td>806</td>
                                <td>433</td>
                                <td>10</td>
                                <td>0 Sec</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/broadsword.png" width="36" height="36" /></td>
                                <td>1,664</td>
                                <td>895</td>
                                <td>20</td>
                                <td>0 Sec</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/thorned-pauldrons.png" width="36" height="36" /></td>
                                <td>402</td>
                                <td>2,278</td>
                                <td>20</td>
                                <td>0 Sec</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/shadow-mantle.png" width="36" height="36" /></td>
                                <td>1,794</td>
                                <td>965</td>
                                <td>20</td>
                                <td>0 Sec</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/luna's-boots.png" width="36" height="36" /></td>
                                <td>789</td>
                                <td>4,470</td>
                                <td>50</td>
                                <td>0 Sec</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/chipped-blade.png" width="36" height="36" /></td>
                                <td>2,873</td>
                                <td>1,546</td>
                                <td>40</td>
                                <td>0 Sec</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/soothsayer-handwraps.png" width="36" height="36" /></td>
                                <td>687</td>
                                <td>3,892</td>
                                <td>40</td>
                                <td>0 Sec</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/gem-of-purification.png" width="36" height="36" /></td>
                                <td>305</td>
                                <td>914</td>
                                <td>10</td>
                                <td>0 Sec</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/rotating-hacksaw.png" width="36" height="36" /></td>
                                <td>1,105</td>
                                <td>3,314</td>
                                <td>40</td>
                                <td>0 Sec</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/crystal-specs.png" width="36" height="36" /></td>
                                <td>420</td>
                                <td>779</td>
                                <td>10</td>
                                <td>0 Sec</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/bracer-of-salvation.png" width="36" height="36" /></td>
                                <td>2,176</td>
                                <td>383</td>
                                <td>20</td>
                                <td>0 Sec</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/legendary-gemstone.png" width="36" height="36" /></td>
                                <td>1,134</td>
                                <td>1,385</td>
                                <td>20</td>
                                <td>0 Sec</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/heavy-breastplate.png" width="36" height="36" /></td>
                                <td>4,294</td>
                                <td>225</td>
                                <td>40</td>
                                <td>0 Sec</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/jade-kylin.png" width="36" height="36" /></td>
                                <td>1,989</td>
                                <td>2,430</td>
                                <td>40</td>
                                <td>0 Sec</td>
                                <td>5</td>
                            </tr>
                        </table>
                    </div>
                    <div className="key-item-note">
                        <p>*Time Values based on a Level 5 Workshop</p>
                    </div>
                </div>
            </div>

            <div id="purple" className="guide-section">

                <div className="section-header">
                    <h2><span className="prp-txt">Purple</span> Item Crafting</h2>
                </div>

                <div className="table-box">
                    <div className="melt-value-table craft-table">
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/gold.png" width="24" height="24" /></th>
                                <th>Time*</th>
                                <th>Level</th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/ancient-royal-sword.png" width="36" height="36" /></td>
                                <td>3,839</td>
                                <td>3,141</td>
                                <td>60</td>
                                <td>11 Hrs 42 Min</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/scorching-spear.png" width="36" height="36" /></td>
                                <td>330</td>
                                <td>6,270</td>
                                <td>60</td>
                                <td>11 Hrs 36 Min</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/conjuring-chain.png" width="36" height="36" /></td>
                                <td>3,839</td>
                                <td>3,141</td>
                                <td>60</td>
                                <td>11 Hrs 42 Min</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/sage-wand.png" width="36" height="36" /></td>
                                <td>581</td>
                                <td>11,039</td>
                                <td>110</td>
                                <td>12 Hrs 54 Min</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/ghostly-mantle.png" width="36" height="36" /></td>
                                <td>5,720</td>
                                <td>4,680</td>
                                <td>100</td>
                                <td>12 Hrs 36 Min</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/tri-spirit-orb.png" width="36" height="36" /></td>
                                <td>515</td>
                                <td>9,785</td>
                                <td>100</td>
                                <td>12 Hrs 30 Min</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/heavenly-amulet.png" width="36" height="36" /></td>
                                <td>8,140</td>
                                <td>6,660</td>
                                <td>140</td>
                                <td>2 Days 19 Hrs</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/grand-staff.png" width="36" height="36" /></td>
                                <td>8,844</td>
                                <td>7,236</td>
                                <td>160</td>
                                <td>2 Days 20 Hrs</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/dark-wizard's-figurine.png" width="36" height="36" /></td>
                                <td>1,036</td>
                                <td>19,684</td>
                                <td>200</td>
                                <td>2 Days 21 Hrs</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/spartan-dagger.png" width="36" height="36" /></td>
                                <td>11,946</td>
                                <td>9,774</td>
                                <td>210</td>
                                <td>2 Days 21 Hrs</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/frozen-teardrop.png" width="36" height="36" /></td>
                                <td>1,090</td>
                                <td>20,710</td>
                                <td>210</td>
                                <td>2 Days 21 Hrs</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/crystal-staff.png" width="36" height="36" /></td>
                                <td>4,537</td>
                                <td>2,442</td>
                                <td>60</td>
                                <td>11 Hrs 42 Min</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/stealth-cape.png" width="36" height="36" /></td>
                                <td>1,047</td>
                                <td>5,932</td>
                                <td>60</td>
                                <td>11 Hrs 42 Min</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/tribal-battleaxe.png" width="36" height="36" /></td>
                                <td>4,537</td>
                                <td>2,442</td>
                                <td>60</td>
                                <td>11 Hrs 42 Min</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/wellspring-water.png" width="36" height="36" /></td>
                                <td>1,560</td>
                                <td>8,839</td>
                                <td>100</td>
                                <td>12 Hrs 36 Min</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/elvish-etude.png" width="36" height="36" /></td>
                                <td>6,773</td>
                                <td>3,646</td>
                                <td>100</td>
                                <td>12 Hrs 36 Min</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/cap-of-souls.png" width="36" height="36" /></td>
                                <td>2,220</td>
                                <td>12,580</td>
                                <td>140</td>
                                <td>2 Days 19 Hrs</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/doomsday-blade.png" width="36" height="36" /></td>
                                <td>9,620</td>
                                <td>5,179</td>
                                <td>140</td>
                                <td>2 Days 19 Hrs</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/adamantite-scimitar.png" width="36" height="36" /></td>
                                <td>752</td>
                                <td>14,288</td>
                                <td>150</td>
                                <td>2 Days 19 Hrs</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/nature's-power.png" width="36" height="36" /></td>
                                <td>2,247</td>
                                <td>12,733</td>
                                <td>140</td>
                                <td>2 Days 19 Hrs</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/conqueror's-chestplate.png" width="36" height="36" /></td>
                                <td>9,529</td>
                                <td>5,130</td>
                                <td>140</td>
                                <td>2 Days 19 Hrs</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/goblin's-scimitar.png" width="36" height="36" /></td>
                                <td>3,084</td>
                                <td>17,476</td>
                                <td>200</td>
                                <td>2 Days 21 Hrs</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/butterfly-swords.png" width="36" height="36" /></td>
                                <td>13,364</td>
                                <td>7,195</td>
                                <td>200</td>
                                <td>2 Days 21 Hrs</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/sapphire-bracelet.png" width="36" height="36" /></td>
                                <td>5,235</td>
                                <td>1,744</td>
                                <td>60</td>
                                <td>11 Hrs 42 Min</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/ancient-rune.png" width="36" height="36" /></td>
                                <td>1,745</td>
                                <td>5,234</td>
                                <td>60</td>
                                <td>11 Hrs 42 Min</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/fire-ruby.png" width="36" height="36" /></td>
                                <td>7,725</td>
                                <td>2,574</td>
                                <td>100</td>
                                <td>12 Hrs 30 Min</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/grim-slasher.png" width="36" height="36" /></td>
                                <td>2,600</td>
                                <td>7,799</td>
                                <td>100</td>
                                <td>12 Hrs 36 Min</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/natural-remedy.png" width="36" height="36" /></td>
                                <td>7,800</td>
                                <td>2,599</td>
                                <td>100</td>
                                <td>12 Hrs 36 Min</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/voodoo-manuscript.png" width="36" height="36" /></td>
                                <td>3,765</td>
                                <td>11,295</td>
                                <td>150</td>
                                <td>2 Days 19 Hrs</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/eye-of-death.png" width="36" height="36" /></td>
                                <td>10,935</td>
                                <td>3,644</td>
                                <td>140</td>
                                <td>2 Days 19 Hrs</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/light-battleaxe.png" width="36" height="36" /></td>
                                <td>3,705</td>
                                <td>11,115</td>
                                <td>140</td>
                                <td>2 Days 19 Hrs</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/whisperwind-bow.png" width="36" height="36" /></td>
                                <td>15,210</td>
                                <td>5,069</td>
                                <td>200</td>
                                <td>2 Days 21 Hrs</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/healing-stone.png" width="36" height="36" /></td>
                                <td>5,070</td>
                                <td>15,209</td>
                                <td>200</td>
                                <td>2 Days 21 Hrs</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/heavy-ballista.png" width="36" height="36" /></td>
                                <td>15,210</td>
                                <td>5,069</td>
                                <td>200</td>
                                <td>2 Days 21 Hrs</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/clasp-of-life.png" width="36" height="36" /></td>
                                <td>2,429</td>
                                <td>4,510</td>
                                <td>60</td>
                                <td>11 Hrs 42 Min</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/explosive-scepter.png" width="36" height="36" /></td>
                                <td>5,933</td>
                                <td>1,046</td>
                                <td>60</td>
                                <td>11 Hrs 42 Min</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/heavy-club.png" width="36" height="36" /></td>
                                <td>2,443</td>
                                <td>4,536</td>
                                <td>60</td>
                                <td>11 Hrs 42 Min</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/destruction.png" width="36" height="36" /></td>
                                <td>8,840</td>
                                <td>1,539</td>
                                <td>100</td>
                                <td>12 Hrs 36 Min</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/lilith-staff.png" width="36" height="36" /></td>
                                <td>3,626</td>
                                <td>6,733</td>
                                <td>100</td>
                                <td>12 Hrs 30 Min</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/ice-smasher.png" width="36" height="36" /></td>
                                <td>9,435</td>
                                <td>1,664</td>
                                <td>110</td>
                                <td>12 Hrs 42 Min</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/scepter-of-time.png" width="36" height="36" /></td>
                                <td>5,642</td>
                                <td>10,477</td>
                                <td>160</td>
                                <td>2 Days 20 Hrs</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/scepter-of-the-abyss.png" width="36" height="36" /></td>
                                <td>12,580</td>
                                <td>2,219</td>
                                <td>140</td>
                                <td>2 Days 19 Hrs</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/athena's-blessing.png" width="36" height="36" /></td>
                                <td>5,180</td>
                                <td>9,619</td>
                                <td>140</td>
                                <td>2 Days 19 Hrs</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/azrael's-roar.png" width="36" height="36" /></td>
                                <td>17,510</td>
                                <td>3,089</td>
                                <td>200</td>
                                <td>2 Days 21 Hrs</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/maiden's-trinket.png" width="36" height="36" /></td>
                                <td>7,287</td>
                                <td>13,532</td>
                                <td>200</td>
                                <td>2 Days 21 Hrs</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/chain-pendant.png" width="36" height="36" /></td>
                                <td>17,544</td>
                                <td>3,095</td>
                                <td>200</td>
                                <td>2 Days 21 Hrs</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/soul-stealing-necklace.png" width="36" height="36" /></td>
                                <td>2,970</td>
                                <td>3,629</td>
                                <td>60</td>
                                <td>11 Hrs 36 Min</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/carnage-mallet.png" width="36" height="36" /></td>
                                <td>7,334</td>
                                <td>385</td>
                                <td>70</td>
                                <td>11 Hrs 54 Min</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/phantom-jar.png" width="36" height="36" /></td>
                                <td>3,141</td>
                                <td>3,838</td>
                                <td>60</td>
                                <td>11 Hrs 42 Min</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/demolisher.png" width="36" height="36" /></td>
                                <td>9,880</td>
                                <td>519</td>
                                <td>100</td>
                                <td>12 Hrs 36 Min</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/guardian-plate.png" width="36" height="36" /></td>
                                <td>4,680</td>
                                <td>5,719</td>
                                <td>100</td>
                                <td>12 Hrs 36 Min</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/runic-crystal-ball.png" width="36" height="36" /></td>
                                <td>9,880</td>
                                <td>519</td>
                                <td>100</td>
                                <td>12 Hrs 36 Min</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/doomsday-armor.png" width="36" height="36" /></td>
                                <td>6,660</td>
                                <td>8,139</td>
                                <td>140</td>
                                <td>2 Days 19 Hrs</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/goblet-of-the-ancients.png" width="36" height="36" /></td>
                                <td>?14,060</td>
                                <td>739</td>
                                <td>140</td>
                                <td>2 Days 19 Hrs</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/pride's-protector.png" width="36" height="36" /></td>
                                <td>7,002</td>
                                <td>8,557</td>
                                <td>150</td>
                                <td>2 Days 19 Hrs</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/shuriken.png" width="36" height="36" /></td>
                                <td>19,912</td>
                                <td>1,047</td>
                                <td>200</td>
                                <td>2 Days 21 Hrs</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/recovery-potion.png" width="36" height="36" /></td>
                                <td>9,126</td>
                                <td>11,153</td>
                                <td>200</td>
                                <td>2 Days 21 Hrs</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/art-of-war.png" width="36" height="36" /></td>
                                <td>19,266</td>
                                <td>1,013</td>
                                <td>200</td>
                                <td>2 Days 21 Hrs</td>
                                <td>5</td>
                            </tr>
                        </table>
                    </div>
                    <div className="key-item-note">
                        <p>*Time Values based on a Level 5 Workshop</p>
                    </div>
                </div>
            </div>

            <div id="orange" className="guide-section">

                <div className="section-header">
                    <h2><span className="org-txt">Orange</span> Item Crafting</h2>
                </div>

                <div className="table-box">
                    <div className="melt-value-table craft-table">
                        <table>
                            <tr>
                                <th><b>Item</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/gold.png" width="24" height="24" /></th>
                                <th>Time*</th>
                                <th>Level</th>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/nemean-hide.png" width="36" height="36" /></td>
                                <td>19,261</td>
                                <td>15,759</td>
                                <td>350</td>
                                <td>5 Days 12 Hrs</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/mystic-dragonscale.png" width="36" height="36" /></td>
                                <td>1,751</td>
                                <td>33,269</td>
                                <td>350</td>
                                <td>5 Days 12 Hrs</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/commander's-blade.png" width="36" height="36" /></td>
                                <td>16,181</td>
                                <td>13,239</td>
                                <td>290</td>
                                <td>5 Days 11 Hrs</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/primordial-stone.png" width="36" height="36" /></td>
                                <td>1,458</td>
                                <td>27,702</td>
                                <td>290</td>
                                <td>5 Days 11 Hrs</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/champion's-cloak.png" width="36" height="36" /></td>
                                <td>21,879</td>
                                <td>17,901</td>
                                <td>390</td>
                                <td>5 Days 13 Hrs</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/blade-of-chaos.png" width="36" height="36" /></td>
                                <td>17,550</td>
                                <td>9,449</td>
                                <td>270</td>
                                <td>5 Days 10 Hrs</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/staff-of-illumination.png" width="36" height="36" /></td>
                                <td>18,954</td>
                                <td>10,205</td>
                                <td>290</td>
                                <td>5 Days 11 Hrs</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/blade-of-illusion.png" width="36" height="36" /></td>
                                <td>6,012</td>
                                <td>34,067</td>
                                <td>400</td>
                                <td>5 Days 14 Hrs</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/stormrider-armor.png" width="36" height="36" /></td>
                                <td>26,702</td>
                                <td>14,377</td>
                                <td>410</td>
                                <td>5 Days 14 Hrs</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/ironbark-warbow.png" width="36" height="36" /></td>
                                <td>6,825</td>
                                <td>20,474</td>
                                <td>270</td>
                                <td>5 Days 10 Hrs</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/ethereal-cloak.png" width="36" height="36" /></td>
                                <td>26,265</td>
                                <td>8,754</td>
                                <td>350</td>
                                <td>5 Days 12 Hrs</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/bandit's-dagger.png" width="36" height="36" /></td>
                                <td>21,870</td>
                                <td>7,289</td>
                                <td>290</td>
                                <td>5 Days 11 Hrs</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/lost-epic.png" width="36" height="36" /></td>
                                <td>10,250</td>
                                <td>30,749</td>
                                <td>410</td>
                                <td>5 Days 14 hrs</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/torch-of-destruction.png" width="36" height="36" /></td>
                                <td>9,449</td>
                                <td>17,550</td>
                                <td>270</td>
                                <td>5 Days 10 Hrs</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/titanic-axe.png" width="36" height="36" /></td>
                                <td>9,547</td>
                                <td>17,732</td>
                                <td>270</td>
                                <td>5 Days 10 Hrs</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/helmet-of-darkness.png" width="36" height="36" /></td>
                                <td>29,766</td>
                                <td>5,253</td>
                                <td>350</td>
                                <td>5 Days 12 Hrs</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/scepter-of-truth.png" width="36" height="36" /></td>
                                <td>24,786</td>
                                <td>4,73</td>
                                <td>290</td>
                                <td>5 Days 11 Hrs</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/oracle's-robe.png" width="36" height="36" /></td>
                                <td>14,665</td>
                                <td>27,234</td>
                                <td>410</td>
                                <td>5 Days 14 Hrs</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/kretonian-talisman.png" width="36" height="36" /></td>
                                <td>27,702</td>
                                <td>1,457</td>
                                <td>290</td>
                                <td>5 Days 11 Hrs</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td><img src="/assets/images/icons/equipment/jupiter's-hammer.png" width="36" height="36" /></td>
                                <td>18,036</td>
                                <td>22,043</td>
                                <td>400</td>
                                <td>5 Days 14 Hrs</td>
                                <td>5</td>
                            </tr>
                        </table>
                    </div>
                    <div className="key-item-note">
                        <p>*Time Values based on a Level 5 Workshop</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WorkshopGuide