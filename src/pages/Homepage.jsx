import React from 'react'
import { Announcement } from '../components/Announcement'
import { Categories } from '../components/Categories'
import { NavBar } from '../components/NavBar'
import { Slider } from '../components/Slider'

export const Homepage = () => {
    return (
        <div>
            <Announcement/>
            <NavBar/>
            <Slider/>
            <Categories/>
        </div>
    )
}
