import React from 'react';
import { AppBar, Button, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { addToken } from '../../../store/tokens/actions';
import { TokenState } from '../../../store/tokens/tokensReducer';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


function Navbar(): JSX.Element {
    const dispatch = useDispatch();

    let navigate = useNavigate();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    function goLogout() { 
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static">
            <Toolbar className='fundo' variant="dense">
                    <Box className='logo' >
                        <img src="https://raw.githubusercontent.com/projetomentalize/midia/5b75364a92009a3098609fe8fa0b46298edb1dc1/logosf.svg" alt='logoMentalize' />
                    </Box>
                <Box display="flex" justifyContent="start">
                    <Link to="/home" >
                        <MenuItem className='cursor'>
                            <Typography className='texto' variant="h6" color="inherit">
                                Home
                            </Typography>
                        </MenuItem>
                    </Link>
                    <Link to="/postagens" >
                        <MenuItem className='cursor'>
                            <Typography className='texto' variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </MenuItem>
                    </Link>
                    {/* <Link to="/temas" >
                        <MenuItem className='cursor'>
                            <Typography className='texto' variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </MenuItem>
                    </Link>
                    <Link to="/formularioTema" >
                        <MenuItem className='cursor'>
                            <Typography className='texto' variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </MenuItem>
                    </Link>                    */}
                    <Link to="/usuarios" >
                    <MenuItem className="cursor">
                        <Typography className='texto' variant="h6" color="inherit">
                          Usuários
                        </Typography>
                   </MenuItem>
                   </Link>                  
                </Box>
                <Box>
                <MenuItem className='cursor' >
                    <Button                   
                     className="btnModal-logout"
                      endIcon={<LogoutOutlinedIcon />}
                      onClick={goLogout}> SAIR </Button>
                      </MenuItem>
                </Box>      
            </Toolbar>
        </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;
