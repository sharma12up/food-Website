import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Global from './Global.jsx'
import {BrowserRouter} from 'react-router-dom'
import GlobalStore from './app/GlobalStore.js';
import {Provider} from "react-redux"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global>
      
      <Provider store={GlobalStore}>
      <BrowserRouter>
       <App />
       </BrowserRouter>
       </Provider>
    
    </Global>
  </React.StrictMode>,
)
