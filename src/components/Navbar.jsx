import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-x-10 mb-15'>
        <NavLink className={(e)=> e.isActive ? "text-pink-500" : ""} to="/">Home</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-pink-500" : ""} to="/recipes">Recipes</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-pink-500" : ""} to="/about">About</NavLink>
    </div>
  )
}

export default Navbar