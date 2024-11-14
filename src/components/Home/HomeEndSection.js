import { sortBlogs } from '@/src/utils'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Tag from '../Elements/Tag';
import { slug } from 'github-slugger';

const HomeEndSection = ({blogs}) => {


  return (
    <div className='w-full inline-block h-1/2 text-white '>
       <div className='dark:bg-yellow-400 bg-black    grid dark:text-light '>
        <h1 className=' inline-block items-center flex  justify-center text-4xl'>
            Pakketten
        </h1>
        <div className='flex gap-5 items-center justify-center cols-3'>
        <div>
        <h2>
            Basis pakket
        </h2>
        <h3>
            -Website<br></br>
            -SEO<br></br>

        </h3>
        <div>
        <Image src={'/sundigital.png'}
        placeholder='blur'
        blurDataURL={'blog.image.blurhashDataUrl'}
        alt={'blog.title'}
        
        height={'32'}
        width={'32'}
        className=' '
        priority
        />
        </div>
        <p>
        ~500 
        </p>
        </div>
        <div>
        <h2>
            Uitgebreide pakket
        </h2>
        <h3>
        -Website<br></br>
        -SEO<br></br>
        </h3>
        <div>
        <Image src={'/sundigital.png'}
        placeholder='blur'
        blurDataURL={'blog.image.blurhashDataUrl'}
        alt={'blog.title'}
        
        height={'32'}
        width={'32'}
        className=' '
        priority
        />
        </div>
        <p>
        ~500
        </p>
        </div>        <div>
        <h2>
            Maatwerk
        </h2>
        <h3>
        -Website<br></br>
        -SEO<br></br>
        </h3>
        <div>
        <Image src={'/sun.jpg'}
        placeholder='blur'
        blurDataURL={'blog.image.blurhashDataUrl'}
        alt={'blog.title'}
        
        height={'32'}
        width={'32'}
        className=' '
        priority
        />
        </div>
        <p>
        ~1000
        </p>
        </div>


        </div>






       </div>
    </div>
  )
}

export default HomeEndSection