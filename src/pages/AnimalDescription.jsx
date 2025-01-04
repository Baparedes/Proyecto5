import { Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom"

const AnimalDescription = () => {
  const location = useLocation()
  const animal = location.state?.animal;
  
  const cleanText = (text) => {
    if (!text) return "";
    return text.replace(/<\/?p>/g, "");
  }

  const capitalize = (nombre) => {
    if (!nombre) return "";
    return nombre.charAt(0).toUpperCase()+nombre.slice(1).toLowerCase();
  }

  const esterilizado = (res) => {
    if (animal.esterilizado === 1) {
      res = 'Si';
      return res
    } else {
      res = 'No';
      return res
    }
  }

  return (
    <Container>
      <Typography 
      variant="h4"
      style={{ marginTop: '25px' }}>
        {capitalize(animal.nombre)}
      </Typography>
      <img
      src={animal.imagen}
      alt={animal.nombre}
      style={{ width: '70%', borderRadius:'1em', margin: '1.5em' }}
      >
      </img>
      <Typography variant="h6">Información sobre {capitalize(animal.nombre)}:</Typography>
        <ul style={{ justifyItems:'baseline', marginLeft:'20%', padding:'1em' }}>
          <li>Edad: {animal.edad}</li>
          <li>Género: {animal.genero}</li>
          <li>Vacunas: {animal.vacunas}</li>
          <li>Esterilizado: {esterilizado(animal.esterilizado)}</li>
          <li>Región: {animal.region}</li>
          <li>Comuna: {animal.comuna}</li>
        </ul>
      <Typography variant='h5'
      style={{ marginBottom:'15px' }}
      >
        Descripción de {capitalize(animal.nombre)}:
      </Typography>
      <Typography variant="body1"
      style={{ margin:'15px' }}
      >
        {cleanText(animal.desc_fisica)}<br/>{cleanText(animal.desc_personalidad)}<br/>{cleanText(animal.desc_adicional)}
      </Typography>
    </Container>
  )
}

export default AnimalDescription