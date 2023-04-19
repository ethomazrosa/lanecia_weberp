import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Typography, Toolbar, IconButton, Box } from '@mui/material'
import { DataGrid, ptBR } from '@mui/x-data-grid'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import AddIcon from '@mui/icons-material/Add'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const rows = [
    { id: 1, price: 'R$ 20.000,00', description: 'CÂMERA BULLET 2MP/40MTS', profitPercentage: '35%', um: 'PC' },
    { id: 2, price: 'R$ 150,00', description: 'CÂMERA BULLET 4MP/30MTS', profitPercentage: '42%', um: 'PC' },
    { id: 3, price: 'R$ 90,00', description: 'ELETRODUTO FLEXÍVEL 3/4"', profitPercentage: '45%', um: 'PC' },
    { id: 4, price: 'R$ 130,35', description: 'FIO 1,5MM 750V PRETO', profitPercentage: '16%', um: 'PC' },
    { id: 5, price: 'R$ 200,00', description: 'HASTE PARA CERCA ELÉTRICA', profitPercentage: '22%' },
    { id: 6, price: 'R$ 90,00', description: 'ROTEADOR WIFI CORPORATIVO ACCESS POINT AP 360 - INTELBRAS', profitPercentage: '150%' },
    { id: 7, price: 'R$ 90,00', description: 'TUBO DE SELANTE PU', profitPercentage: '44%' },
    { id: 8, price: 'R$ 200,00', description: 'Tubo PN-12,5 Ø 32 mm', profitPercentage: '36%' },
    { id: 9, price: 'R$ 130,35', description: 'Registro Esfera 32 mm', profitPercentage: '65%' },
    { id: 10, price: 'R$ 200,00', description: 'CÂMERA BULLET 2MP/40MTS', profitPercentage: '35%' },
    { id: 11, price: 'R$ 150,00', description: 'CÂMERA BULLET 4MP/30MTS', profitPercentage: '42%' },
    { id: 12, price: 'R$ 90,00', description: 'ELETRODUTO FLEXÍVEL 3/4"', profitPercentage: '45%' },
    { id: 13, price: 'R$ 130,35', description: 'FIO 1,5MM 750V PRETO', profitPercentage: '16%' },
    { id: 14, price: 'R$ 200,00', description: 'HASTE PARA CERCA ELÉTRICA', profitPercentage: '22%' },
    { id: 15, price: 'R$ 90,00', description: 'ROTEADOR WIFI CORPORATIVO ACCESS POINT AP 360 - INTELBRAS', profitPercentage: '150%' },
    { id: 16, price: 'R$ 90,00', description: 'TUBO DE SELANTE PU', profitPercentage: '44%' },
    { id: 17, price: 'R$ 200,00', description: 'Tubo PN-12,5 Ø 32 mm', profitPercentage: '36%' },
    { id: 18, price: 'R$ 130,35', description: 'Registro Esfera 32 mm', profitPercentage: '65%' },
    { id: 19, price: 'R$ 200,00', description: 'CÂMERA BULLET 2MP/40MTS', profitPercentage: '35%' },
    { id: 20, price: 'R$ 150,00', description: 'CÂMERA BULLET 4MP/30MTS', profitPercentage: '42%' },
    { id: 21, price: 'R$ 90,00', description: 'ELETRODUTO FLEXÍVEL 3/4"', profitPercentage: '45%' },
    { id: 22, price: 'R$ 130,35', description: 'FIO 1,5MM 750V PRETO', profitPercentage: '16%' },
    { id: 23, price: 'R$ 200,00', description: 'HASTE PARA CERCA ELÉTRICA', profitPercentage: '22%' },
    { id: 24, price: 'R$ 90,00', description: 'ROTEADOR WIFI CORPORATIVO ACCESS POINT AP 360 - INTELBRAS', profitPercentage: '150%' },
    { id: 25, price: 'R$ 90,00', description: 'TUBO DE SELANTE PU', profitPercentage: '44%' },
    { id: 26, price: 'R$ 200,00', description: 'Tubo PN-12,5 Ø 32 mm', profitPercentage: '36%' },
    { id: 27, price: 'R$ 130,35', description: 'Registro Esfera 32 mm', profitPercentage: '65%' },
]

function ProductList() {

    const navigate = useNavigate()
    const columns = [
        { headerClassName: 'header', field: 'id', headerName: 'ID', minWidth: 40, flex: 1 },
        { headerClassName: 'header', field: 'description', headerName: 'Descrição', flex: 8 },
        { headerClassName: 'header', field: 'price', headerName: 'Valor de Compra', flex: 4 },
    ]

    if (useMediaQuery(useTheme().breakpoints.up('sm'))) {
        columns.push(
            { headerClassName: 'header', field: 'profitPercentage', headerName: '% Lucro', flex: 1 },
            { headerClassName: 'header', field: 'um', headerName: 'Un. Med.', flex: 1 },
        )
    }

    const handleRowClick = (params) => {
        navigate(`/products/${params.id}`)
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Toolbar variant='dense' disableGutters sx={{ minHeight: 20, height: 20 }}>
                <IconButton component={Link} to='/' edge='start'>
                    <ArrowBackOutlinedIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1, textAlign: 'center' }}>
                    Produtos
                </Typography>
                <IconButton color='inherit' edge='end' component={Link} to='/products/:new'>
                    <AddIcon />
                </IconButton>
            </Toolbar>
            <Box sx={{ display: 'flex', flexGrow: 1, mt: 1 }}>
                <Box sx={{
                    flexGrow: 1,
                    width: 250,
                    '& .header': {
                        backgroundColor: 'secondary.main',

                    },
                }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        onRowClick={handleRowClick}
                        editMode='row'
                        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                        autoPageSize
                        sx={{
                            // disable cell selection style
                            '.MuiDataGrid-cell:focus': {
                                outline: 'none'
                            },
                            // pointer cursor on ALL rows
                            '& .MuiDataGrid-row:hover': {
                                cursor: 'pointer'
                            },
                            border: 0
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default ProductList