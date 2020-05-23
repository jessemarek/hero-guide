import React from 'react'

//Returns a matching fusion item component from data in props
//Otherwise returns <DefaultComponent /> if no match is found
export const returnComponent = (key, id, componentList, DefaultComponent) => {
    const TagName = componentList[key]
    if (TagName) return <TagName key={id} />

    else return <DefaultComponent key={id} />
}

//Callback for alphabetizing Hero names 
export const alphabetize = (a, b) => {
    const heroA = a.name
    const heroB = b.name

    let comparison = 0

    if (heroA > heroB) {
        comparison = 1
    }
    else if (heroA < heroB) {
        comparison = -1
    }

    return comparison
}