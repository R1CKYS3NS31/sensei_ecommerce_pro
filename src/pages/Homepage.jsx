import React from 'react'
import { Announcement } from '../components/announcement/Announcement'
import { Categories } from '../components/categories/Categories'
import { NavBar } from '../components/navBar/NavBar'
import { Products } from '../components/products/Products'
import { Slider } from '../components/slider/Slider'

export const Homepage = () => {
    return (
        <div>
            <Announcement/>
            <NavBar/>
            <Slider/>
            <Categories/>
            <Products/>
        </div>
    )
}
