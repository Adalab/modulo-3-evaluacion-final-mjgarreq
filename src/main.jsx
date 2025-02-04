/* import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) //cogeme del index.html el elemento con id root y ejecutamente el archivo App

*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
) //cogeme del index.html el elemento con id root y ejecutamente el archivo App
