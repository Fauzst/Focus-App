import { useState } from 'react'

//Components
import Navigation from './components/Navigation'
import Main from './components/Main'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='grid grid-cols-1 grid-rows-12 lg:grid-cols-6 lg:grid-rows-12 w-screen h-screen'>
      <div className="bg-red-600 row-span-1 lg:row-span-1 lg:col-span-6"></div>
      <div className="bg-green-400 max-lg:hidden lg:row-span-11 lg:col-span-1 lg:visible">
        <Navigation />
      </div>
      <div className="bg-purple-600 row-span-11 lg:row-span-11 lg:col-span-5">
        <Main />
      </div>
     </div>
     <div className='bg-green-600 h-20 w-20 fixed right-8 bottom-12 rounded-full lg:hidden'></div>
    </>
  )
}

export default App
