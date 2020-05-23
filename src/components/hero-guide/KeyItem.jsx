import React from 'react'

const KeyItem = props => {
    const {
        item,
        quantity

    } = props.item

    return (
        <div className="key-item-icon">
            <img src={`/assets/images/icons/equipment/${item}.png`} alt="equipment icon" />
            <p><span className="item-quantity">{quantity}</span></p>
        </div>
    )
}

export default KeyItem