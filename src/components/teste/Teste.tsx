import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../models/Postagem';
import { busca } from '../../service/Service';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './Teste.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Avatar, Box, Grid } from '@mui/material';
import { green, orange } from '@mui/material/colors';
import { TokenState } from '../../store/tokens/tokensReducer';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 300,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  })
);
function Teste() {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(-1);

    const [posts, setPosts] = useState<Postagem[]>([])
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado!")
            navigate("/login")
        }
    }, [token])

    async function getPost() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [posts.length])

    return (
        <Box className='container-list-post'>

            <Typography className='postTitle fontes' variant="h3" component="h1" align="center">Publicações</Typography>

            {posts.length <= 0 &&
                <Box className="fundoPostagem">
                    <img src="https://i.pinimg.com/originals/a9/ff/d7/a9ffd714fbd4966d46ef4ee77ce96e95.gif" alt="" />
                </Box>
            }

            {
                posts.map((post,i) => (
                    <Box m={2} className="eachPost">
                        <Card variant="outlined" className="{classes.root} corCard">
                            <Box className="user-list-post">
                            </Box>

                            <Box className="content-list-post">
                                <CardContent className="card-content">

                                    <Box className="boxCard">
                                        <Box>
                                            <Box className='fotonapostagem'>
                                            <Avatar sx={{ bgcolor: orange[700]}} aria-label="recipe">
                                            <img className='imgCards' src={post.midia_url} alt="" />
                                            </Avatar>
                                            <Box marginLeft={1}>
                                            {/* <Typography variant="h5" component="p" className='fontes'>
                                                {post.usuario?.nome} publicou:
                                            </Typography> */}
                                            </Box>
                                            </Box>
                                            <Typography variant="body1" component="h2" className='titulo-list-post'>
                                                {post.titulo}
                                            </Typography>
                                            <Typography variant="body2" component="p" className="conteudo">
                                                {post.texto}
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {post.tema?.nome}
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {post.tema?.abordagem}
                                            </Typography>
                                            
                                        </Box>
                                    </Box>

                                </CardContent>

                                {/* <CardActions>
                                    <Grid xs={12}>
                                        <Box>
                                            <Box display="flex" justifyContent="center" mb={1.5} className="actions-list-post">

                                                <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none">
                                                    <Box mx={1}>
                                                        <Button variant="contained" className="marginLeft buttonBox" size='small' color="primary" >
                                                            atualizar
                                                        </Button>
                                                    </Box>
                                                </Link>
                                                <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                                    <Box mx={1}>
                                                        <Button variant="contained" size='small' color="secondary" className="buttonBox">
                                                            deletar
                                                        </Button>
                                                    </Box>
                                                </Link>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </CardActions> */}
                            </Box>
                        </Card>
                    </Box >
                ))
            }
        </Box >
    )
}

export default Teste;