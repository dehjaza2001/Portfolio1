import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-8  '>
            I completed a considerable amount of programming throughout my three years at the
            University of Science VNUHCM, including Data Structures, and Computer Systems
            Programming, where I learned how to write optimal code. I also have a strong
            understanding of some fundamental computer science curricula, such as Object Oriented Programming, Database Systems, and Software Engineering . Those subjects helped
            me a lot in finding effective and optimal ways to solve problems.
            </p>

            <br/>

            <p className='text-xl'>
            During my learning, I discover that my most effective learning style is "learning by doing".
            Therefore, I always want to apply the knowledge accumulated from classes in doing various
            practical projects, and you can find some of them in the Porfolio section below. Those projects
            helped me to have a better comprehension of the things I had acquired. It also helped me
            improve my teamwork and verbal communication abilities.
            </p>
        </div>
    </div>
  )
}

export default About