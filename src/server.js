import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './components/App'

const app = express()

app.use(express.static('assets'))

app.get('*', (req, res) => {
  res.render('index.ejs', {
    ssr: renderToString(<StaticRouter location={req.url}><App /></StaticRouter>),
  })
})

app.listen(8888, () => {
  console.log('http://localhost:8888/')
})
