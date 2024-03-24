import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          {/* <ThemeProvider> */}
          <div className='max-w-screen-2xl mx-auto'>
            <RouterProvider router={router} />
          </div>
          {/* </ThemeProvider> */}
        </QueryClientProvider>

      </HelmetProvider>
    </AuthProvider>

  </React.StrictMode>,
)
