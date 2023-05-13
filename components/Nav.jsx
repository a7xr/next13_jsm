
import Link from "next/link";
import Image from "next/image";

import React from 'react'

const Nav = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image 
          src="/assets/images/logo.svg"
          width={30}
          height={30}
          className="object-contain"
        ></Image>
      </Link>
    </nav>
  )
}

export default Nav