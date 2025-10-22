import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AllApps from './pages/AllApps'
import AppDetails from './pages/AppDetails'
import Installations from './pages/Installations'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLoader from './components/NavLoader'

export default function App(){
  return (
    <div className="app-root">
      <Header />
      <NavLoader />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/apps" element={<AllApps/>} />
          <Route path="/apps/:id" element={<AppDetails/>} />
          <Route path="/installation" element={<Installations/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
