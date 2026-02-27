import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import Planner from './Planner'
import Login from './Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Login />
          </>
        } />
        <Route path="/planner" element={
          <>
            <Planner />
          </>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App