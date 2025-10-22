import React, {createContext, useCallback, useContext, useState} from 'react'

const ToastContext = createContext(null)

export function useToast(){
  return useContext(ToastContext)
}

export default function ToastProvider({children}){
  const [toasts, setToasts] = useState([])

  const push = useCallback((message, type='info')=>{
    const id = Date.now()+Math.random()
    setToasts(t=> [{id,message,type}, ...t])
    setTimeout(()=> setToasts(t=> t.filter(x=> x.id!==id)), 3000)
  },[])

  return (
    <ToastContext.Provider value={{push}}>
      {children}
      <div className="toast-wrap">
        {toasts.map(t=> (
          <div key={t.id} className={`toast ${t.type}`}>
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
