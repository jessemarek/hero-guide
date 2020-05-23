import React from 'react'

const FusionBox = props => {
    const {
        name,
        color,
        items,
        componentList,
        defaultComponent,
        returnComponent

    } = props

    return (
        <div className="fusion-box">
            <h4><span className={`${color}-txt`}>{name}</span></h4>
            {
                //Dynamically load components from hero data
                items &&
                items.map((i, idx) => returnComponent(i, idx, componentList, defaultComponent))
            }

        </div>
    )
}

export default FusionBox