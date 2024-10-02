import React, { useState } from 'react';

// Definir estilos con animación
const style = {
  position: 'fixed',
  bottom: '-100px', // Inicia fuera de la pantalla (debajo)
  right: '-100px', // Inicia fuera de la pantalla (a la derecha)
  width: '200px',
  height: '100px',
  backgroundColor: 'lightblue',
  borderRadius: '10px',
  padding: '20px',
  color: 'white',
  transition: 'all 0.5s ease-in-out', // Transición para suavizar el movimiento
};

const showStyle = {
  bottom: '20px', // Aparece a 20px del fondo
  right: '20px', // Aparece a 20px del borde derecho
};

function ErrorMensage({ nE, error }) {
  const [visible, setVisible] = useState(false);

  const toggleDiv = () => {
    setVisible(!visible); // Alterna la visibilidad del div
  };

  return (
    <div>
      <div style={{ ...style, ...(visible ? showStyle : {}) }}>
        <p>{nE}: {error}</p>
      </div>
    </div>
  );
}

export default ErrorMensage;
