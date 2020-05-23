import React from 'react'

import KeyItem from './KeyItem'

const KeyFusionItems = props => {

    //Dummy data for testing
    const heroAwakened = true
    const keyItems = [
        {
            item: 'commander\'s-blade',
            quantity: 5
        },
        {
            item: 'stormrider-armor',
            quantity: 2
        },
        {
            item: 'kretonian-talisman',
            quantity: 2
        },
        {
            item: 'bandit\'s-dagger',
            quantity: 2
        },
        {
            item: 'staff-of-illumination',
            quantity: 2
        },
        {
            item: 'primordial-stone',
            quantity: 1
        },
        {
            item: 'champion\'s-cloak',
            quantity: 1
        },
        {
            item: 'titanic-axe',
            quantity: 3
        },
        {
            item: 'nemean-hide',
            quantity: 2
        },
        {
            item: 'mystic-dragonscale',
            quantity: 1
        },
        {
            item: 'ethereal-cloak',
            quantity: 1
        },
        {
            item: 'ironbark-warbow',
            quantity: 1
        },
        {
            item: 'blade-of-chaos',
            quantity: 1
        },
        {
            item: 'clasp-of-life',
            quantity: 5
        },
        {
            item: 'healing-stone',
            quantity: 4
        },
        {
            item: 'stealth-cape',
            quantity: 4
        },
        {
            item: 'destruction',
            quantity: 2
        },
        {
            item: 'spartan-dagger',
            quantity: 1
        }
    ]

    /*     const {
            keyItems,
            heroAwakened
    
        } = props */

    return (
        <section id="key-items" className="guide-section">
            <div className="section-header">
                <h2>Key Fusion Items</h2>
            </div>

            <div className="section-body">
                <div className="key-item-box">
                    {
                        keyItems &&
                        keyItems.map((i, idx) => <KeyItem key={idx} id={idx} item={i} />)
                    }
                </div>

                <div className="key-item-note">
                    <p>*Key items required to fuse up to <span className="org-txt">Orange+2</span> and fully equip. Not all
						items required for fusions listed.{heroAwakened ? 'Signature Item not included.' : ''}</p>
                </div>
            </div>
        </section>
    )
}

export default KeyFusionItems