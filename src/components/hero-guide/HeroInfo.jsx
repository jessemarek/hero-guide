import React from 'react'

//Components
import HeroArt from './HeroArt'

//Utils
import { returnStars } from '../../utils/index'

const HeroInfo = props => {
    const {
        name,
        title,
        quote,
        role,
        description,
        first_appeared,
        card_type,
        chest_type,
        available_in,
        stat_growth,
        medallions

    } = props.heroInfo

    return (
        <section id="hero-info" className="guide-section">

            <div className="section-header">
                <h2 className="hero-title">{name.split('-').join(' ')} - {title}</h2>
            </div>

            <div className="section-body">

                <HeroArt name={name} quote={quote} />

                <div className="hero-details">
                    <div className="hero-role">
                        <h4>Hero Info and Role</h4>
                        <p><b>{role}:</b>&nbsp;{description}</p>
                    </div>

                    <div className="hero-ss-details">
                        <div className="hero-details-icon">
                            <h4>First Appeared</h4>
                            <img src={`/assets/images/icons/hero-info/${first_appeared}.png`} width="86" height="86" alt="" />
                            <p>{first_appeared.split('-').join(' ')}</p>
                        </div>

                        <div className="card-details">
                            <h4>{returnStars(card_type)} Hero Card</h4>
                            <ul>
                                <li>{`Requires ${card_type === 1 ? 10 : (card_type === 2 ? 30 : 80)}`} <img src="/assets/images/icons/hero-info/ss.png" width="12" height="12" alt="soulstones" /> to summon</li>
                                <li>{`Additional Cards grant ${card_type === 1 ? 7 : (card_type === 2 ? 18 : 30)} `}<img src="/assets/images/icons/hero-info/ss.png" width="12" height="12" alt="soulstones" /></li>
                                <li><img src={`/assets/images/icons/shops/${chest_type}-chest.png`} width="30" height="30" alt="" /> {`Drops in ${chest_type.charAt(0).toUpperCase() + chest_type.slice(1)} Chest`}</li>
                            </ul>
                        </div>

                        <div className="hero-details-icon">
                            <h4><img src="/assets/images/icons/hero-info/ss.png" width="12" height="12" alt="soulstones" />
								Available In</h4>
                            <img src={`/assets/images/icons/shops/${available_in === 'not-released' ? 'unknown' : available_in}.png`} width="86" height="86" alt="" />
                            <p>{available_in.split('-').join(' ')}</p>
                        </div>

                    </div>

                    <div className="hero-growth-box">
                        <div className="stat-growth">
                            <h4>Stat Growth Rates</h4>

                            <table>
                                <tbody>
                                    <tr>
                                        <th colSpan="2">{returnStars(card_type)}</th>
                                        <th><img src="/assets/images/icons/hero-info/stat-growth-arrow.png" width="24" height="12" alt="" /></th>
                                        <th colSpan="2" >{returnStars(7)}</th>
                                    </tr>

                                    <tr>
                                        <td>Health</td>
                                        <td><b>{stat_growth[0].health}</b></td>
                                        <td></td>
                                        <td>Health</td>
                                        <td><b>{stat_growth[1].health}</b></td>
                                    </tr>
                                    <tr>
                                        <td>Physical Attack</td>
                                        <td><b>{stat_growth[0].p_attack}</b></td>
                                        <td></td>
                                        <td>Physical Attack</td>
                                        <td><b>{stat_growth[1].p_attack}</b></td>
                                    </tr>
                                    <tr>
                                        <td>Magic Attack</td>
                                        <td><b>{stat_growth[0].m_attack}</b></td>
                                        <td></td>
                                        <td>Magic Attack</td>
                                        <td><b>{stat_growth[1].m_attack}</b></td>
                                    </tr>
                                    <tr>
                                        <td>Physical Armor</td>
                                        <td><b>{stat_growth[0].p_armor}</b></td>
                                        <td></td>
                                        <td>Physical Armor</td>
                                        <td><b>{stat_growth[1].p_armor}</b></td>
                                    </tr>
                                    <tr>
                                        <td>Magic Armor</td>
                                        <td><b>{stat_growth[0].m_armor}</b></td>
                                        <td></td>
                                        <td>Magic Armor</td>
                                        <td><b>{stat_growth[1].m_armor}</b></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="hero-medallion">
                            <h4>Hero Medallions</h4>
                            {medallions.length === 0 ? (<p>None</p>) : medallions.map(m => m)}
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default HeroInfo