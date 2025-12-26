import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if (typeof window !== 'undefined' && 'CSS' in window && 'registerProperty' in window.CSS) {
  try {
    window.CSS.registerProperty({
      name: '--angle',
      syntax: '<angle>',
      initialValue: '0deg',
      inherits: false,
    });
  } catch (e) {
    // Ignore if already registered
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
