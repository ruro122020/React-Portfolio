import React from 'react'
import Link from './Link'
import links from './linksinfo'

const NavLinks = () => {
  return (
    <div className='md:flex md:flex-col md:pl-3 md:pb-3'>
      {links.map(({ route, title }) => <Link key={title} route={route} title={title} />)}
    </div>
  )
}

export default NavLinks
