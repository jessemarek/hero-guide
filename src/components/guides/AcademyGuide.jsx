import React, { useEffect } from 'react'

const AcademyGuide = () => {

    //Change Title
    useEffect(() => {
        document.title = 'SH Hero Guide -- Academy'

        return () => {
            document.title = 'Soul Hunters Hero Guide'
        }
    }, [])

    return (
        <div className="heroic-academy-guide wrapper">

            <div id="overview" className="guide-section">

                <div className="section-header">
                    <h2>Heroic Academy Overview</h2>
                </div>

                <div className="intro-text">
                    <p>The <b>Heroic Academy</b> is part of the <b>Heroes' Village</b>. Once a player reaches Level 85 they are granted access to the Village and its buildings. The core function of the Heroic Academy is for Heroes to study “Skills” that increase their Stats. Each Hero has access to 2 Talent Trees, which are a set of Skills that they may study. Each Talent Tree has 5 Tiers: Basic, Intermediate 1, Intermediate 2, Advanced, and Expert. Each Tier of the Talent Tree will have 2-3 Skills to choose from. Once a Hero's Skill has reached level 5, that Hero will gain access to the next Tier of Skills in that particular Talent Tree. A Hero may only have 1 Skill per Tier active at a time. The active Skill may be swapped for the cost of 1,000 <img src="/assets/images/icons/heroic-academy/resources/wood.png" width="16" height="16" /> and 1,000 <img src="/assets/images/icons/heroic-academy/resources/iron.png" width="16" height="16" /></p>
                    <p>Upgrading the Heroic Academy increases the Level Cap of both the <b>Furnace</b> and the <b>Workshop</b>. This allows both buildings to be further upgraded unlocking new benefits in each building. Upgrading the Heroic Academy does not provide any increased benefit to the Academy itself. While the building is being upgraded you will be unable to use its features until the upgrade is complete.</p>

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
                                <td>5,000</td>
                                <td>5,000</td>
                                <td>500</td>
                                <td>12 Hrs</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>10,000</td>
                                <td>10,000</td>
                                <td>1,000</td>
                                <td>24 Hrs</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>15,000</td>
                                <td>15,000</td>
                                <td>1,500</td>
                                <td>36 Hrs</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>20,000</td>
                                <td>20,000</td>
                                <td>3,000</td>
                                <td>48 Hrs</td>
                            </tr>
                            <tr className="totals-row">
                                <td><b>Total</b></td>
                                <td><b>50,000</b></td>
                                <td><b>50,000</b></td>
                                <td><b>6,000</b></td>
                                <td><b>120 Hrs</b></td>
                            </tr>
                        </table>
                    </div>

                </div>

            </div>

            <div id="cost" className="guide-section">

                <div className="section-header">
                    <h2>Resource Costs</h2>
                </div>

                <div className="table-box">
                    <div className="resource-cost-table">
                        <h4>Basic</h4>
                        <table>
                            <tr>
                                <th><b>Level</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/gold.png" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>750</td>
                                <td>750</td>
                                <td>315</td>
                                <td>32,400</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>900</td>
                                <td>900</td>
                                <td>360</td>
                                <td>38,400</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>1,050</td>
                                <td>1,050</td>
                                <td>405</td>
                                <td>48,000</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>1,200</td>
                                <td>1,200</td>
                                <td>450</td>
                                <td>57,600</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>1,350</td>
                                <td>1,350</td>
                                <td>495</td>
                                <td>64,800</td>
                            </tr>
                            <tr className="totals-row">
                                <td><b>Total</b></td>
                                <td><b>5,250</b></td>
                                <td><b>5,250</b></td>
                                <td><b>2,025</b></td>
                                <td><b>241,200</b></td>
                            </tr>
                        </table>
                    </div>

                    <div className="resource-cost-table">
                        <h4>Intermediate 1</h4>
                        <table>
                            <tr>
                                <th><b>Level</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/gold.png" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>940</td>
                                <td>940</td>
                                <td>405</td>
                                <td>48,000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>1,125</td>
                                <td>1,125</td>
                                <td>450</td>
                                <td>57,600</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>1,320</td>
                                <td>1,320</td>
                                <td>495</td>
                                <td>72,000</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>1,500</td>
                                <td>1,500</td>
                                <td>540</td>
                                <td>86,400</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>1,700</td>
                                <td>1,700</td>
                                <td>585</td>
                                <td>96,000</td>
                            </tr>
                            <tr className="totals-row">
                                <td><b>Total</b></td>
                                <td><b>6,585</b></td>
                                <td><b>6,585</b></td>
                                <td><b>2,475</b></td>
                                <td><b>360,000</b></td>
                            </tr>
                        </table>
                    </div>

                    <div className="resource-cost-table">
                        <h4>Intermediate 2</h4>
                        <table>
                            <tr>
                                <th><b>Level</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/gold.png" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1,125</td>
                                <td>1,125</td>
                                <td>405</td>
                                <td>57,600</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>1,350</td>
                                <td>1,350</td>
                                <td>450</td>
                                <td>76,800</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>1,575</td>
                                <td>1,575</td>
                                <td>495</td>
                                <td>96,000</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>1,800</td>
                                <td>1,800</td>
                                <td>540</td>
                                <td>115,200</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>2,025</td>
                                <td>2,025</td>
                                <td>585</td>
                                <td>134,400</td>
                            </tr>
                            <tr className="totals-row">
                                <td><b>Total</b></td>
                                <td><b>7,875</b></td>
                                <td><b>7,875</b></td>
                                <td><b>2,475</b></td>
                                <td><b>480,000</b></td>
                            </tr>
                        </table>
                    </div>

                    <div className="resource-cost-table">
                        <h4>Advanced</h4>
                        <table>
                            <tr>
                                <th><b>Level</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/gold.png" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1,300</td>
                                <td>1,300</td>
                                <td>540</td>
                                <td>57,600</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>1,575</td>
                                <td>1,575</td>
                                <td>585</td>
                                <td>76,800</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>1,800</td>
                                <td>1,800</td>
                                <td>630</td>
                                <td>96,000</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>2,100</td>
                                <td>2,100</td>
                                <td>675</td>
                                <td>115,200</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>2,400</td>
                                <td>2,400</td>
                                <td>720</td>
                                <td>134,400</td>
                            </tr>
                            <tr className="totals-row">
                                <td><b>Total</b></td>
                                <td><b>9,175</b></td>
                                <td><b>9,175</b></td>
                                <td><b>3,150</b></td>
                                <td><b>480,000</b></td>
                            </tr>
                        </table>
                    </div>

                    <div className="resource-cost-table">
                        <h4>Expert</h4>
                        <table>
                            <tr>
                                <th><b>Level</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/gold.png" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1,500</td>
                                <td>1,500</td>
                                <td>630</td>
                                <td>86,400</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>1,800</td>
                                <td>1,800</td>
                                <td>675</td>
                                <td>115,200</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>2,100</td>
                                <td>2,100</td>
                                <td>720</td>
                                <td>144,000</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>2,400</td>
                                <td>2,400</td>
                                <td>765</td>
                                <td>172,800</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>2,700</td>
                                <td>2,700</td>
                                <td>810</td>
                                <td>201,600</td>
                            </tr>
                            <tr className="totals-row">
                                <td><b>Total</b></td>
                                <td><b>10,500</b></td>
                                <td><b>10,500</b></td>
                                <td><b>3,600</b></td>
                                <td><b>720,000</b></td>
                            </tr>
                        </table>
                    </div>

                    <div className="resource-cost-table">
                        <h4>Total Cost</h4>
                        <table>
                            <tr>
                                <th><b># of Trees</b></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/wood.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/iron.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/crystals.png" width="24" height="24" /></th>
                                <th><img src="/assets/images/icons/heroic-academy/resources/gold.png" width="24" height="24" /></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>39,385</td>
                                <td>39,385</td>
                                <td>13,725</td>
                                <td>2,218,200</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>78,770</td>
                                <td>78,770</td>
                                <td>27,450</td>
                                <td>4,436,400</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div id="physical" className="guide-section">

                <div className="section-header">
                    <h2>Physical Attack Skills</h2>
                </div>

                <div className="icon-bar">
                    <a href="#weapons-mastery"><img src="/assets/images/icons/heroic-academy/talents/weapons-mastery.png" width="36" height="36" /></a><a href="#swordsmanship"><img src="/assets/images/icons/heroic-academy/talents/swordsmanship.png" width="36" height="36" /></a><a href="#offensive-tactics"><img src="/assets/images/icons/heroic-academy/talents/offensive-tactics.png" width="36" height="36" /></a><a href="#martial-arts"><img src="/assets/images/icons/heroic-academy/talents/martial-arts.png" width="36" height="36" /></a><a href="#marksmanship"><img src="/assets/images/icons/heroic-academy/talents/marksmanship.png" width="36" height="36" /></a>

                </div>

                <div id="weapons-mastery" className="talent-box">
                    <h4>Weapons Mastery</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/weapons-mastery.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Weapons Mastery increases the Physical Attack Stat of the Hero. This skill is an excellent choice for Heroes whose primary role is to deal Physical Damage. It can also be a good choice for Tanks depending on the other skills available in the same Tier on the Talent Tree.</p>
                        </div>

                    </div>

                </div>

                <div id="swordsmanship" className="talent-box">
                    <h4>Swordsmanship</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/swordsmanship.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Swordsmanship increases the Physical Pierce Rating of the Hero. This skill increases the portion of a Physical Attack that will ignore enemy Physical Armor. This skill is an excellent choice for Heroes whose primary role is to deal Physical Damage. Due to the relatively small gain this skill provides in all Talent Trees, it should only be used with Heroes that would benefit from an increase in Physical Pierce Rating.</p>
                        </div>

                    </div>

                </div>

                <div id="offensive-tactics" className="talent-box">
                    <h4>Offensive Tactics</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/offensive-tactics.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Offensive Tactics increases the Physical Crit Rating of the Hero. This skill increases the Hero's chance to land a Critical Hit which deals Additional Bonus Damage. For Heroes with a large base Physical Crit Rating, Martial Arts will be a better choice as it will boost the amount of Damage inflicted when an Attack Crits.</p>
                        </div>

                    </div>

                </div>

                <div id="martial-arts" className="talent-box">
                    <h4>Martial Arts</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/martial-arts.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Martial Arts increases the Physical Crit Damage of the Hero's Critical Hits. The amount of Crit Damage is double without additional modifiers. Some Hero's Abilities can further boost the amount of Crit Damage that can be dealt. Heroes with a high Physical Crit Rating will benefit greatly from Martial Arts.</p>
                        </div>

                    </div>

                </div>

                <div id="marksmanship" className="talent-box">
                    <h4>Marksmanship</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/marksmanship.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Marksmanship increases the Physical Hit Bonus of the Hero. Physical Hit Bonus makes Physical Attacks harder to Dodge. Due to the small boost this skill provides it is best to choose only for Heroes that would benefit from an increase in Physical Hit Bonus.</p>
                        </div>

                    </div>

                </div>

            </div>

            <div id="magic" className="guide-section">

                <div className="section-header">
                    <h2>Magic Attack Skills</h2>
                </div>

                <div className="icon-bar">
                    <a href="#offensive-spells"><img src="/assets/images/icons/heroic-academy/talents/offensive-spells.png" width="36" height="36" /></a><a href="#explosive-magic"><img src="/assets/images/icons/heroic-academy/talents/explosive-magic.png" width="36" height="36" /></a><a href="#battle-sorcery"><img src="/assets/images/icons/heroic-academy/talents/battle-sorcery.png" width="36" height="36" /></a><a href="#dark-magic"><img src="/assets/images/icons/heroic-academy/talents/dark-magic.png" width="36" height="36" /></a><a href="#poison-preparation"><img src="/assets/images/icons/heroic-academy/talents/poison-preparation.png" width="36" height="36" /></a>

                </div>

                <div id="offensive-spells" className="talent-box">
                    <h4>Offensive Spells</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/offensive-spells.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Offensive Spells increases the Magic Attack Stat of the Hero. This skill is an excellent choice for Heroes whose primary role is to deal Magic Damage. It can also be a good choice for Tanks or Support Heroes depending on the other skills available in the same Tier on the Talent Tree.</p>
                        </div>

                    </div>

                </div>

                <div id="explosive-magic" className="talent-box">
                    <h4>Explosive Magic</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/explosive-magic.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Explosive Magic increases the Magic Pierce Rating of the Hero. This skill increases the portion of a Magic Attack that will ignore enemy Magic Armor. This skill is an excellent choice for Heroes whose primary role is to deal Magic Damage. Due to the relatively small gain this skill provides in all Talent Trees, it should only be used with Heroes that would benefit from an increase in Magic Pierce Rating.</p>
                        </div>

                    </div>

                </div>

                <div id="battle-sorcery" className="talent-box">
                    <h4>Battle Sorcery</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/battle-sorcery.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Battle Sorcery increases the Magic Crit Rating of the Hero. This skill increases the Hero's chance to land a Critical Hit which deals Additional Bonus Damage. For Heroes with a large base Magic Crit Rating, Dark Magic will be a better choice as it will boost the amount of Damage inflicted when an Attack Crits.</p>
                        </div>

                    </div>

                </div>

                <div id="dark-magic" className="talent-box">
                    <h4>Dark Magic</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/dark-magic.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Dark Magic increases the Magic Crit Damage of the Hero's Critical Hits. The amount of Crit Damage is double without additional modifiers. Some Hero's Abilities can further boost the amount of Crit Damage that can be dealt. Heroes with a high Magic Crit Rating will benefit greatly from Dark Magic.</p>
                        </div>

                    </div>

                </div>

                <div id="poison-preparation" className="talent-box">
                    <h4>Poison Preparation</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/poison-preparation.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Poison Preparation increases the Damage output of all Damage-over-Time Attacks/Abilites of this Hero. Damage-over-Time is difficult to defend against as it ignores most forms of Damage mitigation. Due to the nature and power of Damage-over-Time Attacks/Abilities any Hero with Poison Preparation available in their Talent Tree should use it.</p>
                        </div>

                    </div>

                </div>

            </div>

            <div id="defense" className="guide-section">

                <div className="section-header">
                    <h2>Defense Skills</h2>
                </div>

                <div className="icon-bar">
                    <a href="#armor-crafting"><img src="/assets/images/icons/heroic-academy/talents/armor-crafting.png" width="36" height="36" /></a><a href="#damage-resistance"><img src="/assets/images/icons/heroic-academy/talents/damage-resistance.png" width="36" height="36" /></a><a href="#defensive-tactics"><img src="/assets/images/icons/heroic-academy/talents/defensive-tactics.png" width="36" height="36" /></a><a href="#mystic-arts"><img src="/assets/images/icons/heroic-academy/talents/mystic-arts.png" width="36" height="36" /></a><a href="#stealth"><img src="/assets/images/icons/heroic-academy/talents/stealth.png" width="36" height="36" /></a><a href="#blessing"><img src="/assets/images/icons/heroic-academy/talents/blessing.png" width="36" height="36" /></a>
                </div>

                <div id="armor-crafting" className="talent-box">
                    <h4>Armor Crafting</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/armor-crafting.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Armor Crafting increases the Physical Armor of this Hero. Physical Armor reduces the Physical Damage the Hero receives from Physical Attacks. Physical Armor also reduces the chance that an enemy Hero will land Physical Critical Hits.</p>
                        </div>

                    </div>

                </div>

                <div id="damage-resistance" className="talent-box">
                    <h4>Damage Resistance</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/damage-resistance.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Damage Resistance reduces the amount of Physical Damage this Hero receives. All forms of Physical Damage will be reduced. This skill is best chosen on Heroes that need to withstand a lot of Physical Damage. Most useful on Tanks or to further protect Magic DPS Heroes from Assassins.</p>
                        </div>

                    </div>

                </div>

                <div id="defensive-tactics" className="talent-box">
                    <h4>Defensive Tactics</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/defensive-tactics.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Defensive Tactics only reduces the amount of Critical Physical Damage this Hero receives. The bonus Physical Damage portion of a Critical Hit will be reduced. This skill is best chosen on Heroes that need to withstand a lot of Physical Damage. Most useful on weaker Heroes to protect them from Single-Target and Assassin Heroes.</p>
                        </div>

                    </div>

                </div>

                <div id="mystic-arts" className="talent-box">
                    <h4>Mystic Arts</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/mystic-arts.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Mystic Arts increases the Magic Armor of this Hero. Magic Armor reduces the Magic Damage the Hero receives from Magic Attacks. Magic Armor also reduces the chance that an enemy Hero will land Magic Critical Hits.</p>
                        </div>

                    </div>

                </div>

                <div id="stealth" className="talent-box">
                    <h4>Stealth</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/stealth.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Stealth reduces the amount of Magic Damage this Hero receives. All forms of Magic Damage will be reduced. This skill is best chosen on Heroes that need to withstand a lot of Magic Damage. Most useful on Tanks to increase their survivability.</p>
                        </div>

                    </div>

                </div>

                <div id="blessing" className="talent-box">
                    <h4>Blessing</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/blessing.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Blessing only reduces the amount of Critical Magic Damage this Hero receives. The bonus Magic Damage portion of a Critical Hit will be reduced. This skill is best chosen on Heroes that need to withstand a lot of Magic Damage. Most useful on weaker Heroes to protect them from Magic DPS Heroes.</p>
                        </div>

                    </div>

                </div>

            </div>

            <div id="resistance" className="guide-section">

                <div className="section-header">
                    <h2>Resistance Skills</h2>
                </div>

                <div className="icon-bar">
                    <a href="#evasive-maneuvers"><img src="/assets/images/icons/heroic-academy/talents/evasive-maneuvers.png" width="36" height="36" /></a><a href="#forcefields"><img src="/assets/images/icons/heroic-academy/talents/forcefields.png" width="36" height="36" /></a><a href="#final-struggle"><img src="/assets/images/icons/heroic-academy/talents/final-struggle.png" width="36" height="36" /></a><a href="#spell-resistance"><img src="/assets/images/icons/heroic-academy/talents/spell-resistance.png" width="36" height="36" /></a><a href="#silence-resistance"><img src="/assets/images/icons/heroic-academy/talents/silence-resistance.png" width="36" height="36" /></a>
                </div>

                <div id="evasive-maneuvers" className="talent-box">
                    <h4>Evasive Maneuvers</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/evasive-maneuvers.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Evasive Maneuvers increases the Dodge Rating of the Hero. Dodge Rating increases the chance to Dodge an Attack. Only Physical Attacks can be Dodged. This includes not only Attacks from Physical Damage oriented Heroes, but also the Basic Attacks of Magic Damage Heroes. Only a few Magic Heroes have Abilities that can changed their Basic Attacks to Magic in which case they cannot be Dodged.</p>
                        </div>

                    </div>

                </div>

                <div id="forcefields" className="talent-box">
                    <h4>Forcefields</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/forcefields.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Forcefields increases the Hit Recovery Chance of the Hero. All Attacks have a chance to inflict a momentary stun like effect. This flinching can interrupt Heroes from Attacking or using Abilities. Forcefields increases the chance a hero will avoid this effect.</p>
                        </div>

                    </div>

                </div>

                <div id="final-struggle" className="talent-box">
                    <h4>Final Struggle</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/final-struggle.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Final Struggle increases the Kill Bonus Resist Chance of the Hero. When a Hero is killed, the Hero that landed the Last Hit will receive an Energy Bonus. Final Struggle provides a Hero a chance at not awarding this Energy Bonus to the Hero that lands the Last Hit. In most cases the chance is too small to be a greater benefit to the other Skills in the same Tier.</p>
                        </div>

                    </div>

                </div>

                <div id="spell-resistance" className="talent-box">
                    <h4>Spell Resistance</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/spell-resistance.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Spell Resistance reduces the amount of time Control Abilites will affect the Hero. Every type of Control Ability will have the amount of time it lasts reduced not just Magic Abilities as the name implies. Some examples of Control Abilites are: Stun, Sleep, Silence and Slow. More types of Control Abilites may exist or be introduced into the game at a later date.</p>
                        </div>

                    </div>

                </div>

                <div id="silence-resistance" className="talent-box">
                    <h4>Silence Resistance</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/silence-resistance.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Silence Resistance grants a chance to resist the Silence Status Effect to the Hero. Silence prevents a Hero from using any Magic Abilities. Most useful for Magic and Support Heroes, however, some Physical Heroes do have Magic Abilites such as Goram's "Allies of Chaos"</p>
                        </div>

                    </div>

                </div>

            </div>

            <div id="health" className="guide-section">

                <div className="section-header">
                    <h2>Health Skills</h2>
                </div>

                <div className="icon-bar">
                    <a href="#physical-conditioning"><img src="/assets/images/icons/heroic-academy/talents/physical-conditioning.png" width="36" height="36" /></a><a href="#vitality-drain"><img src="/assets/images/icons/heroic-academy/talents/vitality-drain.png" width="36" height="36" /></a><a href="#healing-potions"><img src="/assets/images/icons/heroic-academy/talents/healing-potions.png" width="36" height="36" /></a><a href="#healing-spells"><img src="/assets/images/icons/heroic-academy/talents/healing-spells.png" width="36" height="36" /></a><a href="#first-aid"><img src="/assets/images/icons/heroic-academy/talents/first-aid.png" width="36" height="36" /></a>
                </div>

                <div id="physical-conditioning" className="talent-box">
                    <h4>Physical Conditioning</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/physical-conditioning.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Physical Conditiong increases the Max Health of the Hero. For most Heroes this Skill will be the most useful choice for that Tier on their Talent Tree. Tanks, Magic DPS and Support Heroes should always take this whenever available. Some Physical DPS Heroes may benefit from Vitality Drain more, but in most cases Physical Conditioning should be chosen.</p>
                        </div>

                    </div>

                </div>

                <div id="vitality-drain" className="talent-box">
                    <h4>Vitality Drain</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/vitality-drain.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Vitality Drain increases the Lifesteal Stat of the Hero. Lifesteal grants all Physical Attacks the ability to return a portion of the Damage dealt back to the Hero as Health. This skill is only a viable choice for Physical DPS Heroes due to the High Damage output. This will allow Physical DPS Heroes to survive in the battle longer without the support of a Healer.</p>
                        </div>

                    </div>

                </div>

                <div id="healing-potions" className="talent-box">
                    <h4>Healing Potions</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/healing-potions.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Healing Potions increases the Healing Ratio Stat of the Hero. Healing Ratio increases the Healing effect from all sources. The amount of Health the Hero receives from Lifesteal, Healing Abilites and Health Recovery at the end of a stage are all increased by Healing Ratio. An excellent choice for Physical DPS Heroes, Tanks or Heroes that will be Healed by either their own Abilites or others.</p>
                        </div>

                    </div>

                </div>

                <div id="healing-spells" className="talent-box">
                    <h4>Healing Spells</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/healing-spells.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Healing Spells increases the Health Recovery Stat of the Hero. Health Recovery grants an amount of Healing at the end of battle before advancing to the next stage. This only applies to Campaign, Crucible of Fire and Bountiful Caverns/Dojo Stages. This skill is not a good choice due to its limited impact.</p>
                        </div>

                    </div>

                </div>

                <div id="first-aid" className="talent-box">
                    <h4>First Aid</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/first-aid.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>First Aid increases the Healing of the Hero. The Healing effect of Abilites used by this Hero will be increased. This applies not only to Abilities that target other Heroes but also will buff Abilities that self target.</p>
                        </div>

                    </div>

                </div>

            </div>

            <div id="energy" className="guide-section">

                <div className="section-header">
                    <h2>Energy / Ability Skills</h2>
                </div>

                <div className="icon-bar">
                    <a href="#energy-regeneration"><img src="/assets/images/icons/heroic-academy/talents/energy-regeneration.png" width="36" height="36" /></a><a href="#elemental-mastery"><img src="/assets/images/icons/heroic-academy/talents/elemental-mastery.png" width="36" height="36" /></a><a href="#spell-mastery"><img src="/assets/images/icons/heroic-academy/talents/spell-mastery.png" width="36" height="36" /></a><a href="#summoning-skills"><img src="/assets/images/icons/heroic-academy/talents/summoning-skills.png" width="36" height="36" /></a><a href="#general-tactics"><img src="/assets/images/icons/heroic-academy/talents/general-tactics.png" width="36" height="36" /></a>
                </div>

                <div id="energy-regeneration" className="talent-box">
                    <h4>Energy Regeneration</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/energy-regeneration.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Energy Regeneration increases the Energy Bonus the Hero receives. When a Hero takes Damage, they receive some Bonus Energy in return. Energy Regeneration boosts the amount of this Bonus Energy allowing Heroes who take this Skill to fill their Energy more quickly, resulting in earlier Ultimates. This Skill is most effective on Heroes with no Base Energy Efficeincy Stat and also Heroes who take significant Damage throughout the battle due to Position or Role. Physical DPS, Tanks and Assassin Heroes would benefit most from Energy Regeneration.</p>
                        </div>

                    </div>

                </div>

                <div id="elemental-mastery" className="talent-box">
                    <h4>Elemental Mastery</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/elemental-mastery.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Elemental Mastery increases the Energy Efficiency of the Hero. When a Hero uses their Ultimate Ability a portion of the Energy used will be returned to the Hero. This allows for faster recharge of Energy and a chance to use their Ultimate again. All Heroes should take this option over the less useful Energy Regeneration.</p>
                        </div>

                    </div>

                </div>

                <div id="spell-mastery" className="talent-box">
                    <h4>Spell Mastery</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/spell-mastery.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Spell Mastery increases the Energy Recovery Stat of the Hero. Energy Recovery grants an amount of Energy at the end of battle before advancing to the next stage. This only applies to Campaign, Crucible of Fire and Bountiful Caverns/Dojo Stages. Like Healing Spells, this skill is not a good choice due to its limited impact.</p>
                        </div>

                    </div>

                </div>

                <div id="summoning-skills" className="talent-box">
                    <h4>Summoning Skills</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/summoning-skills.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>Summoning Skills increases the Stats of Summoned Units. Heroes with Summoning Abilites should always consider having Summoning Skills as the active skill for that Tier. The Stats of Illusions and Summoned Allies will be boosted.</p>
                        </div>

                    </div>

                </div>

                <div id="general-tactics" className="talent-box">
                    <h4>General Tactics</h4>

                    <div className="ability-details">
                        <div className="ability-icon">
                            <img src="/assets/images/icons/heroic-academy/talents/general-tactics.png" />
                        </div>

                        <div className="academy-skill-text">
                            <p>General Tactics increases the Ability Level of the Hero's Abilities. The increased Ability Level from this Skill will benefit all Heroes. Support Heroes and Heroes that rely on Abilities for their power in battle will benefit the most. Some DPS Heroes will perform better with either Weapons Mastery or Offensive Spells instead.</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AcademyGuide