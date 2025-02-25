import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import App from './App.tsx'
import HomePage from './Pages/HomePage.tsx'
import MoviePage from './Pages/oldMoviePage.tsx'
import PastryPage from './Pages/PastryPage.tsx'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
        <Route index element={<HomePage/>} />
        <Route path="/movie" element={<MoviePage/>}/>
        <Route path="pastry/:slug/:id" element={<PastryPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
