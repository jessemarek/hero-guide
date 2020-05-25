import React from 'react'

//Utils
import { returnStars } from '../../utils/index'

const HeroDetails = props => {

    const {
        first_appeared,
        card_type,
        chest_type,
        available_in

    } = props

    return (
        <div className="hero-ss-details">
            <div className="hero-details-icon">
                <h4>First Appeared</h4>
                <img className="details.icon" src={`/assets/images/icons/hero-info/${first_appeared}.png`} width="86" height="86" alt="" />
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
                <h4><img className="details.icon" src="/assets/images/icons/hero-info/ss.png" width="16" height="16" alt="soulstones" /> Available In</h4>
                <img src={`/assets/images/icons/shops/${available_in === 'not-released' ? 'unknown' : available_in}.png`} width="86" height="86" alt="" />
                <p>{available_in.split('-').join(' ')}</p>
            </div>

        </div>
    )
}

export default HeroDetails