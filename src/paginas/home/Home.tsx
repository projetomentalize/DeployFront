import React, { useEffect } from 'react';
import './Home.css'
import { Box, Button, Divider, Grid, Typography } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import { TokenState } from '../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import Carrossel from '../../components/carrossel/Carrossel';

function Home() {
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
  
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado', {
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
    }, [token])

    return (
        <>
        <Carrossel/>

            <Grid container direction='row' justifyContent='center' alignItems='center' className='caixa '>
                <Grid item xs={12}>
                    <Divider/>
                </Grid>
                <Grid alignItems='center' item xs={12}>                    
                    <Box className='teste4'>
                        <Box marginRight={1} fontSize='50px'>
                            <ModalPostagem />
                        </Box>
                        <Link to="/postagens" className="text-decorator-none">
                            <Button variant="outlined" className='botao VerCor'>Ver Postagens</Button>
                        </Link>
                    </Box> 
                </Grid>                
                <TabPostagem/>
            </Grid>
        </>
    );
}

export default Home;
