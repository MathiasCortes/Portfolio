import React, { useEffect, useState } from 'react';

const DataFetcher = () => {
  // Estado para guardar los datos y controlar el estado de carga
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función que realiza el fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data'); // URL de la API
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const result = await response.json(); // Parsear a JSON
        setData(result); // Guardar los datos en el estado
        setLoading(false); // Terminar el estado de carga
      } catch (error) {
        setError(error.message); // Guardar el error
        setLoading(false);
      }
    };

    fetchData(); // Llamar a la función fetchData cuando se monte el componente
  }, []);

  // Mostrar un mensaje de carga, error o los datos
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Datos desde la API:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li> // Asegúrate de ajustar esto según el formato de los datos
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
