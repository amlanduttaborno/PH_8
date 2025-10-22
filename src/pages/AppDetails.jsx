import React from 'react'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import appsData from '../data/apps.json'
import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts'
import { useToast } from '../components/ToastProvider'

export default function AppDetails(){
  const {id} = useParams()
  const aid = id
  const [app, setApp] = useState(null)
  const [installed, setInstalled] = useState(false)
  const [busy, setBusy] = useState(false)
  const toast = useToast()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    const t = setTimeout(()=>{
      try{
        // match id either as number or string to be forgiving
        const found = appsData.find(a=> String(a.id) === String(aid))
        setApp(found || null)
        const installedList = JSON.parse(localStorage.getItem('installed')||'[]')
        setInstalled(found ? installedList.includes(found.id) : false)
      }catch(err){
        console.error('Error loading app details', err)
        setApp(null)
        setInstalled(false)
      } finally{
        setLoading(false)
      }
    }, 300)
    return ()=> clearTimeout(t)
  },[aid])

  if(loading) return <div className="container loading">Loading page...</div>
  if(!app) return (
    <div className="container notfound">
      <h3>App Not Found</h3>
      <p>The App you are requesting is not found on our system. please try another app</p>
    </div>
  )

  function handleInstall(){
    setBusy(true)
    setTimeout(()=>{
      const list = JSON.parse(localStorage.getItem('installed')||'[]')
      if(!list.includes(app.id)){
        list.push(app.id)
        localStorage.setItem('installed', JSON.stringify(list))
        setInstalled(true)
        toast.push(`${app.title} installed`, 'success')
      } else {
        toast.push(`${app.title} already installed`, 'info')
      }
      setBusy(false)
    }, 400)
  }

  function ratingsForChart(){
    return app.ratings.map(r=> ({name: r.name, value: r.count}))
  }

  return (
    <div className="page app-details container">
      <div className="details-row">
        <div className="left">
          <img src={app.image} alt={app.title} />
        </div>
        <div className="right">
          <h2>{app.title}</h2>
          <div className="meta-sub">Developed by <a href="#">{app.companyName}</a></div>
          <div className="metrics">
            <div className="metric">
              <img src="/assets/icon-downloads.png" alt="dl" />
              <div className="m-label">Downloads</div>
              <div className="m-value">{(app.downloads/1000000).toFixed(1)}M</div>
            </div>
            <div className="metric">
              <img src="/assets/icon-ratings.png" alt="rating" />
              <div className="m-label">Average Ratings</div>
              <div className="m-value">{app.ratingAvg}</div>
            </div>
            <div className="metric">
              <img src="/assets/icon-review.png" alt="reviews" />
              <div className="m-label">Total Reviews</div>
              <div className="m-value">{(app.reviews/1000).toFixed(0)}K</div>
            </div>
          </div>
          <div style={{marginTop:12}}>
            <button className="btn install" disabled={installed} onClick={handleInstall}>{installed? 'Installed' : `Install Now (${app.size} MB)`}</button>
          </div>
        </div>
      </div>

      <section className="chart">
        <h3>Ratings</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={ratingsForChart()} layout="vertical" margin={{left:20}}>
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="value" fill="#7b61ff" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      <section className="description">
        <h3>Description</h3>
        <p>{app.description}</p>
      </section>
    </div>
  )
}
