import React from 'react';
import { useNavigate } from 'react-router-dom';  
import LoginForm from './LoginForm';

const Button = ({ text, to }) => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate(to);
  };
  
  if(to == "Login"){
    LoginForm();
  }
  return (
    <button onClick={handleClick}>{text}</button>
  );
};

export default Button;
