import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'
import Footer from './footer/Footer'

const Layout = props => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {

}

export default Layout


