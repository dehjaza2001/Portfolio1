import React from 'react'
import petapp from "../assets/portfolio/petapp.png";
import ledis from "../assets/portfolio/ledis.png";
import minisearch from "../assets/portfolio/minisearch.png";
import ocular from "../assets/portfolio/ocular.png";
import footballreport from "../assets/portfolio/footballreport.png";

const Porfolio = () => {
    const projects =[
        {
            id : 1,
            src : petapp,
            demo : "https://drive.google.com/file/d/13KuDfb5GQWSz4xxRu3nj_eQ-x0y3wBp3/view?usp=sharing" ,
            code : "https://github.com/dehjaza2001/FinalProject_MobileApplication-1",
            report : false
        },
        {
            id : 2,
            src : ledis,
            demo : "https://dehjaza2001.github.io/LEDIS-DEMO/",
            code : "https://github.com/dehjaza2001/Ledis2" ,
            report : false,
        },
        {
            id : 3,
            src : minisearch,
            demo : "",
            code : "https://github.com/dehjaza2001/Project_CS163",
            report : false
        },
        {
            id : 4,
            src : ocular,
            code : "",
            demo : "https://drive.google.com/file/d/1uEijQJfslN2Qeu5Xa-TM4lLFNH6KR1Pm/view?usp=sharing",
            report : true
        },
        {
            id : 5,
            src : footballreport,
            code : "",
            demo : "https://drive.google.com/file/d/1IOsXVRRzyoIxIc41M619dzdg6-bdCwKD/view?usp=sharing",
            report : true
        },
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full md:h-full text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6 text-xl'>Check out some of my work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {projects.map(({id,src,demo,code,report})=>(
                    <div id ={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img  src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    {report ? (
                    <div className='flex items-center justify-center'>
                    <a href={demo}>
                    <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Report</button>
                    </a>
                        
                    </div>
                    ) : (
                    <div className='flex items-center justify-center'>
                    <a href={demo}>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    </a>
                    <a href={code} >
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </a>                           
                    </div>
                    )}
                    
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Porfolio