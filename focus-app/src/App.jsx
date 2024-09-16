import React, { createContext,useState } from 'react'

//Components
import Navigation from './components/Navigation'
import Main from './components/Main'
import './App.css'
import CircleNav from './components/CircleNav'
import Topbar from './components/Topbar'

export const PageContext = createContext();
export const userContext = createContext();

function App() {
  // Contexts
  const [userInfo, setUserInfo] = useState({
    user: 'Joshua',
    taskNumber: 3,
    tasks: [
      {
        id: 1,
        taskName: "Maglolo",
        difficulty: 1,
      },
      {
        id: 2,
        taskName: "Jabol Supol",
        difficulty: 1,
      },
      {
        id: 3,
        taskName: "Kumain",
        difficulty: 1,
      }
    ],
    reward: 0,
    isAddingTask: false,
  });

  const [currentPage, setCurrentPage] = useState('todo');

  return (
    <>
      <userContext.Provider value={[userInfo,setUserInfo]}>
      <PageContext.Provider value={[currentPage,setCurrentPage]}>
        <div className='grid grid-cols-1 grid-rows-12 lg:grid-cols-6 lg:grid-rows-12 w-screen h-screen'>
          
            <div className="bg-stone-800 row-span-1 lg:row-span-1 lg:col-span-6">
              <Topbar />  
            </div>

            <div className="bg-orange-500 max-lg:hidden lg:row-span-11 lg:col-span-1 lg:visible">
              <Navigation />
            </div>

            <div className="bg-amber-100 row-span-11 lg:row-span-11 lg:col-span-5">
              <Main />
            </div>

        </div>

        <div className='bg-green-600 h-20 w-20 fixed right-8 bottom-12 rounded-full lg:hidden'>
            <CircleNav />
        </div>
      </PageContext.Provider>
      </userContext.Provider>
    </>
  )
}

export default App
