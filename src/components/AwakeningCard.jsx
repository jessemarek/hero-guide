import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const AwakeningCard = props => {
    const {
        name,
        awakened,
        position

    } = props.hero

    const { url } = useRouteMatch()

    return (
        <li className="hero-card">
            <Link to={`${url}/${name}`}>
                <div className="spoiler-card spoiler-off">
                    <div className="card-back">
                        <img
                            src={`../assets/images/hero-cards/${name}.jpg`}
                            alt={`Artwork card for ${name.split('-').join(' ')}. Link to this hero's awakening quest`}
                        />
                        <p className="card-title">{name.split('-').join(' ')}</p>
                    </div>
                    <div className="card-face">
                        <img
                            src={`../assets/images/hero-cards-aw/${name}-aw.jpg`}
                            alt={`Awakened artwork card for ${name.split('-').join(' ')}. Link to this hero's awakening quest`}
                        />
                        <p className="card-title">{name.split('-').join(' ')}</p>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default AwakeningCard