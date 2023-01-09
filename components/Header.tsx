import React from 'react'
import Image from 'next/image'
function Header() {
  return (
    <header>
      <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
        <Image
          alt="pic"
          src="https://rb.gy/vsvv2o"
          fill={true}
          objectFit="contain"
        ></Image>
      </div>
    </header>
  )
}

export default Header