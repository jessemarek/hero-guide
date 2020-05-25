import React from 'react'

const AwakeningQuest = props => {

    const {
        name,
        awakening

    } = props

    const formatText = (text) => {
        return text.split('-').map(i => (i !== 'of' && i !== 'the') ? i.charAt(0).toUpperCase() + i.slice(1) : i).join(' ')

    }

    return (
        <section id="awakening" className="guide-section">
            <div className="section-header">
                <h2>Awakening Quest</h2>
            </div>
            <div className="section-body">

                <div className="hero-art">

                    <div className="hero-card spoiler-card spoiler-off">
                        <div className="card-back">
                            <img src={`/assets/images/hero-cards/${name}.jpg`} alt={`Artwork card for ${name.split('-').join(' ')}`} />
                        </div>
                        <div className="card-face">
                            <img src={`/assets/images/hero-cards-aw/${name}-aw.jpg`} alt={`Awakened artwork card for ${name.split('-').join(' ')}`} />
                        </div>
                    </div>

                    <div className="hero-portrait spoiler-card spoiler-off">
                        <div className="card-back">
                            <img src={`/assets/images/icons/portraits/${name}.png`} alt={`Portrait for ${name.split('-').join(' ')}`} />
                        </div>
                        <div className="card-face">
                            <img src={`/assets/images/icons/portraits-aw/${name}-aw.png`} alt={`Awakened portrait for ${name.split('-').join(' ')}`} />
                        </div>

                    </div>

                    <p className="hero-quote">{`"${awakening.quote}"`}</p>
                </div>

                <div className="quest-details">

                    <div className="icon-column">

                        <div id="quest-icon1" className="item-icon">
                            <img src="/assets/images/icons/chapter-icons/campaign/14-empty-handed.png" width="86" height="86" alt="" />
                        </div>

                        <div id="quest-icon2" className="item-icon">
                            <img src="/assets/images/icons/chapter-icons/dojo/tidal-temple.png" width="86" height="86" alt="" />
                        </div>

                        <div id="quest-icon3" className="item-icon">
                            <img src="/assets/images/icons/chapter-icons/campaign/14-mt-rathscar.png" width="86" height="86" alt="" />
                        </div>

                    </div>

                    <div className="aw-quests">

                        <div id="aw-quest1" className="textbox">
                            <h4>{`1st Quest - Craft Signature Item: ${formatText(awakening.sig_item)}`}</h4>
                            <p>{`Collect 80 fragments of ${formatText(awakening.quest1.fragment)} from`}<br></br>{`${awakening.quest1.chapter} (Heroic Difficulty)`}</p>
                        </div>

                        <div className="sig-item-recipe">
                            <div id="aw-item1" className="item-icon">
                                <img src={`/assets/images/icons/signature-items/quest1/${awakening.quest1.fragment}.png`} alt="item icon" />
                                <p>{formatText(awakening.quest1.fragment)}</p>
                            </div>

                            <div id="aw-item2" className="item-icon">
                                <img src={`/assets/images/icons/equipment/${awakening.quest1.recipe[0]}.png`} alt="item icon" />
                                <p>{formatText(awakening.quest1.recipe[0])}</p>
                            </div>

                            <div id="aw-item3" className="item-icon">
                                <img src={`/assets/images/icons/equipment/${awakening.quest1.recipe[1]}.png`} alt="item icon" />
                                <p>{formatText(awakening.quest1.recipe[1])}</p>
                            </div>

                            <div id="aw-item4" className="item-icon">
                                <img src={`/assets/images/icons/equipment/${awakening.quest1.recipe[2]}.png`} alt="item icon" />
                                <p>{formatText(awakening.quest1.recipe[2])}</p>
                            </div>
                        </div>

                        <div id="aw-quest2" className="textbox">
                            <h4>{`2nd Quest - ${formatText(awakening.quest2.trial_name)}`}</h4>
                            <p>{`Complete ${awakening.quest2.completions} times with ${formatText(name)} in your party`}<br></br>(Extreme+ Difficulty)</p>
                        </div>

                        <div id="aw-quest3" className="textbox">
                            <h4>{`3rd Quest - ${awakening.quest3.chapter}`}</h4>
                            <p>{`Complete the stage with ${formatText(name)} in your party`}<br></br><b>Requirement: </b>{awakening.quest3.requirement}</p>
                        </div>

                    </div>

                </div>

                <div className="sig-item-stats">

                    <div id="sig-item" className="item-icon">
                        <img src={`/assets/images/icons/signature-items/signature/${awakening.sig_item}.png`} alt="item icon" />
                        <p>{formatText(awakening.sig_item)}</p>
                    </div>

                    <div className="stat-tables">

                        <div className="statbox">
                            <table>
                                <tbody><tr>
                                    <th colSpan="3">Item Stats <span className="grn-txt">+ Max Enchant</span></th>
                                </tr>
                                    <tr>
                                        <td>Max Health</td>
                                        <td>1100</td>
                                        <td><span className="grn-txt">+987</span></td>
                                    </tr>
                                    <tr>
                                        <td>Magic Attack</td>
                                        <td>200</td>
                                        <td><span className="grn-txt">+182</span></td>
                                    </tr>
                                    <tr>
                                        <td>Physical Armor</td>
                                        <td>20</td>
                                        <td><span className="grn-txt">+21</span></td>
                                    </tr>
                                    <tr>
                                        <td>Magic Armor</td>
                                        <td>15</td>
                                        <td><span className="grn-txt">+14</span></td>
                                    </tr>
                                </tbody></table>
                        </div>

                        <div className="statbox">
                            <table>
                                <tbody><tr>
                                    <th colSpan="4">Forge Bonus Stats</th>
                                </tr>
                                    <tr>
                                        <td>M. Attack</td>
                                        <td>≥ 40</td>
                                        <td>M. Pierce</td>
                                        <td><span className="grn-txt">+30</span></td>
                                    </tr>
                                    <tr>
                                        <td>M. Armor</td>
                                        <td>≥ 100</td>
                                        <td>Max Health</td>
                                        <td><span className="grn-txt">+900</span></td>
                                    </tr>
                                    <tr>
                                        <td>P. Armor</td>
                                        <td>≥ 200</td>
                                        <td>M. Attack</td>
                                        <td><span className="grn-txt">+150</span></td>
                                    </tr>
                                </tbody></table>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default AwakeningQuest