import React from 'react'
import Header from '../../components/Header'
import './layout.css'

function Layout({children}) {
  return (
    <div className='Layout'>
        <Header/>
        {children}
    </div>
  )
}

export default Layout