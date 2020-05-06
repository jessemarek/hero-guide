import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const HeroCard = props=> {
    const {
        name,
        awakened,
        position
        
    } = props.hero

    const { url } = useRouteMatch()

    return(
        <li className="hero-card">
            <Link to={`${url}/${name}`}>
                <img 
                    src={`../assets/images/hero-cards/${name}.jpg`} 
                    alt={`Artwork card for ${name.split('-').join(' ')}. Link to this hero's guide`} 
                />
            </Link>
            <p className="card-title">{name.split('-').join(' ')}</p>
        </li>
    )
}

export default HeroCard