import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

import CreditCard from './CreditCard'

//Dummy data
import { creditsData } from '../creditsData'

const Credits = () => {

    const [credits] = useState(creditsData)

    //Change Title
    useEffect(() => {
        document.title = 'Soul Hunters Hero Guide - Credits'
    })

    //Change <body> class for credits page styling and remove when <Credits /> unmounts
    useEffect(() => {
        document.querySelector('body').classList.add('credits-page')

        return () => {
            document.querySelector('body').classList.remove('credits-page')
        }
    }, [])

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