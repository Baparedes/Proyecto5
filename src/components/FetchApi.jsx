import { React, useEffect, useState } from "react";

const FetchApi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
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
