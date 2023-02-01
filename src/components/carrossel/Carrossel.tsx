import React, { useEffect, useState } from 'react';
import { Typography, Grid, Button, Container } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from "react-router-dom";
import './Carrossel.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function Carrossel() {

    return (
        <Grid className='grid-carrossel'>
                <Carousel className='carrossel'>
                    <Carousel.Item >
                        <Grid container direction="column" justifyContent="center" alignItems="center" className='caixa-carrossel'>
                            <Grid item xs={10} >
                                <Box >
                                    <img className='imagem-carrossel' src="https://raw.githubusercontent.com/projetomentalize/midia/94ac6f7dbb68796d0bddbfb14a1aef4d2ca4aed4/1.svg" alt=""
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Grid container direction="column" justifyContent="center" alignItems="center" className='caixa-carrossel'>
                            <Grid item xs={10} >
                                <Box >
                                    <img className='imagem-carrossel' src="https://raw.githubusercontent.com/projetomentalize/midia/94ac6f7dbb68796d0bddbfb14a1aef4d2ca4aed4/2.svg" alt="" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Grid container direction="column" justifyContent="center" alignItems="center" className='caixa-carrossel'>
                            <Grid item xs={10} >
                                <Box >
                                    <img className='imagem-carrossel' src="https://raw.githubusercontent.com/projetomentalize/midia/94ac6f7dbb68796d0bddbfb14a1aef4d2ca4aed4/3.svg" alt="" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Grid container direction="column" justifyContent="center" alignItems="center" className='caixa-carrossel'>
                            <Grid item xs={10} >
                                <Box >
                                    <img className='imagem-carrossel' src="https://raw.githubusercontent.com/projetomentalize/midia/94ac6f7dbb68796d0bddbfb14a1aef4d2ca4aed4/4.svg" alt="" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Carousel.Item>
                </Carousel>
                </Grid>
    );
}

export default Carrossel;
