import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import LogoHuachitos from "../assets/Logo-Huachitos-con-tag.svg"

const About = () => {
  return (
    <Container>
      <h2>Conoce más...</h2>
      <Card>
        <CardActionArea
        component={Link}
        to={import.meta.env.VITE_ORIGINAL_URL}
        target="_blank"
        rel="noopener"
        >
          <CardMedia
          component="img" 
          height="auto"
          image={LogoHuachitos}
          alt="Logo Huachitos"
          />
          <CardContent style={{
            color:'white',
            backgroundColor: 'AppWorkspace'
          }}>
          <Typography gutterBottom variant="body1">
          Entra al sitio web oficial de Huachitos y conocerás más detalles sobre esta maravillosa organización.
          </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  )
}

export default About