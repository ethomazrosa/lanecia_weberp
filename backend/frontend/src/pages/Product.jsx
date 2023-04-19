import React from 'react'
import { Link } from 'react-router-dom'
import {
    Typography, Toolbar, IconButton, TextField,
    Box, Container, Grid
} from '@mui/material'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import { useFormik } from 'formik'
import { object, string } from 'yup'

const validationSchema = object({
    firstName: string().required('First name is required'),
    lastName: string().required('Last name is required'),
    email: string().email('Invalid email address').required('Email is required'),
})

const initialValues = {
    firstName: 'Patatenha',
    lastName: 'Quando Nasce',
    email: '1@2.com',
}

function Product() {

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
            // JSON.stringify()
        }
    })

    return (
        <>
            <Toolbar variant='dense' disableGutters sx={{ minHeight: 20, height: 20 }}>
                <IconButton component={Link} to='/products/' edge='start'>
                    <ArrowBackOutlinedIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1, textAlign: 'center' }}>
                    Produtos
                </Typography>
                <IconButton color='inherit' edge='end' form='form' type='submit'>
                    <SaveOutlinedIcon />
                </IconButton>
            </Toolbar>
            <Container component='main' maxWidth='lg' disableGutters sx={{ mt: 2 }}>
                <Box component='form' id='form' onSubmit={formik.handleSubmit}>
                    <Grid container justifyContent='start' columnSpacing={2} rowSpacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id='firstName'
                                label='First Name'
                                fullWidth
                                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                helperText={formik.touched.firstName && formik.errors.firstName}
                                {...formik.getFieldProps('firstName')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name='lastName'
                                label='Last Name'
                                fullWidth
                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                helperText={formik.touched.lastName && formik.errors.lastName}
                                {...formik.getFieldProps('lastName')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name='email'
                                label='Email'
                                fullWidth
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                {...formik.getFieldProps('email')}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Product