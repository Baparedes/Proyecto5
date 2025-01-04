import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid2,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://huachitos.cl/api/animales";

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setAnimals(data.data))
      .catch((error) => {
        console.log("fetching error", error);
      })
      .finally(() => setLoading(false));
  }, []);

  const capitalize = (nombre) => {
    if (!nombre) return "";
    return nombre.charAt(0).toUpperCase()+nombre.slice(1).toLowerCase();
  }

  if (loading) {
    return (
      <Grid2
        container
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <CircularProgress thickness={2} sx={{ color:'darkturquoise' }} />
      </Grid2>
    );
  }
  return (
    <Grid2
      container
      spacing={2}
      justifyContent="center"
      sx={{ padding: "20px" }}
    >
      {animals.map((animal) => (
        <Grid2 item xs={12} sm={6} md={4} key={animal.id}>
          <Card>
            <CardActionArea
              component={Link}
              to={`/animales/${animal.nombre}`}
              state={{ animal }}
            >
              <CardMedia
                component="img"
                height="100"
                image={animal.imagen}
                alt={animal.nombre}
              />
              <CardContent style={{ 
                color:'white', 
                backgroundColor:'darkslategray'
                }}>
                <Typography gutterBottom variant="body">
                  {capitalize(animal.nombre)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default AnimalList;
