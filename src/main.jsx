// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App'
import './styles/index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import Router from './Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider> 
      <RouterProvider router={Router} />
    </NextUIProvider>
  </React.StrictMode>,
)