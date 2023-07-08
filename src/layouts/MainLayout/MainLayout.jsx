import Footer from 'components/Footer'
import Header from 'components/Header'
import PropTypes from 'prop-types'
import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
