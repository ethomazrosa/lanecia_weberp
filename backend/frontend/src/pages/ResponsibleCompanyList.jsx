import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

function ResponsibleCompany() {
  return (
    <>
        <Typography>ResponsibleCompany</Typography>
        <Fab
          color='primary'
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          component={Link}
          to='/responsible_company/test'
        >
          <AddIcon />
        </Fab>
    </>
  )
}

export default ResponsibleCompany