import React from 'react'
import Info from './Info'
import Plan from './Plan'
import Ons from './Ons'
import Submit from './submit'
import Summary from './Summary'
const Slides = ({index,setName,name,setEmail,email,setPhone,phone,nameerr,setEmailerr,emailerr,phoneerr,chosePlan,setChosePlan}) => {
  return (
    <div>
      {index === 0 &&  <Info phoneerr={phoneerr} setEmailerr={setEmailerr} emailerr={emailerr} nameerr={nameerr} setPhone={setPhone} phone={phone} email={email} setEmail={setEmail} setName={setName} name={name}/>}
      {index === 1 && <Plan setChosePlan={setChosePlan} chosePlan={chosePlan}/>}
      {index === 2 && <Ons/>}
      {index === 3 && <Summary/>}
      {index === 4 && <Submit/>}
    </div>
  )
}

export default Slides