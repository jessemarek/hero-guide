import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

//Components
import CreditCard from './CreditCard'

//Utils
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { returnCreditsData } from '../utils/returnCreditsData'

const Credits = () => {

    const [credits, setCredits] = useState(null)

    //Load data from server
    useEffect(() => {
        axiosWithAuth()
            .get('/api/credits')
            .then(res => {
                setCredits(returnCreditsData(res.data))
            })
            .catch(err => console.log(err.response))
    }, [])

    //Change Title
    useEffect(() => {
        document.title = 'SH Hero Guide -- Credits'

        return () => {
            document.title = 'Soul Hunters Hero Guide'
        }
    }, [])

    //Change <body> class for credits page styling and remove when <Credits /> unmounts
    useEffect(() => {
        document.querySelector('body').classList.add('credits-page')

        return () => {
            document.querySelector('body').classList.remove('credits-page')
        }
    }, [])

    /************************* JSX *************************/
    return (
        <>
            <header>
                <h1>Credits</h1>
            </header>

            <div className="wrapper">
                <section>
                    <div>
                        <h4 className="credit-title">Images</h4>

                        <p className="credit-description-text">These Heroes have helped with all the images on the Site by
                extraction or editing</p>
                    </div>

                    <div className="credits-box">

                        <ul className="hero-menus">
                            {
                                credits &&
                                credits.images.map(item => <CreditCard key={uuid()} data={item} />)
                            }
                        </ul>
                    </div>
                </section>

                <section>
                    <h4 className="credit-title">Code Monkies</h4>

                    <p className="credit-description-text">These Heroes have contributed by constructing HTML, CSS or JS code for
            the Site</p>

                    <div className="credits-box">

                        <ul className="hero-menus">
                            {
                                credits &&
                                credits.code_monkies.map(item => <CreditCard key={uuid()} data={item} />)
                            }
                        </ul>
                    </div>
                </section>

                <section>
                    <h4 className="credit-title">Data Mining</h4>

                    <p className="credit-description-text">These Heroes have contributed by providing data on numerous guide
            elements such as: Awakening Quests, Hero Stats, Ability Details, etc.</p>

                    <div className="credits-box">

                        <ul className="hero-menus">
                            {
                                credits &&
                                credits.data_mining.map(item => <CreditCard key={uuid()} data={item} />)
                            }
                        </ul>
                    </div>
                </section>

                <section>
                    <h4 className="credit-title">QA | Testing</h4>

                    <p className="credit-description-text">These Heroes have contibuted by helping test the Site before release</p>

                    <div className="credits-box">

                        <ul className="hero-menus">
                            {
                                credits &&
                                credits.testing.map(item => <CreditCard key={uuid()} data={item} />)
                            }
                        </ul>
                    </div>
                </section>

                <section>
                    <h4 className="credit-title">Forge Master</h4>

                    <p className="credit-description-text">Our Heroic Forge Master compiled an exhaustive list of data on just about
            everything relating to The Forge and Runestones</p>

                    <div className="credits-box">

                        <ul className="hero-menus">
                            {
                                credits &&
                                credits.forge.map(item => <CreditCard key={uuid()} data={item} />)
                            }
                        </ul>
                    </div>
                </section>

                <section>
                    <h4 className="credit-title">Furnace Smelters</h4>

                    <p className="credit-description-text">These Heroes have contributed by melting down precious equipment in the
            Furnace... FOR SCIENCE!!!!</p>

                    <div className="credits-box">

                        <ul className="hero-menus">
                            {
                                credits &&
                                credits.furnace.map(item => <CreditCard key={uuid()} data={item} />)
                            }
                        </ul>
                    </div>

                </section>

                <section>
                    <h4 className="credit-title">Heroic Academy Instructor</h4>

                    <p className="credit-description-text">Our resident Heroic Academy Expert provided the details on the Skills
            available in the Academy</p>

                    <div className="credits-box">

                        <ul className="hero-menus">
                            {
                                credits &&
                                credits.academy.map(item => <CreditCard key={uuid()} data={item} />)
                            }
                        </ul>
                    </div>
                </section>

                <section>
                    <h4 className="credit-title">Built By</h4>

                    <div className="credits-box">

                        <ul className="hero-menus">
                            {
                                credits &&
                                credits.built_by.map(item => <CreditCard key={uuid()} data={item} />)
                            }
                        </ul>
                    </div>
                </section>

                <section>
                    <h4 className="credit-title">Special Thanks</h4>

                    <div className="credits-box">

                        <ul className="hero-menus">
                            {
                                credits &&
                                credits.special_thanks.map(item => <CreditCard key={uuid()} data={item} />)
                            }
                        </ul>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Credits