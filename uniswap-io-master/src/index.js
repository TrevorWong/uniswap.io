import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import './index.scss'
import App from './App'

if (process.env.NODE_ENV !== 'development') {
  ReactGA.initialize('UA-128182339-2')
  ReactGA.pageview(window.location.pathname + window.location.search)
}

ReactDOM.render(<App />, document.getElementById('root'))
