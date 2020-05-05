import React from 'react'

const FilterButton = props => {
    const {
        name,
        activeBtn,
        buttonHandler

    } = props

    return (
        <button
            name={name}
            className={activeBtn === name ? 'active-btn filter-btn' : 'filter-btn'}
            onClick={buttonHandler}
        >
            {name}
        </button>
    )
}

export default FilterButton