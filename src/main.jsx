import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Live from './pages/Live'
import Upload from './pages/Upload'
import About from './pages/About'
import Layout from './components/Layout'
import './index.css'

function RouteWithLayout({ children }) {
  return <Layout>{children}</Layout>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/live" element={<RouteWithLayout><Live /></RouteWithLayout>} />
        <Route path="/upload" element={<RouteWithLayout><Upload /></RouteWithLayout>} />
        <Route path="/about" element={<RouteWithLayout><About /></RouteWithLayout>} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
