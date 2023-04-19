import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './pages/App'

// router to change the redirect to pages npm i react-bootstrap
import { BrowserRouter as Router } from 'react-router-dom'
// we can use Router instead of using long name BrowseRouter 

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <Router>
      <App />
    </Router>
  </>
);