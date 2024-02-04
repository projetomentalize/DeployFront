import { AppBar, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ModalLogin from '../../login/modalLogin/ModalLogin';
import './NavbarExterna.css'

function NavbarExterna() {
    return (
        <>
            <AppBar position="fixed" >
                <Toolbar className='fundo' variant="dense" >
                    <Link to="/home2">
                        <Box className='logo' >
                            <img src="https://raw.githubusercontent.com/projetomentalize/midia/5b75364a92009a3098609fe8fa0b46298edb1dc1/logosf.svg" alt='logoMentalize' />
                        </Box>
                    </Link>
                    <Box display="flex" justifyContent="end">
                        <MenuItem className='item'>
                            <Link to='/'>
                                <Typography className='texto' variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem className='item'>
                            <Link to='/sobrenos'>
                                <Typography className='texto' variant="h6" color="inherit">
                                    Sobre
                                </Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem className='item'>
                            <Link to='/contato'>
                                <Typography className='texto' variant="h6" color="inherit" >
                                    Contato
                                </Typography>
                            </Link>
                        </MenuItem>
                        {/* <MenuItem className='item'>
                            <Link to='/contato'>
                                <Typography className='texto' variant="h6" color="inherit" >
                                    Blog
                                </Typography>
                            </Link>
                        </MenuItem>                         */}
                        <MenuItem className='item'>
                            <Link to="/cadastrousuario">
                                <Typography className='texto' variant="h6" color="inherit">
                                    Cadastro
                                </Typography>
                            </Link>
                        </MenuItem>
                    </Box>
                    <Box >
                        <MenuItem className='login-item' >
                            <ModalLogin />
                        </MenuItem>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default NavbarExterna;