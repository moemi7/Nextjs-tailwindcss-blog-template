import { sortBlogs } from '@/src/utils'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Tag from '../Elements/Tag';
import { slug } from 'github-slugger';

const Hero = ({blogs}) => {

    const sortedBlogs = sortBlogs(blogs);
    const blog = sortedBlogs[0];

  return (
    <div>
    <div className=''>
     
        <Image src={'/sun.jpg'}
        placeholder='blur'
        blurDataURL={'blog.image.blurhashDataUrl'}
        alt={'blog.title'}
        fill
        className='w-full h-full object-center object-cover rounded-3xl -z-10'
        sizes='50vw'
        priority
        />

       
    </div>
    </div>
  )

}

export default Hero