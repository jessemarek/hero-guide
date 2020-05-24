import React from 'react'

//Components
import HeroArt from './HeroArt'
import HeroDetails from './HeroDetails'
import HeroStats from './HeroStats'

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

                    <HeroDetails
                        first_appeared={first_appeared}
                        card_type={card_type}
                        chest_type={chest_type}
                        available_in={available_in}
                    />

                    <HeroStats
                        card_type={card_type}
                        stat_growth={stat_growth}
                        medallions={medallions}
                    />

                </div>
            </div>
        </section >
    )
}

export default HeroInfo