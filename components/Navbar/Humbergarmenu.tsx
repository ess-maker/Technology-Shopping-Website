'use client'

import Image from 'next/image'
import { useState } from 'react';
import Mobilmenu from './Mobilmenu'
import { log } from 'console';

const Humbergarmenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)
  return (
    <>
    <Mobilmenu showstate={isOpen} chagestate={() => setIsOpen(!isOpen)}  />
    <Image
    data-te-animation="[fade-in_1s_ease-in-out]"
    src="/humbergarmenu.svg"
    width={30}
    height={30}
    alt="shearchIcon"
    onClick={() => setIsOpen(!isOpen)}
    className='lg:hidden cursor-pointer h-16 w-16'
    />
    </>
  )
}

export default Humbergarmenu