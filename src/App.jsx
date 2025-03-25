import { useState } from 'react'
import './App.css'
import Dashbord from './components/Dashbord'
import Sidbar from './components/Sidbar'

function App() {
  const [sideBarToggole, setSideBarToggole] = useState(false);

  return (
    <div className='flex'>
      <Sidbar sideBarToggole={sideBarToggole} />
      <Dashbord 
        sideBarToggole={sideBarToggole} 
        setSideBarToggole={setSideBarToggole}
      />
    </div>
  )
}

export default App