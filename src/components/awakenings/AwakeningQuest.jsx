import React from 'react'

//Components
import QuestOne from './QuestOne'
import QuestTwo from './QuestTwo'
import QuestThree from './QuestThree'
import SigItemRecipe from './SigItemRecipe'

//Utils
import { formatText } from '../../utils/index'

const AwakeningQuest = props => {

    const {
        name,
        awakening

    } = props

    return (
        <section id="awakening" className="guide-section">
            <div className="section-header">
                <h2>Awakening Quest</h2>
            </div>
            <div className="section-body">

                <div className="hero-art">

                    <div className="hero-card spoiler-card spoiler-off">
                        <div className="card-back">
                            <img src={`/assets/images/hero-cards/${name}.jpg`} alt={`Artwork card for ${formatText(name)}`} />
                        </div>
                        <div className="card-face">
                            <img src={`/assets/images/hero-cards-aw/${name}-aw.jpg`} alt={`Awakened artwork card for ${formatText(name)}`} />
                        </div>
                    </div>

                    <div className="hero-portrait spoiler-card spoiler-off">
                        <div className="card-back">
                            <img src={`/assets/images/icons/portraits/${name}.png`} alt={`Portrait for ${formatText(name)}`} />
                        </div>
                        <div className="card-face">
                            <img src={`/assets/images/icons/portraits-aw/${name}-aw.png`} alt={`Awakened portrait for ${formatText(name)}`} />
                        </div>

                    </div>

                    <p className="hero-quote">{`"${awakening.quote}"`}</p>
                </div>

                <div className="quest-details">

                    <div className="aw-quests">
                        <QuestOne quest_1={awakening.quest_1} sig_item={awakening.sig_item} />
                        <SigItemRecipe
                            quest_1={awakening.quest_1}
                            sig_item={awakening.sig_item}
                            sig_stats={awakening.sig_stats}
                            forge_bonus={awakening.forge_bonus}
                        />
                        <QuestTwo name={name} quest_2={awakening.quest_2} />
                        <QuestThree name={name} quest_3={awakening.quest_3} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AwakeningQuest