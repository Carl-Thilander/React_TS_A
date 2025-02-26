import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import App from './App.tsx'
import MovieSection from './Pages/HomePage.tsx'
import MoviePage from './Pages/MoviePage.tsx'
import PastryPage from './Pages/PastryPage.tsx'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
        <Route index element={<MovieSection/>} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="pastry/:slug/:id" element={<PastryPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
