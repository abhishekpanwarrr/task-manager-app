import React from 'react'
import { FaBeer } from 'react-icons/fa'
import { BsToggleOff } from 'react-icons/bs'

const Header = () => {
    return (
        <div className='header'>
           <FaBeer className='header_left' />
           <ul className='header_right'>
            <li><BsToggleOff /></li>
           </ul>
        </div>
    )
}

export default Header
