import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'

export default function App() {
  return (
    <div>
      <h1>App</h1>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About us</Link></li>
      </ul>

      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </div>
  )
}
