import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/font.css'
import './style/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <HelmetProvider>
    <App />
    </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
)
