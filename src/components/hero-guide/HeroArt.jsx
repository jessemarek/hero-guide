import React from 'react'

const HeroArt = ({ name, quote }) => {

    return (
        <div className="hero-art">
            <div className="hero-card">
                <img src={`/assets/images/hero-cards/${name}.jpg`} alt={`Artwork card for ${name.split('-').join(' ')}`} />
            </div>

            <div className="hero-portrait">
                <img src={`/assets/images/icons/portraits/${name}.png`} alt={`Portrait for ${name.split('-').join(' ')}`} />
            </div>

            <p className="hero-quote">{`"${quote}"`}</p>
        </div>
    )
}

export default HeroArt