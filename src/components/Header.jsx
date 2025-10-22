import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Header(){
  const navigate = useNavigate()
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo" onClick={() => navigate('/') }>
          <img src="/assets/logo.png" alt="logo" />
          <span>HERO.IO</span>
        </div>

        <nav className="nav">
          <NavLink to="/" end className={({isActive})=> isActive? 'active' : ''}>Home</NavLink>
          <NavLink to="/apps" className={({isActive})=> isActive? 'active' : ''}>Apps</NavLink>
          <NavLink to="/installation" className={({isActive})=> isActive? 'active' : ''}>Installation</NavLink>
        </nav>

        <div className="actions">
          <a className="contribute" href="https://github.com/amlanduttaborno" target="_blank" rel="noreferrer">
            <svg className="gh-icon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path fill="#fff" d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.001 8.001 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
            <span>Contribute</span>
          </a>
        </div>
      </div>
    </header>
  )
}
