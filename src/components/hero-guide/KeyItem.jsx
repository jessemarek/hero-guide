import React from 'react'

import { returnComponent } from '../../utils/index'
import { equipment } from '../fusion-items/index'

const KeyItem = props => {
    const {
        item,
        quantity

    } = props.item

    return (
        <div className="key-item-icon">
            {/* Dynamically load item component */}
            {returnComponent(item, props.id, equipment, equipment["unknown"])}

            <p><span className="item-quantity">{quantity}</span></p>
        </div>
    )
}

export default KeyItem