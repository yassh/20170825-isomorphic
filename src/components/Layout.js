import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout(props) {
  const { children } = props

  return (
    <div>
      <h1>App</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About us</Link></li>
      </ul>
      { children }
    </div>
  )
}
