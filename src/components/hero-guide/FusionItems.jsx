import React from 'react'

//Components
import { equipment } from '../fusion-items/index'
import FusionBox from './FusionBox'

//Utils
import { returnComponent } from '../../utils/index'

const FusionItems = props => {

    //dummy data for testing would be passed in via props
    const fusion_items = {

        purple: [
            "tribal-battleaxe",
            "stealth-cape",
            "clasp-of-life",
            "golden-mallet",
            "luna's-boots",
            "emerald-cuirass"
        ],
        purple1: [
            "ice-smasher",
            "destruction",
            "tribal-battleaxe",
            "heavy-club",
            "carnage-mallet",
            "banshee-essence"
        ],
        purple2: [
            "goblet-of-the-ancients",
            "doomsday-blade",
            "heavenly-amulet",
            "elvish-etude",
            "guardian-plate",
            "clasp-of-life"
        ],
        purple3: [
            "spartan-dagger",
            "goblin's-scimitar",
            "healing-stone",
            "pride's-protector",
            "adamantite-scimitar",
            "runic-crystal-ball"
        ],
        purple4: [
            "zealot-battleplate",
            "cosmic-shield",
            "demonic-visage",
            "azrael's-roar",
            "whisperwind-bow",
            "cap-of-souls"
        ],
        orange: [
            "unknown",
            "aegis",
            "nemean-hide",
            "titanic-axe",
            "demon's-skull",
            "cap-of-souls"
        ],
        orange1: [
            "unknown",
            "renegade's-armor",
            "atlantean-battleaxe",
            "commander's-blade",
            "armor-of-shadows",
            "mystic-dragonscale"
        ],
        orange2: [
            "unknown",
            "master's-cap",
            "sphere-of-the-sands",
            "stormrider-armor",
            "shadow-slayer",
            "beastly-guardian"
        ]

    }
    /*     const {
            fusion_items
    
        } = props */

    return (
        <section id="fusion-items" className="guide-section">
            <div className="section-header">
                <h2>Fusions</h2>
            </div>
            <div className="section-body">
                <div className="purple-fusions">

                    <FusionBox
                        name={"Purple"}
                        color={"prp"}
                        items={fusion_items.purple}
                        componentList={equipment}
                        defaultComponent={equipment["unknown"]}
                        returnComponent={returnComponent}
                    />

                    <FusionBox
                        name={"Purple+1"}
                        color={"prp"}
                        items={fusion_items.purple1}
                        componentList={equipment}
                        defaultComponent={equipment["unknown"]}
                        returnComponent={returnComponent}
                    />

                    <FusionBox
                        name={"Purple+2"}
                        color={"prp"}
                        items={fusion_items.purple2}
                        componentList={equipment}
                        defaultComponent={equipment["unknown"]}
                        returnComponent={returnComponent}
                    />

                    <FusionBox
                        name={"Purple+3"}
                        color={"prp"}
                        items={fusion_items.purple3}
                        componentList={equipment}
                        defaultComponent={equipment["unknown"]}
                        returnComponent={returnComponent}
                    />

                    <FusionBox
                        name={"Purple+4"}
                        color={"prp"}
                        items={fusion_items.purple4}
                        componentList={equipment}
                        defaultComponent={equipment["unknown"]}
                        returnComponent={returnComponent}
                    />

                </div>

                <div className="orange-fusions">
                    <FusionBox
                        name={"Orange"}
                        color={"org"}
                        items={fusion_items.orange}
                        componentList={equipment}
                        defaultComponent={equipment["unknown"]}
                        returnComponent={returnComponent}
                    />

                    <FusionBox
                        name={"Orange+1"}
                        color={"org"}
                        items={fusion_items.orange1}
                        componentList={equipment}
                        defaultComponent={equipment["unknown"]}
                        returnComponent={returnComponent}
                    />

                    <FusionBox
                        name={"Orange+2"}
                        color={"org"}
                        items={fusion_items.orange2}
                        componentList={equipment}
                        defaultComponent={equipment["unknown"]}
                        returnComponent={returnComponent}
                    />
                </div>
            </div>
        </section>
    )
}

export default FusionItems