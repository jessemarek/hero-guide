import React from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {

    const { pathname } = useLocation()

    return (
        <footer
            className={(
                pathname.includes('/heroes/') ||
                pathname.includes('/awakenings/') ||
                pathname.includes('/guides/')) ?
                'side-footer' : ''}
        >
            <p>Copyright 2020 The Last Sentinel™ -- All Rights Reserved</p>
        </footer>
    )
}

export default Footer