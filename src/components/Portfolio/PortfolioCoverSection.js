import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/character.png"

const PortfolioSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
       

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl text-center lg:text-left'>
            Webdesign
            </h2>
            <h3>
              Case Panoramataxi
            </h3>
            <br></br>
            <p>
              Meer klanten
            </p>
            <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl text-center lg:text-left'>
            Web-applicaties
            </h2>
            <h3>
              Itisalat
            </h3>
            <br></br>
            <p>
              Meer mensen
            </p>

     
        </div>
    </section>
  )
}

export default PortfolioSection
