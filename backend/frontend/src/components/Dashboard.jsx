import React from 'react'
import { Grid, Paper } from '@mui/material'

function Dashboard() {

    return (
        <>
            <Grid container columnSpacing={2} rowSpacing={2}>
                <Grid item textAlign='center' lg={8} md={6} xs={12}>
                    <Paper elevation={5} sx={{ height:'5rem', padding: '1rem' }}>
                        Em
                    </Paper>
                </Grid>
                <Grid item textAlign='center' lg={4} md={6} xs={12}>
                    <Paper elevation={5} sx={{ height:'5rem', padding: '1rem' }}>
                        breve
                    </Paper>
                </Grid>
                <Grid item textAlign='center' lg={5} md={6} xs={12}>
                    <Paper elevation={5} sx={{ height:'5rem', padding: '1rem' }}>
                        aqui
                    </Paper>
                </Grid>
                <Grid item textAlign='center' lg={5} md={6} xs={12}>
                    <Paper elevation={5} sx={{ height:'5rem', padding: '1rem' }}>
                        estará
                    </Paper>
                </Grid>
                <Grid item textAlign='center' lg={2} md={6} xs={12}>
                    <Paper elevation={5} sx={{ height:'5rem', padding: '1rem' }}>
                        o
                    </Paper>
                </Grid>
                <Grid item textAlign='center' lg={12} md={6} xs={12}>
                    <Paper elevation={5} sx={{ height:'5rem', padding: '1rem' }}>
                        dashboard
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard