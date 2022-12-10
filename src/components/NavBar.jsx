import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
const NavBar = () => {
const [navButton,setNavButton] = useState(false)

const links = [
    {
        id : 1,
        title : "Home"
    },
    {
        id : 2,
        title : "About"
    },
    {
        id : 3,
        title : "Porfolio"
    },
    {
        id : 4,
        title : "Experience"
    },
    {
        id : 5,
        title : "Contact"
    },
];
  return (
    <div className='bg-black w-full h-20 flex justify-between text-white items-center fixed px-4 '>
        <div>
            <h1 className='text-5xl font-signature'>Kevin</h1>
        </div>

        <ul className='hidden md:flex'>
            { links.map(({id,title}) => (
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-125 duration-300 '>
                {title}
                </li>
            ))}
        </ul>

        <div onClick={() => setNavButton(!navButton)} className='cursor-pointer pr-4 z-10 text-gray-400'>
            {navButton ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        <ul className=''>

        </ul>
    </div>
  )
}

export default NavBar