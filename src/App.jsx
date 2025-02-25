import React from 'react'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import EmergencyPage from './pages/EmergencyPage'
import ContactusPage from './pages/ContactusPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TripPlanning from './pages/TripPlanning';
import ExplorePageforPlaces from './pages/ExplorePageforPlaces'

function App() {
  return (
    <div> 
      <Routes>
       <Route path="/"  element={<LoginPage/>}  />
       <Route path="/signup"  element={<SignUpPage/>} />
       <Route path="/home"  element={<HomePage/>} />
       <Route path="/emergency"  element={<EmergencyPage/>} />
       <Route path="/contact"  element={<ContactusPage/>} />
       <Route path="/tripplanning"  element={<TripPlanning/>} />
       <Route path="/explore/:id" element={<ExplorePageforPlaces />} />
      </Routes>
    </div>
  )
}

export default App
