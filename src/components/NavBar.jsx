import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

import {Link} from 'react-scroll'
const NavBar = () => {
const [navButton,setNavButton] = useState(false)

const links = [
    {
        id : 1,
        title : "home"
    },
    {
        id : 2,
        title : "about"
    },
    {
        id : 3,
        title : "portfolio"
    },
    {
        id : 4,
        title : "experience"
    },
    {
        id : 5,
        title : "contact"
    },
];
  return (
    <div className=' flex justify-between bg-black w-full h-20 text-white items-center fixed px-4 '>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Kevin</h1>
        </div>

        <ul className='hidden md:flex'>
            { links.map(({id,title}) => (
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-125 duration-300 '>
                <Link to={title} smooth duration={500}>{title}</Link>
                </li>
            ))}
        </ul>

        <div onClick={()=>setNavButton(!navButton)} className='cursor-pointer pr-4 z-10 text-gray-400 md:hidden'>
            {navButton ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {navButton && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-gray-700 via-gray-900 to-black">
        {links.map(({id,title})=>(
        
                <li key = {id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>{title}</li>
        ))}
        </ul>
        ) }
        
        
    </div>
  )
}

export default NavBar