import React from 'react'
import { Box, Paper, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Box>
      <Paper
        elevation={2}
        style={{
          padding: "1px",
          marginTop: "3%",
          justifySelf: "center",
          width: "50%",
          color: "whitesmoke",
          backgroundColor: "Transparent",
        }}
      >
        <h3>¿Quieres contactar a Huachitos?</h3>
      </Paper>
      <Typography
        sx={{
          margin: "3%",
        }}
      >
        Puedes escribirles al siguiente correo electrónico:
      </Typography>
      <Paper
        elevation={6}
        style={{
          justifySelf: "center",
          width: "30%",
          color: "whitesmoke",
          backgroundColor: "Transparent",
        }}
      >
        <h5>contacto@huachitos.cl</h5>
      </Paper>
      <Typography
        sx={{
          margin: "3%",
        }}
      >
        O si prefieres, puedes visitar su perfil de Instagram:
      </Typography>
      <Paper
        elevation={10}
        style={{
          padding: "1em",
          justifySelf: "center",
          width: "10em",
          color: "whitesmoke",
          backgroundColor: "Transparent",
        }}
      >
        <InstagramIcon fontSize="large"></InstagramIcon><br/>
        <Typography
          component={Link}
          to="https://www.instagram.com/huachitos.cl/"
          target="_blank"
          rel="noopener"
          sx={{
            color: 'cadetblue'
          }}
        >
          @huachitos.cl
        </Typography>
      </Paper>
    </Box>
  );
};

export default Contact;
