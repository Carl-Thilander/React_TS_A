import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import App from './App.tsx'
import BreadPage from './Pages/BreadPage.tsx'
import HomePage from './Pages/HomePage.tsx'
import PastryPage from './Pages/PastryPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
        <Route index element={<HomePage/>} />
        <Route path="bread/:slug/:id" element={<BreadPage/>}/>
        <Route path="pastry/:slug/:id" element={<PastryPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
