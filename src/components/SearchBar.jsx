import React, { useState } from 'react'

const SearchBar = props => {

    const [searchField, setSearchField] = useState('')

    const inputHandler = e =>{
        const value = e.target.value
        setSearchField(value)
    }

    return(
        <div className="filter-btns">
            <button className="filter-btn">All</button>
            <button className="filter-btn">Front</button>
            <button className="filter-btn">Mid</button>
            <button className="filter-btn">Back</button>

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