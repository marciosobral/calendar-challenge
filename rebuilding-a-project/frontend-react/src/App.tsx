/* import { AppRoutes } from './Routes' */
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [state, setState] = useState(null)
  useEffect(function(){
    fetch('https://api.github.com/users/yuriqpaiva').then(result => 
    result.json()).then(result => setState(result))
  }, [])
  return (
    <>
      <pre>{JSON.stringify(state)}</pre>
      {/* <AppRoutes /> */}
    </>
  )
}

export default App
