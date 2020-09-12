import React, { useState, useEffect } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'

//Components
import SearchBar from './SearchBar'
import HeroCard from './HeroCard'
import AwakeningCard from './AwakeningCard'

//Utils
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { sortByProp } from '../../utils/index'

const HeroMenu = () => {

    const { url } = useRouteMatch()

    /************************* STATE *************************/
    //List of Heroes
    const [heroList, setHeroList] = useState([])

    //Active filter button
    const [activeBtn, setActiveBtn] = useState('all')

    //Search input value
    const [searchField, setSearchField] = useState('')

    /*********************** SIDE EFFECTS ***********************/
    //Change title
    useEffect(() => {
        document.title = `SH Hero Guide -- ${url.includes('heroes') ? 'Heroes' : ''}${url.includes('awakenings') ? 'Awakenings' : ''}`

        return () => {
            document.title = 'Soul Hunters Hero Guide'
        }
    }, [url])

    //Load Hero data from menu
    useEffect(() => {
        axiosWithAuth()
            .get('/api/heroes')
            .then(res => {
                setHeroList(res.data)
            })
            .catch(err => console.log(err.response))
    }, [])

    /*********************** CALLBACKS ***********************/
    //Filter button handler
    const buttonHandler = e => {
        const name = e.target.name
        setActiveBtn(name)
    }

    //Search input handler
    const inputHandler = e => {
        const value = e.target.value
        setSearchField(value)
    }

    //Filter heroList by the active filter button type
    const filterByButton = (hero, buttonType) => {
        return buttonType !== 'all' ? hero.position === buttonType : hero
    }

    //Filter heroList if text in the search input matches heroes name
    const filterByName = (hero, input) => {
        return input.trim() !== '' ? hero.name.toLowerCase().startsWith(input.trim().toLowerCase()) : hero
    }

    /************************* JSX *************************/
    return (
        <>
            <header>
                {/* Displays for Hero Guide Menu */}
                <Route path={'/heroes'}><h3>Hero Guides</h3></Route>

                {/* Displays for Awakening Quest Menu */}
                <Route path={'/awakenings'}><h3>Awakening Quests</h3></Route>

                <h5>Select a Hero</h5>

                <SearchBar
                    activeBtn={activeBtn}
                    searchField={searchField}
                    buttonHandler={buttonHandler}
                    inputHandler={inputHandler}
                />

            </header>

            <section className="hero-menu">
                <ul id="hero-list">

                    {/* Displays for Hero Guide Menu */}
                    <Route path={'/heroes'}>
                        {
                            heroList.length &&
                            heroList
                                //Sort through the hero list by battlefield position
                                .filter(hero => filterByButton(hero, activeBtn))
                                //Filter by search input value
                                .filter(hero => filterByName(hero, searchField))
                                //Alphabetize the Hero List by name
                                .sort(sortByProp('name'))
                                //Create a Hero Card for each hero in the list
                                .map((hero, idx) => <HeroCard key={idx + 1} hero={hero} />)
                        }
                    </Route>

                    {/* Displays for Awakening Quest Menu */}
                    <Route path={'/awakenings'}>
                        {
                            heroList.length &&
                            heroList
                                //Filter out heroes that don't have an awakening
                                .filter(hero => hero.awakened)
                                //Sort through the hero list by battlefield position
                                .filter(hero => filterByButton(hero, activeBtn))
                                //Filter by search input value
                                .filter(hero => filterByName(hero, searchField))
                                //Alphabetize the Hero List by name
                                .sort(sortByProp('name'))
                                //Create a Hero Card for each hero in the list
                                .map((hero, idx) => <AwakeningCard key={idx + 1} hero={hero} />)
                        }
                    </Route>
                </ul>
            </section>
        </>
    )
}

export default HeroMenu