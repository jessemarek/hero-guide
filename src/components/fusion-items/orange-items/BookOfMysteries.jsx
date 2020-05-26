import React from 'react'
import { returnEnchantStars } from '../../../utils/index'

const BookOfMysteries = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/book-of-mysteries.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                {returnEnchantStars(5)}
                <p>Max Health 1200 <span className="grn-txt">+915</span></p><p>Magic Attack 140 <span className="grn-txt">+105</span></p><p>Magic Crit Rating 20 <span className="grn-txt">+15</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/sage-wand.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/sage-wand.png" width="36" height="36" alt="equipment icon" /><br></br><img src="/assets/images/icons/equipment/crystal-staff.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/clasp-of-life.png" width="36" height="36" alt="equipment icon" /><p>Level 87 Required</p>
            </div>
        </div>
    )
}

export default BookOfMysteries