import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    Typography, Toolbar, IconButton, Grid, Card, Box,
    Container, CardMedia, CardActionArea, CardActions,
} from '@mui/material'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import AddIcon from '@mui/icons-material/Add'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useGet } from '../hooks/useApi'
import { ProgressBar } from '../components'

function ResponsibleCompany() {

    const [loading, setLoading] = useState(true)
    const getResponsibleCompanies = useGet('http://127.0.0.1:8000/registrations/responsible_companies/')
    const [responsibleCompanies, setResponsibleCompanies] = useState([])

    useEffect(() => {
        getResponsibleCompanies()
            .then(response => {
                setLoading(false)
                setResponsibleCompanies(response)
            })
            .catch(error => {
                console.log(error.response.data)
                setLoading(false)
            })
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <ProgressBar />
    }

    return (
        <>
            <Toolbar variant='dense' disableGutters sx={{ minHeight: 20, height: 20 }}>
                <IconButton
                    component={Link}
                    to='/'
                    edge='start'
                >
                    <ArrowBackOutlinedIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1, textAlign: 'center' }}>
                    Empresas Responsáveis
                </Typography>
                <IconButton
                    color='inherit'
                    component={Link}
                    to='/responsible_companies/:new'
                    edge='end'
                >
                    <AddIcon />
                </IconButton>
            </Toolbar>
            <Grid container sx={{ mt: 2 }} rowSpacing={2} columnSpacing={2} alignItems="stretch">
                {responsibleCompanies.map((company) => {
                    return (
                        <Grid item xs={6} sm={4} lg={3} key={company.id}>
                            <Card sx={{ px: 1 }}>
                                <CardActionArea
                                    component={Link}
                                    to={`/responsible_companies/${company.id}`}
                                >
                                    <CardMedia
                                        component='img'
                                        image={company.logo}
                                        alt={company.brand_name}
                                        sx={{ height: 100, objectFit: 'contain' }}
                                    />
                                </CardActionArea>
                                <CardActions>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'start',
                                        width: '100%'
                                    }}>
                                        <Typography variant='h6' gutterBottom noWrap sx={{ display: { xs: 'flex' } }}>
                                            {company.brand_name}
                                        </Typography>
                                        <Typography variant='body2' color='text.secondary' noWrap sx={{ display: { xs: 'none', sm: 'flex' } }}>
                                            {company.company_name}
                                        </Typography>
                                        <Typography variant='body2' color='text.secondary' sx={{ display: { xs: 'none', sm: 'flex' } }}>
                                            {company.email}
                                        </Typography>
                                        <Typography variant='body2' color='text.secondary' sx={{ display: { xs: 'none', sm: 'flex' } }}>
                                            {company.mobile_phone}
                                        </Typography>
                                        <Container
                                            disableGutters
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'end',
                                                paddingRight: 0
                                            }}>
                                            <IconButton color='error' onClick={null}>
                                                <DeleteOutlinedIcon />
                                            </IconButton>
                                        </Container>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export default ResponsibleCompany