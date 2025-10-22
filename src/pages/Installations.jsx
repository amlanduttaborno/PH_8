import React, {useEffect, useState} from 'react'
import appsData from '../data/apps.json'
import { useToast } from '../components/ToastProvider'
import Spinner from '../components/Spinner'

export default function Installations(){
  const [installed, setInstalled] = useState([])
  const toast = useToast()
  const [busyId, setBusyId] = useState(null)

  useEffect(()=>{
    load()
  },[])

  function load(){
    const list = JSON.parse(localStorage.getItem('installed')||'[]')
    const items = appsData.filter(a=> list.includes(a.id))
    setInstalled(items)
  }

  function uninstall(id){
    setBusyId(id)
    setTimeout(()=>{
      const list = JSON.parse(localStorage.getItem('installed')||'[]').filter(x=> x!==id)
      localStorage.setItem('installed', JSON.stringify(list))
      setInstalled(prev=> prev.filter(p=> p.id!==id))
      setBusyId(null)
      toast.push('App uninstalled', 'info')
    }, 300)
  }

  return (
    <div className="page installations">
      <section className="install-hero" style={{background:'#f7f7fb',padding:'28px 0'}}>
        <div className="container">
          <h2>Your Installed Apps</h2>
          <p>Explore All Trending Apps on the Market developed by us.</p>
        </div>
      </section>

      <div className="container">
        <div className="install-controls" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:20}}>
          <div className="left-count">{installed.length} Apps Found</div>
          <div className="right-sort">
            <select>
              <option>Sort By Size</option>
              <option>High-Low</option>
              <option>Low-High</option>
            </select>
          </div>
        </div>

        <div className="installed-list">
          {installed.length===0 && <div className="empty">No apps installed</div>}
          {installed.map(a=> (
            <div key={a.id} className="install-row card">
              <div className="left">
                <img src={a.image} alt={a.title} />
              </div>
              <div className="center">
                <h4>{a.title}</h4>
                <div className="small meta">{a.downloads.toLocaleString()} • {a.ratingAvg}★ • {a.size} MB</div>
              </div>
              <div className="right">
                <button className="btn uninstall" onClick={()=> uninstall(a.id)}>{busyId===a.id? '...' : 'Uninstall'}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
