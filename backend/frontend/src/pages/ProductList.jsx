import React from 'react'
import { Link } from 'react-router-dom'
import {
    Typography, Toolbar, IconButton, Box
} from '@mui/material'
import { DataGrid, ptBR } from '@mui/x-data-grid'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import AddIcon from '@mui/icons-material/Add'

function ProductList() {

    const columns = [
        { field: 'id', headerName: 'Código', width: 50 },
        { field: 'description', headerName: 'Descrição', width: 250 },
        { field: 'buyPrice', headerName: 'Valor de Compra', width: 100 },
        { field: 'profitPercentage', headerName: 'Pct Lucro', width: 100 },
        { field: 'ncmNaladish', headerName: 'NCM/Naladish', width: 100 },
        { field: 'oCst', headerName: 'O/CST', width: 100 },
        { field: 'cfop', headerName: 'CFOP', width: 100 },
        { field: 'um', headerName: 'Unidade de Medida', width: 100 },
        { field: 'icmsCalBase', headerName: 'Base de Cálculo ICMS', width: 100 },
    ]

    const rows = [
        { id: 1, buyPrice: 'R$200,00', description: 'CÂMERA BULLET 2MP/40MTS', profitPercentage: '35%' },
        { id: 2, buyPrice: 'R$150,00', description: 'CÂMERA BULLET 4MP/30MTS', profitPercentage: '42%' },
        { id: 3, buyPrice: 'R$90,00', description: 'ELETRODUTO FLEXÍVEL 3/4"', profitPercentage: '45%' },
        { id: 4, buyPrice: 'R$130,35', description: 'FIO 1,5MM 750V PRETO', profitPercentage: '16%' },
        { id: 5, buyPrice: 'R$200,00', description: 'HASTE PARA CERCA ELÉTRICA', profitPercentage: '22%' },
        { id: 6, buyPrice: 'R$90,00', description: 'ROTEADOR WIFI CORPORATIVO ACCESS POINT AP 360 - INTELBRAS', profitPercentage: '150%' },
        { id: 7, buyPrice: 'R$90,00', description: 'TUBO DE SELANTE PU', profitPercentage: '44%' },
        { id: 8, buyPrice: 'R$200,00', description: 'Tubo PN-12,5 Ø 32 mm', profitPercentage: '36%' },
        { id: 9, buyPrice: 'R$130,35', description: 'Registro Esfera 32 mm', profitPercentage: '65%' },
        { id: 10, buyPrice: 'R$200,00', description: 'CÂMERA BULLET 2MP/40MTS', profitPercentage: '35%' },
        { id: 11, buyPrice: 'R$150,00', description: 'CÂMERA BULLET 4MP/30MTS', profitPercentage: '42%' },
        { id: 12, buyPrice: 'R$90,00', description: 'ELETRODUTO FLEXÍVEL 3/4"', profitPercentage: '45%' },
        { id: 13, buyPrice: 'R$130,35', description: 'FIO 1,5MM 750V PRETO', profitPercentage: '16%' },
        { id: 14, buyPrice: 'R$200,00', description: 'HASTE PARA CERCA ELÉTRICA', profitPercentage: '22%' },
        { id: 15, buyPrice: 'R$90,00', description: 'ROTEADOR WIFI CORPORATIVO ACCESS POINT AP 360 - INTELBRAS', profitPercentage: '150%' },
        { id: 16, buyPrice: 'R$90,00', description: 'TUBO DE SELANTE PU', profitPercentage: '44%' },
        { id: 17, buyPrice: 'R$200,00', description: 'Tubo PN-12,5 Ø 32 mm', profitPercentage: '36%' },
        { id: 18, buyPrice: 'R$130,35', description: 'Registro Esfera 32 mm', profitPercentage: '65%' },
        { id: 19, buyPrice: 'R$200,00', description: 'CÂMERA BULLET 2MP/40MTS', profitPercentage: '35%' },
        { id: 20, buyPrice: 'R$150,00', description: 'CÂMERA BULLET 4MP/30MTS', profitPercentage: '42%' },
        { id: 21, buyPrice: 'R$90,00', description: 'ELETRODUTO FLEXÍVEL 3/4"', profitPercentage: '45%' },
        { id: 22, buyPrice: 'R$130,35', description: 'FIO 1,5MM 750V PRETO', profitPercentage: '16%' },
        { id: 23, buyPrice: 'R$200,00', description: 'HASTE PARA CERCA ELÉTRICA', profitPercentage: '22%' },
        { id: 24, buyPrice: 'R$90,00', description: 'ROTEADOR WIFI CORPORATIVO ACCESS POINT AP 360 - INTELBRAS', profitPercentage: '150%' },
        { id: 25, buyPrice: 'R$90,00', description: 'TUBO DE SELANTE PU', profitPercentage: '44%' },
        { id: 26, buyPrice: 'R$200,00', description: 'Tubo PN-12,5 Ø 32 mm', profitPercentage: '36%' },
        { id: 27, buyPrice: 'R$130,35', description: 'Registro Esfera 32 mm', profitPercentage: '65%' },
    ]

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Toolbar variant='dense' disableGutters sx={{ minHeight: 20, height: 20 }}>
                <IconButton component={Link} to='/' edge='start'>
                    <ArrowBackOutlinedIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1, textAlign: 'center' }}>
                    Produtos
                </Typography>
                <IconButton color='inherit' edge='end'>
                    <AddIcon />
                </IconButton>
            </Toolbar>
            <Box sx={{ display: 'flex', flexGrow: 1, mt: 1 }}>
                <Box sx={{ flexGrow: 1, width: 250 }}>
                    <DataGrid
                        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                        rows={rows}
                        columns={columns}
                        autoPageSize />
                </Box>
            </Box>
        </Box>
    )
}

export default ProductList