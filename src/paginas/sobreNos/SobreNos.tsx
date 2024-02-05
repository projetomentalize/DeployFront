import { Card, CardContent, CardMedia, Divider, List, Typography } from "@material-ui/core";
import { Box, Grid } from "@mui/material";
import React from "react";
import './SobreNos.css';
import Equipe from "../../components/equipe/Equipe";
import NavbarExterna from "../../components/estaticos/navbarexterna/NavbarExterna";

function SobreNos() {
    return (
        <>
            <NavbarExterna />
            <Divider />
            <Grid container direction='row' justifyContent='center' alignItems='center' className="container-sobrenos">
                <Grid item xs={12}>
                    <Typography variant='h3' color='textPrimary' component='h3' align='center' className="titulo-aboutus">PROJETO MENTALIZE</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card style={{ margin: 20 }} className="card">
                        <CardMedia
                            className="card-img"
                            component="img"
                            alt="Missão"
                            image="https://raw.githubusercontent.com/projetomentalize/midia/083a2b09d0e5d5408c9ffa65c5a341c2ea0ed357/img2.svg"
                        />
                        <CardContent>
                            <Typography variant='h4' color='textPrimary' component='h4' align='center' className="titulo-aboutus">MISSÃO</Typography>
                            <Typography align="center">
                                Facilitar o acesso à saúde mental, conectando profissionais qualificados da área com pessoas que necessitam de tratamento e apoio psicológico, com o compromisso de promover a saúde e o bem-estar mental da população brasileira, contribuindo para o alcance da Meta 3.4 dos Objetivos de Desenvolvimento Sustentável até 2030.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card style={{ margin: 20 }} className="card">
                        <CardMedia
                            className="card-img"
                            component="img"
                            alt="Visão"
                            image="https://raw.githubusercontent.com/projetomentalize/midia/47c25cf7b4bc6f17f24b63a0cceec625be1b3b3f/Imagem3.svg"
                        />
                        <CardContent>
                            <Typography variant='h4' color='textPrimary' component='h4' align='center' className="titulo-aboutus">VISÃO</Typography>
                            <Typography align="center">
                                Ser a plataforma de referência em saúde mental no Brasil, reconhecida por sua inovação, qualidade e impacto na sociedade. Buscamos um futuro em que todas as pessoas tenham acesso igualitário a serviços de saúde mental, reduzindo o estigma associado aos transtornos mentais e proporcionando apoio abrangente a todos que necessitem.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}  >
                    <Card style={{ margin: 20 }} className="card">
                        <CardMedia
                            className="card-img"
                            component="img"
                            alt="Impacto na Sociedade"
                            image="https://raw.githubusercontent.com/projetomentalize/midia/47c25cf7b4bc6f17f24b63a0cceec625be1b3b3f/Imagem4.svg"
                        />
                        <CardContent>
                            <Typography variant='h4' color='textPrimary' component='h4' align='center' className="titulo-aboutus" >VALORES</Typography>
                            <Typography align="center">
                                <ul style={{ listStyleType: 'none', padding: 0 }}>
                                    <li>Acessibilidade</li>
                                    <li>Empatia e Respeito</li>
                                    <li>Colaboração</li>
                                    <li>Inovação Contínua</li>
                                    <li>Sustentabilidade</li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Divider />
            <Equipe />
            <CardMedia>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14701.693414484786!2d-43.2034086!3d-22.8977507!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd2a3198dbb7e306d!2sPorto%20Maravalley!5e0!3m2!1spt-BR!2sbr!4v1675126472539!5m2!1spt-BR!2sbr" title="Endereço da Empresa" width="99%" height="450" loading="lazy"></iframe>
            </CardMedia>
        </>
    );
}

export default SobreNos;
