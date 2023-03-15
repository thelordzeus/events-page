import React from 'react'
import FooterPage from '../footer/footer-page'
import Header from '../header/header-page'

const MainLayout = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <FooterPage/>
    </>
  )
}

export default MainLayout