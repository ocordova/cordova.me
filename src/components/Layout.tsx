import React from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
  return (
    <div className="h-screen font-plex">
      <NavBar />
      <main className="max-w-2xl mx-auto px-4 lg:px-0 mt-12">{children}</main>
      <Footer />
    </div>
  )
}
