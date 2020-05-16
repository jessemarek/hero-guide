import React from 'react'

const CreditCard = props => {
    const {
        img_url,
        name,
        guild

    } = props.data

    return (
        <li className="hero-card credits-card">
            <img src={img_url} alt="" />
            <p className="card-title">{name}<span className="tiny-text">{guild}</span></p>
        </li>
    )
}

export default CreditCard