import React from 'react'
import './layout'

function Layout({children}) {
  return (
    <div className='Layout'>
        {children}
    </div>
  )
}

export default Layout