import React from 'react'

//Components
import { academyTrees } from '../academy-trees/index'
import Defense from '../academy-trees/trees/Defense'

//Utils
import { returnComponent } from '../../utils'

const HeroicAcademyTrees = ({ trees }) => {

    return (
        <section id="academy" className="guide-section">
            <div className="tree-one section-body">
                {/* {
                    trees &&
                    returnComponent(trees[0], 1, academyTrees, academyTrees['defense'])
                } */}
                <Defense type="normal" />
            </div>

            <div className="tree-two section-body">
                {
                    trees &&
                    returnComponent(trees[1], 2, academyTrees, academyTrees['defense'])
                }
            </div>
        </section>
    )
}

export default HeroicAcademyTrees