import '@fontsource/uncut-sans/400.css'
import '@fontsource/uncut-sans/500.css'
import '@fontsource/caveat/500.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/tokens.css'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
