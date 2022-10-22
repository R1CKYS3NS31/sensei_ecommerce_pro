import React from 'react'
import { useLocation } from 'react-router-dom'

export const Success = () => {
    const location = useLocation()
    console.log(location);
    return (
        <div>
            <h1>Successfull Payment to Sensei E-commerce</h1>
        </div>
    )
}
