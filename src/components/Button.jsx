import React from 'react';
import { useNavigate } from 'react-router-dom';  // Cambiamos a `useNavigate`
import LoginForm from './LoginForm';

const Button = ({ text, to }) => {
  const navigate = useNavigate();  // Usamos `useNavigate` en lugar de `useHistory`

  const handleClick = () => {
    navigate(to);  // Redirige a la ruta proporcionada
  };
  
  if(to == "Login"){
    LoginForm();
  }
  return (
    <button onClick={handleClick}>{text}</button>
  );
};

export default Button;
