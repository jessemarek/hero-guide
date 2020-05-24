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

//Takes in a number from the hero's abilities array and returns the corresponding ability type
export const returnType = num => {

    switch (num) {
        case 1:
            return 'Ultimate Ability'

        case 2:
            return <>Unlocks with <span className="grn-txt">Green Fusion</span></>

        case 3:
            return <>Unlocks with <span className="blu-txt">Blue Fusion</span></>

        case 4:
            return <>Unlocks with <span className="prp-txt">Purple Fusion</span></>

        case 5:
            return <>Unlocks with <span className="org-txt">Awakening</span></>
    }

}