import React,{useState} from 'react'
import Nav from './components/Nav'
import Slides from './components/Slides'
const App = () => {
  const [index, setIndex] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  // ! errors
  const [nameerr, setNameerr] = useState()
  const [emailerr, setEmailerr] = useState()
  const [phoneerr, setPhoneerr] = useState()
  const [chosePlan, setChosePlan] = useState('Arcadem')
  const nextItem = ()=> {
    Submitfunction()
    // setIndex(index +1)
    // if(index >=3)
    // setIndex(3)
  }
  const backItem = ()=> {
    setIndex(index - 1)
  }
  const submitplan = ()=>{
    if(chosePlan === 'Arcadem' || 'Advancedm' || 'Prom' || 'Arcadey'|| 'Advancedy' || 'Proy'){
      setIndex(index + 1)
       
    }else{
      setIndex(index)
      
    }
     
  }
  const submitinfo = () => {
    if (name && (phone && (email && email.includes('@gmail.com')))) {
      setIndex(1)
      submitplan()

    } else {
      setIndex(0);
    }
  //  name handler error
    if(name ==''){
      setNameerr('Name is invalide')
    }else{
      setNameerr('')
    }
  //  email handler error

    if(email =='' || !(email.includes('@gmail.com'))){
      setEmailerr('This field is required')
    }else{
      setEmailerr('')
    }
  //  phone handler error
  if(phone ==''){
    setPhoneerr('this field is required')
  }else{
    setPhoneerr('')
  }

  };
  const Submitfunction =()=>{
    submitinfo()

  
  }
  return (
    <div className=' flex Hero min-h-screen  md:items-center md:justify-center md:p-10'>
       <div className=' flex-col w-full  md:bg-white md:w-2/3 flex rounded-lg md:gap-16 md:pr-10   md:p-3 md:flex-row'>
       <Nav index={index}/>
       <Slides setChosePlan={setChosePlan} chosePlan={chosePlan} phoneerr={phoneerr} emailerr={emailerr} setEmailerr={setEmailerr} nameerr={nameerr} setPhone={setPhone} phone={phone} email={email} setEmail={setEmail} name={name} setName={setName} index={index}/>
       {/* desktop */}
       <div className={` ${index===4 ?'hidden':''} `}>
       <button onClick={nextItem} className={`bg-blue-800 text-[14px] ${index === 3 ? 'hover:bg-blue-400':''} absolute bottom-4 left-[70%] rounded-md py-2 px-4 text-white`}>  {index ===3 ? 'confirm':'Next Step'}</button>
       <button onClick={backItem}  className={`hover:text-blue-900 duration-200 text-gray-500 ${index >= 1 ? 'block': 'hidden'} absolute bottom-4 left-[47%] rounded-md py-2 text-[14px] px-4`}>Go Back</button>
       </div>
       {/* mobile */}
       {/* <div className={` ${index===4 ?'hidden':''} `}>
       <button onClick={nextItem} className='bg-blue-800 text-[13px] absolute bottom-4 right-5 rounded-md py-2 px-4 text-white'>  {index ===3 ? 'confirm':'Next Step'}</button>
       <button onClick={backItem}  className={` ${index >= 1 ? 'block': 'hidden'} absolute bottom-4 left-5 rounded-md py-2 px-4 text-gray-500 hover:text-blue-900 duration-200 font-semibold text-[13px]`}>Go Back</button>
       </div> */}
       </div>
    </div>
  )
}

export default App