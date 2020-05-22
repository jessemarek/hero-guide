import React from 'react'

const FusionItems = () => {

    //dummy data for testing
    const hero = {
        fusion_items: {
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
    }

    /************************* JSX *************************/
    return (
        <section id="fusion-items" className="guide-section">
            <div className="section-header">
                <h2>Fusions</h2>
            </div>
            <div className="section-body">
                <div className="purple-fusions">
                    <div className="fusion-box">
                        <h4><span className="prp-txt">Purple</span></h4>
                        {
                            hero.fusion_items.purple.map((i, idx) => {
                                const TagName = fusionItems[i]
                                return <TagName key={idx} />
                            })
                        }
                    </div>
                    <div className="fusion-box">
                        <h4><span className="prp-txt">Purple+1</span></h4>
                        {
                            hero.fusion_items.purple1.map((i, idx) => {
                                const TagName = fusionItems[i]
                                return <TagName key={idx} />
                            })
                        }
                    </div>
                    <div className="fusion-box">
                        <h4><span className="prp-txt">Purple+2</span></h4>
                        {
                            hero.fusion_items.purple2.map((i, idx) => {
                                const TagName = fusionItems[i]
                                return <TagName key={idx} />
                            })
                        }
                    </div>
                    <div className="fusion-box">
                        <h4><span className="prp-txt">Purple+3</span></h4>
                        {
                            hero.fusion_items.purple3.map((i, idx) => {
                                const TagName = fusionItems[i]
                                return <TagName key={idx} />
                            })
                        }
                    </div>
                    <div className="fusion-box">
                        <h4><span className="prp-txt">Purple+4</span></h4>
                        {
                            hero.fusion_items.purple4.map((i, idx) => {
                                const TagName = fusionItems[i]
                                return <TagName key={idx} />
                            })
                        }
                    </div>
                </div>

                <div className="orange-fusions">
                    <div className="fusion-box">
                        <h4><span className="org-txt">Orange</span></h4>
                        {
                            hero.fusion_items.orange.map((i, idx) => {
                                const TagName = fusionItems[i]
                                return <TagName key={idx} />
                            })
                        }
                    </div>
                    <div className="fusion-box">
                        <h4><span className="org-txt">Orange+1</span></h4>
                        {
                            hero.fusion_items.orange1.map((i, idx) => {
                                const TagName = fusionItems[i]
                                return <TagName key={idx} />
                            })
                        }
                    </div>
                    <div className="fusion-box">
                        <h4><span className="org-txt">Orange+2</span></h4>
                        {
                            hero.fusion_items.orange2.map((i, idx) => {
                                const TagName = fusionItems[i]
                                return <TagName key={idx} />
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FusionItems