import React from 'react'
import { TimeReg } from './TimeReg'
// import { Home } from './Home'
// import { Products } from './Products'



export const Main = (props) => {
  return (
    <main>
        <h1>Hoi</h1>
        <TimeReg />
        {/* {  props.activePage == 'Home' && <Home />  }
        {  props.activePage == 'Products' && <Products />  } */}
    </main>
  )
}
