import React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = props=> {
    const { name } = props

    return(
        <li className="hero-card">
            <Link to={`/${name}`}>
                <img 
                    src={`../assets/images/hero-cards/${name}.jpg`} 
                    alt={`Artwork card for ${name}. Link to this hero's guide`} 
                />
            </Link>
            <p className="card-title">{name}</p>
        </li>
    )
}

export default HeroCard