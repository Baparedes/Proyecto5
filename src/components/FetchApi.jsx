import { useEffect, useState } from "react";

const FetchApi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://huachitos.cl/api/animales")
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson.data);
      });
  }, []);

  return (
    <>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.nombre}</li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos</p>
      )}
    </>
  );
};

export default FetchApi;
