import React from "react";
import ErrorMensage from "../components/molecules/ErrorMensage";

const Error = () => {
  return (
    <div className="errordiv">
      <h1> Ha ocurrido un error</h1>
      <ErrorMensage nE="404" />
    </div>
  );
};

export default Error;
