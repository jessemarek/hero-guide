import React from 'react'

//Utils
import { returnStars } from '../../utils/index'

const HeroStats = ({ card_type, stat_growth, medallions }) => {

    return (
        <div className="hero-growth-box">
            <div className="stat-growth">
                <h4>Stat Growth Rates</h4>

                <table>
                    <tbody>
                        <tr>
                            <th colSpan="2">{returnStars(card_type, 'star')}</th>
                            <th><img src="/assets/images/icons/hero-info/stat-growth-arrow.png" width="24" height="12" alt="" /></th>
                            <th colSpan="2" >{returnStars(7, 'star')}</th>
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
    )
}

export default HeroStats