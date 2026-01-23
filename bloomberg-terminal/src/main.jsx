import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import API_React_Test from './API_React_Test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <API_React_Test />
  </StrictMode>,
)
