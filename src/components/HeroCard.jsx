import React from 'react'

const HeroCard = props=> {
    const { name } = props

    return(
        <li className="hero-card">
            <img src={`../assets/images/hero-cards/${name}.jpg`} />
            <p className="card-title">{name}</p>
        </li>
    )
}

export default HeroCard