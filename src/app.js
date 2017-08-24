import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'

render(
  <BrowserRouter>
    <Layout>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Layout>
  </BrowserRouter>,
  document.getElementById('app'),
)
