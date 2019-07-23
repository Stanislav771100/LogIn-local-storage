import React from 'react'
import './App.css'
import Logout from './componets/Logout'
import Signin from './componets/Signin'
import { BrowserRouter, Route } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route path='/' exact component={Signin} />
        <Route path='/Logout' component={Logout} />
      </div>
    </BrowserRouter>
  )
}

export default App
