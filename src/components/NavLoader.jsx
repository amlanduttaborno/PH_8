import React, {useEffect, useState, useRef} from 'react'
import { useLocation } from 'react-router-dom'
import Spinner from './Spinner'

// Simple loader that shows a spinner briefly on route change
export default function NavLoader(){
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const prev = useRef(location.pathname)

  useEffect(()=>{
    if(prev.current !== location.pathname){
      setLoading(true)
      const t = setTimeout(()=> setLoading(false), 350)
      prev.current = location.pathname
      return ()=> clearTimeout(t)
    }
  },[location])

  if(!loading) return null
  return (
    <div style={{position:'fixed',left:0,right:0,top:72,display:'flex',justifyContent:'center',zIndex:1100}}>
      <div style={{background:'rgba(255,255,255,0.9)',padding:8,borderRadius:20,boxShadow:'0 6px 20px rgba(11,16,34,0.08)'}}>
        <Spinner size={20} />
      </div>
    </div>
  )
}
