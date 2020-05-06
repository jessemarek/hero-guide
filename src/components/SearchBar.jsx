import React, { useState } from 'react'
import FilterButton from './FilterButton'

const SearchBar = props => {
    const {
        activeBtn,
        searchField,
        buttonHandler,
        inputHandler

    } = props

    return(
        //Buttons for sorting heroes by battlefield position
        <div className="filter-btns">
            <FilterButton 
                name={'all'} 
                activeBtn={activeBtn} 
                buttonHandler={buttonHandler} 
            />
            <FilterButton 
                name={'front'} 
                activeBtn={activeBtn} 
                buttonHandler={buttonHandler} 
            />
            <FilterButton 
                name={'mid'} 
                activeBtn={activeBtn} 
                buttonHandler={buttonHandler} 
            />
            <FilterButton 
                name={'back'} 
                activeBtn={activeBtn} 
                buttonHandler={buttonHandler} 
            />

            {/* Input for searching by hero name */}
            <form className="filter-form">
                <label name="search">
                    <input 
                        type="text"
                        placeholder="Enter Hero Name"
                        value={searchField} 
                        onChange={inputHandler}
                    />
                </label>
            </form>
        </div>
    )
}

export default SearchBar