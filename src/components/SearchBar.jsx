import React, { useState } from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import FilterButton from './FilterButton'

const SearchBar = props => {

    const { url } = useRouteMatch()

    /******************** State ********************/
    const [activeBtn, setActiveBtn] = useState('all')

    const [searchField, setSearchField] = useState('')

    /******************** CallBacks ********************/
    const buttonHandler = e => {
        const name = e.target.name
        setActiveBtn(name)
    }

    const inputHandler = e =>{
        const value = e.target.value
        setSearchField(value)
    }

    return(
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