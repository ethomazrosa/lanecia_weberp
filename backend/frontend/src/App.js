import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

// Components
import Auth from './components/Auth'
import ResponsiveDrawer from './components/Drawer'
import Dashboard from './components/Dashboard'
import Quote from './components/Quote'
import Profile from './components/Profile'

const theme = createTheme({
    palette: {
        primary: {
          main: '#FFA836', // Orange
        },
        secondary: {
          main: '#FFD7B5', // Light Orange
        },
        background: {
          default: '#FBFBFB', // Light Grey
        },
      },
});

function App() {

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ResponsiveDrawer content={<Dashboard />} />} />
                    <Route path='auth/' element={<Auth />} />
                    <Route path='quote/' element={<ResponsiveDrawer content={<Quote />} />} />
                    <Route path='profile/' element={<ResponsiveDrawer content={<Profile />} />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
