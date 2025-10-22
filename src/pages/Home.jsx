import React, {useEffect, useState} from 'react'
import appsData from '../data/apps.json'
import {useNavigate, Link} from 'react-router-dom'

function StateCard({title, value, sub}){
  return (
    <div className="state-card">
      <h3>{value}</h3>
      <p>{title}</p>
      <small>{sub}</small>
    </div>
  )
}

export default function Home(){
  const navigate = useNavigate()
  const [topApps, setTopApps] = useState([])

  useEffect(()=>{
    setTopApps(appsData.slice(0,8))
  },[])

  return (
    <div className="page home">
      <section className="banner">
        <div className="container banner-inner">
          <div className="banner-copy">
            <h1>We Build <span className="accent">Productive</span> Apps</h1>
            <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className="banner-actions">
              <a className="btn store-btn" href="https://play.google.com" target="_blank" rel="noreferrer">
                <svg className="store-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M3.6 2.2l9.8 6.1-4.3 4.3L3.6 2.2z" fill="#00A0FF"/>
                  <path d="M3.6 21.8l5.5-6.3 4.3 4.3-9.8 2z" fill="#00C853"/>
                  <path d="M14.2 8.3l6.2-4.4-2.8 10.1-3.4-5.7z" fill="#FFD400"/>
                  <path d="M9.1 12.1l4.3-4.3 3.4 5.7-7.7-1.4z" fill="#FF3D00"/>
                </svg>
                <span>Google Play</span>
              </a>
              <a className="btn store-btn outline" href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                <svg className="store-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M16.365 1.43c.15 1.03.61 1.94 1.28 2.61.64.64 1.58 1.12 2.6 1.27-.28.43-.55.86-.86 1.26-.57.75-1.28 1.44-2.09 2.03-.67.49-1.33.82-2.04.97-.31.06-.64.09-.98.09-.35 0-.69-.03-1.03-.11-.66-.15-1.33-.45-2.03-.88-.78-.48-1.48-1.08-2.09-1.79C6.2 7.08 5.6 6.04 5.2 4.88c-.18-.47-.31-.95-.38-1.44C4.68 2.68 4.7 2.42 4.74 2.16 6.07 1.9 7.51 2 8.9 2.4c.7.19 1.36.45 1.98.79.58.32 1.12.71 1.6 1.17.18.17.35.34.51.52.25-.3.52-.58.83-.83.63-.51 1.35-.86 2.05-1.07.59-.17 1.2-.29 1.82-.31-.09.02-.17.05-.26.07z" fill="#111"/>
                </svg>
                <span>App Store</span>
              </a>
            </div>
          </div>
          <div className="banner-visual">
            <img src="/assets/hero.png" alt="hero" className="hero-img" />
          </div>
        </div>
      </section>

      <section className="stats-cards container">
        <StateCard title="Total Downloads" value="29.6M" sub="21% More Than Last Month" />
        <StateCard title="Total Reviews" value="906K" sub="40% More Than Last Month" />
        <StateCard title="Active Apps" value="132+" sub="31 New Will Launch" />
      </section>

      <section className="ribbon">
        <div className="container">
          <div className="ribbon-inner">
            <h3>Trusted By Millions, Built For You</h3>
            <div className="ribbon-stats">
              <div><strong>29.6M</strong><div className="muted">Total Downloads</div></div>
              <div><strong>906K</strong><div className="muted">Total Reviews</div></div>
              <div><strong>132+</strong><div className="muted">Active Apps</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="top-apps container">
        <h2>Trending Apps</h2>
        <div className="apps-grid">
          {topApps.map(a=> (
            <Link key={a.id} to={`/apps/${a.id}`} className="app-card">
              <div className="thumb"><img src={a.image} alt={a.title} /></div>
              <div className="meta">
                <h4>{a.title}</h4>
                <div className="small">{a.downloads.toLocaleString()} downloads • {a.ratingAvg}★</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="center"><button className="btn" onClick={()=> navigate('/apps')}>Show All</button></div>
      </section>
    </div>
  )
}
