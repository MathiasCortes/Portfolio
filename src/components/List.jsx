import React from 'react';

/*
100+ Errores respecto a la sesion
200+ Errores respecto a administracion
300+ Errores respecto a
400+ Errores respecro al navegador
500+ Errores respecto al servidor
*/

const errorList = [
    { number: 100, message: 'Sesion expirada'},
    { number: 101, message: ''},
    { number: 102, message: 'Contraseña incorrecta'},
    { number: 200, message: 'Revise en administracion'},
    { number: 400, message: 'Solicitud incorrecta' },
    { number: 401, message: 'No autorizado' },
    { number: 403, message: 'Prohibido' },
    { number: 404, message: 'Página no encontrada' },
    { number: 500, message: 'Error interno del servidor' },
];

const ErrorList = ({ eNumber }) => {
    const error = errorList.find(err => err.number === eNumber);

    return (
            <p>Error {error ? error.number : 'Desconocido'}:
            {error ? error.message : 'Ha ocurrido un error no especificado.'}</p>
    );
};

export default ErrorList;
