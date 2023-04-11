import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'

// Components
import { Auth, Dashboard, Profile, Quote, ResponsibleCompany, ResponsibleCompanyList } from './pages'
import { ResponsiveDrawer } from './components'

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
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ResponsiveDrawer content={<Dashboard />} />} />
          <Route path='auth/' element={<Auth />} />
          <Route path='quote/' element={<ResponsiveDrawer content={<Quote />} />} />
          <Route path='profile/' element={<ResponsiveDrawer content={<Profile />} />} />
          <Route path='responsible_company/' element={<ResponsiveDrawer content={<ResponsibleCompanyList />} />} />
          <Route path='responsible_company/test' element={<ResponsiveDrawer content={<ResponsibleCompany />} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
