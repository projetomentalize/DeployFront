import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../service/Service';
import { Grid, Typography, Button, TextField, MenuItem } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';
import NavbarExterna from '../../components/estaticos/navbarexterna/NavbarExterna';
import Divider from '@material-ui/core/Divider';

function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto_url: '',
            tipo_usuario:''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto_url: '',
            tipo_usuario:''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success('Usuario cadastrado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }
    return (
        <>
        <NavbarExterna/>        
            <Grid container className='img-cadastro'>
                <Grid container direction='column' justifyContent='center' alignItems='center' className='container-cadastro'>
                    <Box boxShadow={2} display='flex' justifyContent='center' marginTop={2} className='caixa-cadastro'>
                        <Divider />
                        <Divider />                        
                        <form onSubmit={onSubmit} className='form-cadastro' >
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <Box display='flex' justifyContent='center' >
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center' className='texto2'>Por favor preencha todos os campos para fazer o seu cadastro:</Typography>
                            </Box>
                        </Box>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal'  fullWidth className='campos' />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='E-mail' variant='outlined' name='usuario' margin='normal' fullWidth className='campos' />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' placeholder='Mínimo 8 caracteres'  variant='outlined' name='senha' margin='normal' type='password' fullWidth className='campos' />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirme sua senha' placeholder='Mínimo 8 caracteres' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth className='campos' />
                        <TextField value={user.foto_url} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto_url' label='Foto'  placeholder='htttp://linkdafoto.jpg' variant='outlined' name='foto_url' margin='normal' fullWidth className='campos' />
                        {/* <TextField value={user.tipo_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='tipo_usuario' label='Profissão' variant='outlined' name='tipo_usuario' margin='normal' fullWidth className='campos' /> */}
                        <TextField id="select" value={user.tipo_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} label='Perfil' variant='outlined' name='tipo_usuario' margin='normal' fullWidth className='campos' select>
                            <MenuItem value="Paciente">Paciente</MenuItem>
                            <MenuItem value="Psicólogo">Psicólogo</MenuItem>
                        </TextField>              
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary' className='btnCadastrar'>
                                Cadastrar
                            </Button>
                            </Box>
                        </form>                        
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default CadastroUsuario;
