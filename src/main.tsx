import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {QueryClientProvider} from "@tanstack/react-query";
import queryClient from "@/utils/functions/queryClient";
const { mock } = await import('./mocks/browser.ts');
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient()}>
         <App />
      </QueryClientProvider>
  </React.StrictMode>,
)

mock.start();