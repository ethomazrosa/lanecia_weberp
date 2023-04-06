import React, { useState } from 'react'
import {
    Toolbar, Divider, List, ListItem, ListItemButton,
    ListItemIcon, ListItemText, Typography, Collapse
} from '@mui/material'
import { Link } from "react-router-dom"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function DrawerItemList() {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Toolbar>
                <Typography variant='h6' noWrap component='div' align='center' sx={{ flexGrow: 1 }}>
                    Menu
                </Typography>
            </Toolbar>
            <List>
                <ListItem key='dashboard' disablePadding>
                    <ListItemButton component={Link} to='/'>
                        <ListItemIcon>
                            <DashboardOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Dashboard' />
                    </ListItemButton>
                </ListItem>
                <ListItem key='quotes' disablePadding>
                    <ListItemButton component={Link} to='/quote'>
                        <ListItemIcon>
                            <RequestQuoteOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Orçamentos' />
                    </ListItemButton>
                </ListItem>
                <ListItem key='cashFlow' disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <CurrencyExchangeOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Fluxo de Caixa' />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <AppRegistrationOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Cadastros" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ pl: 2 }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <ShoppingBasketOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Produtos' />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <EngineeringOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Serviços' />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <GroupsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Clientes' />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <BusinessOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Empresas Responsáveis' />
                    </ListItemButton>
                </List>
            </Collapse>
            <Divider />
        </div>
    )
}

export default DrawerItemList