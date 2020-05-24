import React from 'react'

//Utils
import { returnType } from '../../utils/index'

const AbilityBox = props => {

    const {
        hero,
        ability,
        type

    } = props

    return (

        <div className="ability-box">
            <h4>{ability.name} - {returnType(type)}</h4>

            <div className="ability-details">
                <div className="ability-icon">
                    <img src={`/assets/images/icons/abilities/${hero}-ability${type}.png`} alt="ability icon" />
                </div>

                <div className="ability-text">
                    <h4>Ability Description</h4>
                    <p>{ability.description}</p>
                </div>

                <div className="ability-stats">
                    <h4>Ability Stats</h4>
                    <ul className="grn-txt">
                        {
                            ability.stats.map((a, idx) => <li key={idx}>{a}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AbilityBox