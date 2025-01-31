import React, { useState, useEffect } from 'react';

function ErrorMensage({ nE, error }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (error) {
      setVisible(true); // Mostrar el mensaje de error cuando hay un error

      // Reiniciar la visibilidad después de 3 segundos
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      // Limpiar el timeout si el componente se desmonta o si cambia el error
      return () => clearTimeout(timer);
    }
  }, [error]); // Se vuelve a ejecutar cuando el valor de 'error' cambia

  return (
    <div className='error'>
      <p className={`errorAnimation ${visible ? 'show' : ''}`}>
        {nE}: {error}
      </p>
    </div>
  );
}

export default ErrorMensage;
