import React from 'react'
import ReactDOM from 'react-dom/client'


// import App from './App.jsx'
import './index.css'
import { Approuter } from './approuter.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Approuter></Approuter>
  </React.StrictMode>,
)
