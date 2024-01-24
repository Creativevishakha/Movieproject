import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import Search from './Search.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Search>
  <BrowserRouter>
  <App />
</BrowserRouter>,
</Search>
)
