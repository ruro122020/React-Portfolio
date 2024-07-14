import React from 'react'
import Link from './Link'
import links from './linksinfo'

const NavLinks = () => {
  return (
    <div className='md:flex flex-col pl-3 pb-3'>
      {links.map(({ route, title }) => <Link key={title} route={route} title={title} />)}
    </div>
  )
}

export default NavLinks
