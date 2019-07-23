// import './Profile.css'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


class Singin extends Component {
  state = {
    doRedirect: false,
    login : '',
    password : ''
  }
  componentDidMount() {
    var login = localStorage.getItem('login')
    var password = localStorage.getItem('password')
    if (login && password){
      this.setState({doRedirect:true})
  } 
}
  redirectToLog = () => {
      let { login, password } = this.state
      localStorage.setItem('login', login)
      localStorage.setItem('password', password) 
      
      this.setState({
        doRedirect: true
    })

  
  }

     
  
  
  render () {
    let { login, password } = this.state
    if(this.state.doRedirect){
      return <Redirect to='/Logout' />
    }
    return (
      <div className='block_user'>
        <input value={login} onChange={(e) => { this.setState({ login: e.target.value }) }} />
        <input value={password} onChange={(e) => { this.setState({ password: e.target.value }) }} />
        <button onClick={this.redirectToLog}>Join</button>
        
      </div>
    )
    }
}

export default Singin
