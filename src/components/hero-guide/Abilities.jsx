import React from 'react'

import AbilityBox from './AbilityBox'

const Abilities = props => {

    const hero = 'Elric'

    const abilities = [
        {
            name: 'Dragon Strike',
            description: 'Unleash a dragon spirit that knocks back enemies in its path and deal massive Physical Damage',
            stats: [
                '(+ 10 Damage per Ability Point)',
                'Level 100: Deals a base of 1030 Damage',
                'Knock-back Success Rate increases with ability level enemies under level 100 will be knocked back every time'
            ]
        },
        {
            name: 'Uppercut',
            description: 'Cleave a nearby enemy, dealing Physical Damage as well as Lifting and Stunning them',
            stats: [
                '(+ 16 Damage per Ability Point)',
                'Level 100: Deals a base of 1600 Damage',
                'Lift Success Rate increases with ability level enemies below level 100 will be Lifted every time'
            ]
        },
        {
            name: 'Parry',
            description: 'Whenever Elric takes Damage, if he is not currently using an ability, he will Parry the attack, reducing the amount of Damage he takes. He will then immediately counterattack',
            stats: [
                '(Base 280 + 14 Damage per Ability Point)',
                'Level 80: Deals a base of 1400 Damage'
            ]
        },
        {
            name: 'Knight\'s Oath',
            description: 'Take an oath of loyalty and increase Health',
            stats: [
                '(Base 2000 + 50 Health per Ability Point)',
                'Level 60: Passive: Increase Health by 5000'
            ]
        },
        {
            name: 'Engraved Blade',
            description: 'A runic incription appears on Elric\'s sword in one of three colors, bringing and additional effect to all of his abilities. Green grants additional Damage based on the enemy\'s Max Health, Red grants a Lifesteal effect and Yellow reduces enemy Energy',
            stats: [
                '(Green: Base 12.3% + 0.3% and 3660 + 60 Damage per Ability Point)',
                '(Red: Base 305 + 5 Lifesteal per Ability Point)',
                '(Yellow: Base 152.5 + 2.5 Energy per Ability Point)',
                'Level 40: Green: Increases Damage by 30% of target\'s Max Health',
                'Deals a max of 6000 Damage',
                'Red: Increases Lifesteal by 500',
                'Yellow: Reduces target\'s Energy by 250'
            ]
        }
    ]

    /*     const {
            hero,
            abilities
    
        } = props */

    return (
        <section id="abilities" className="guide-section">
            <div className="section-header">
                <h2>Abilities</h2>
            </div>

            <div className="section-body">
                {
                    abilities.map((a, idx) => <AbilityBox key={idx} hero={hero} ability={a} type={idx + 1} />)
                }
            </div>
        </section>
    )
}

export default Abilities