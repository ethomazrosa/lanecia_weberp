import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Auth from './components/Auth'
import ResponsiveDrawer from './components/Drawer'
import Dashboard from './components/Dashboard'
import Quote from './components/Quote'
import Profile from './components/Profile'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ResponsiveDrawer content={<Dashboard />} />} />
                <Route path='auth/' element={<Auth />} />
                <Route path='quote/' element={<ResponsiveDrawer content={<Quote />} />} />
                <Route path='profile/' element={<ResponsiveDrawer content={<Profile />} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
