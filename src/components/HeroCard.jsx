import React from 'react'

const HeroCard = props=> {
    const { name } = props

    return(
        <li className="hero-card">
            <img src={`../assets/images/hero-cards/${name}.jpg`} alt={`Artwork card for ${name}. Link to this hero's guide`} />
            <p className="card-title">{name}</p>
        </li>
    )
}

export default HeroCard