import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <div>
        <nav className='navigation'>
            <ul>
            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/blogs'><li>Blogs</li></Link>
            <Link href='/contact'><li>Contact</li></Link>
            </ul>
      </nav>
    </div>
  )
}

export default navbar