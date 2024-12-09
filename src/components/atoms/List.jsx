import React from "react";

const errorList = [
  { number: 100, message: "Sesion expirada" },
  { number: 102, message: "Contraseña incorrecta" },
  { number: 200, message: "Revise en administracion" },
  { number: 400, message: "Solicitud incorrecta" },
  { number: 401, message: "No autorizado" },
  { number: 403, message: "Prohibido" },
  { number: 404, message: "Página no encontrada" },
  { number: 500, message: "Error interno del servidor" },
  { number: 501, message: "La base de datos no responde"}
];

const ErrorList = ({ eNumber }) => {
  const error = errorList.find((err) => err.number === eNumber);

  return (
    <p>
      {error ? `${error.number}: ${error.message}` : "Ha ocurrido un error no especificado."}
    </p>
  );
};

export default ErrorList;
