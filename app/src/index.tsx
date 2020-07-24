import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollTop from 'Components/ScrollTop'
import App from './App'
import './Styles/tailwind.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollTop />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
