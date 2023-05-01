import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NavigationMenuProvider } from './context/NavigationMenuProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavigationMenuProvider>
      <App />
    </NavigationMenuProvider>
  </React.StrictMode>,
)
