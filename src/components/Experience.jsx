import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
//import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
const Experience = () => {

    const techs = [
        {
            id: 1 ,
            src : html, 
            color : "shadow-orange-500",
            name : "HTML"
        },
        {
            id: 2 ,
            src : css, 
            color : "shadow-blue-500",
            name : "CSS"
        },
        {
            id: 3 ,
            src : javascript, 
            color : "shadow-yellow-500",
            name : "JavaScript"
        },
        {
            id: 4 ,
            src : nextjs, 
            color : "shadow-white",
            name : "Next JS"
        },
        {
            id: 5 ,
            src : tailwind, 
            color : "shadow-sky-400",
            name : "Tailwind"
        },
        {
            id: 6 ,
            src : github, 
            color : "shadow-gray-400",
            name : "Github"
        },
        {
            id: 7 ,
            src : reactImage, 
            color : "shadow-blue-600",
            name : "React"
        },
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full md:h-screen text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'> 
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                <p className='py-6'>These are some technologies I've work with</p>
            </div>

            <div className='w-full grid sm:grid-cols-3 gap-8 text-center grid-cols-2 py-8 px-12 sm:px-0'>
                { techs.map(({id,src,color,name}) => (
                    <div key = {id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${color}`}>
                        <img src={src} alt="" className='w-24 mx-auto'/>
                        <p className='mt-4'>{name}</p>
                    </div>
                ))}
               
            </div>
        </div>
    </div>
  )
}

export default Experience