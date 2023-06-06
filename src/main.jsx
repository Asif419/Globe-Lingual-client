import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import AuthProviders from './providers/AuthProviders'
import ThemeProvider from './providers/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProviders>
  </React.StrictMode>,
)
