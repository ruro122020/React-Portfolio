import React from 'react'
import Link from './Link'
import links from './linksinfo'

const NavLinks = () => {
  return (
    <div className='md:flex md:p-5 md:pr-10 justify-between'>
      {links.map(({ route, title }) => {
        return (
          <div>
            <Link key={title} route={route} title={title} />
          </div>
        )
      })}
    </div>
  )
}

export default NavLinks
