import React, { useState } from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'

const SearchBar = props => {

    const { url } = useRouteMatch()

    const [searchField, setSearchField] = useState('')

    const inputHandler = e =>{
        const value = e.target.value
        setSearchField(value)
    }

    return(
        <div className="filter-btns">
            <NavLink to={url} exact activeClassName="active-btn" className="filter-btn">All</NavLink>
            <NavLink to={`${url}/front`} activeClassName="active-btn" className="filter-btn">Front</NavLink>
            <NavLink to={`${url}/mid`} activeClassName="active-btn" className="filter-btn">Mid</NavLink>
            <NavLink to={`${url}/back`} activeClassName="active-btn" className="filter-btn">Back</NavLink>

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