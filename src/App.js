import React from 'react'
import Prac from './Prac'
import Mobile from './Mobile'
import {RecoilRoot} from 'recoil'
import {Route, Routes} from 'react-router-dom'


const App = () => {
  return (

    <>
    <RecoilRoot>
      <Routes>
        <Route path='/' element={<Prac/>}></Route>
        <Route path='/mobile' element={<Mobile/>}></Route>
      </Routes>
    </RecoilRoot>
    
    
    </>
    
  )
}

export default App