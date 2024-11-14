import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/character.png"

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>


        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
            Over ons
            </h2>
            <p className='font-medium capitalize mt-4 text-base'>
              Your website is our masterpiece <br></br><br></br>

              Deze motto is waar sun-digital voor staat.
              We gaan tot het uiterste om jouw digitale ervaring 
              De mooiste en beste te bieden t.o.v. al uw concurrenten
              hierbij staat SEO en de vindbaarheid van uw website altijd op nummer een
            </p>
        </div>
    </section>
  )
}

export default AboutCoverSection