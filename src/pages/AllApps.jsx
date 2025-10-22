import React, {useEffect, useMemo, useState} from 'react'
import appsData from '../data/apps.json'
import Spinner from '../components/Spinner'
import {useNavigate, Link} from 'react-router-dom'

export default function AllApps(){
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [sort, setSort] = useState('')

  useEffect(()=>{
    // nothing
  },[])

  useEffect(()=>{
    if(query.length>0){
      setLoading(true)
      const t = setTimeout(()=> setLoading(false), 400)
      return ()=> clearTimeout(t)
    }
  },[query])

  const filtered = useMemo(()=>{
    let list = appsData.filter(a=> a.title.toLowerCase().includes(query.toLowerCase()))
    if(sort==='high') list = list.slice().sort((a,b)=> b.downloads - a.downloads)
    if(sort==='low') list = list.slice().sort((a,b)=> a.downloads - b.downloads)
    return list
  },[query, sort])

  return (
    <div className="page all-apps">
      <section className="apps-hero" style={{background:'#f7f7fb',padding:'28px 0'}}>
        <div className="container">
          <div className="hero-inner">
            <h2>Our All Applications</h2>
            <p>Explore All Apps on the Market developed by us. We code for Millions</p>
          </div>
        </div>
      </section>

      <div className="controls">
        <div className="left">{filtered.length} Apps Found</div>
        <div className="right">
          <input placeholder="Search Apps" value={query} onChange={e=> setQuery(e.target.value)} />
          {loading && <span style={{marginLeft:8}}><Spinner size={18} /></span>}
          <select value={sort} onChange={e=> setSort(e.target.value)}>
            <option value="">Sort by</option>
            <option value="high">High-Low</option>
            <option value="low">Low-High</option>
          </select>
        </div>
      </div>

      {loading && <div className="loading">Searching...</div>}

      <div className="container">
        <div className="apps-grid all">
          {filtered.length===0 && !loading && <div className="notfound">No App Found</div>}
          {filtered.map(a=> (
            <Link key={a.id} to={`/apps/${a.id}`} className="app-card small">
              <div style={{display:'flex',gap:12}}>
                <div style={{width:120}} className="thumb"><img src={a.image} alt={a.title} /></div>
                <div className="meta">
                  <h4>{a.title}</h4>
                  <div className="small">{a.downloads.toLocaleString()} downloads • {a.ratingAvg}★</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
