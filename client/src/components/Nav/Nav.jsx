import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
  <>
       <button type="button" className="btn btn-outline-dark"><Link to="/">Home</Link></button>
       <button type="button" className="btn btn-outline-dark"><Link to="favorites">Profile</Link></button> 
       </> 
  )
}

export default Nav