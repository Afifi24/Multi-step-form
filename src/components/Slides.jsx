import React from 'react'
import Info from './Info'
import Plan from './Plan'
import Ons from './Ons'
import Summary from './Summary'
const Slides = ({index}) => {
  return (
    <div>
      {index === 0 &&  <Info/>}
      {index === 1 && <Plan/>}
      {index === 2 && <Ons/>}
      {index === 3 && <Summary/>}
    </div>
  )
}

export default Slides