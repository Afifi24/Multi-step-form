import React,{useState} from 'react'
import {Routes,Route} from 'react-router-dom'
// import {Ons, Info, Nav, Plan,Summary} from './components/index'
import Info from './components/Info'
import Ons from './components/Ons'
import Plan from './components/Plan'
import Summary from './components/Summary'
import Nav from './components/Nav'
import Slides from './components/Slides'
const App = () => {
  const [index, setIndex] = useState(0)
  const nextItem = ()=> {
    setIndex(index +1)
    if(index >=3)
    setIndex(3)
  }
  const backItem = ()=> {
    setIndex(index - 1)
  }
  return (
    <div className=' flex Hero min-h-screen  md:items-center md:justify-center md:p-10'>
       <div className=' flex-col w-full  md:bg-white md:w-2/3 flex rounded-lg md:gap-16 md:pr-10   md:p-3 md:flex-row'>
       <Nav index={index}/>
       <Slides index={index}/>
       
       <button onClick={nextItem} className='bg-blue-800 absolute bottom-4 left-[70%] rounded-md py-2 px-4 text-white'>  {index ===3 ? 'confirm':'Next Step'}</button>
       <button onClick={backItem}  className={`bg-blue-800 ${index >= 1 ? 'block': 'hidden'} absolute bottom-4 left-[47%] rounded-md py-2 px-4 text-white`}>Back</button>
       </div>
    </div>
  )
}

export default App