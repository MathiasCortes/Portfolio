import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // Estado para el mensaje de error
    const navigate = useNavigate();

    const checkCredentials = async (user, password) => {
        try {
            const response = await fetch(`/checkCredentials?user=${user}&password=${password}`);
            const data = await response.json();

            if (response.ok) {
                console.log(data.message);
                navigate("/home"); // Redirigir si las credenciales son correctas
            } else {
                setErrorMessage('Contraseña incorrecta'); // Mostrar mensaje de error
            }
        } catch (error) {
            setErrorMessage('Error en la solicitud'); // Error en la solicitud
        }
    };

    const RegisterCredentials = async (user, password) => {
        try {
            const response = await fetch(`/checkCredentials?user=${user}&password=${password}`);
            const data = await response.json();

            if (response.ok) {
                console.log(data.message);
                navigate("/home"); // Redirigir si las credenciales son correctas
            } else {
                setErrorMessage('Contraseña incorrecta'); // Mostrar mensaje de error
            }
        } catch (error) {
            setErrorMessage('Error en la solicitud'); // Error en la solicitud
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        checkCredentials(name, password);
    };

    const handleRegister =(event) => {
        event.preventDefault();
        RegisterCredentials(name, password);
    }

    return (
        <div className="Main">
            <form onSubmit={handleSubmit} className='LoginForm'>
                <h2>Inicio de sesión</h2>
                <label htmlFor="name" className='inputLogin'></label>
                <input
                    type="text"
                    id="name"
                    placeholder="Ingrese su nombre de usuario"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="password" className='inputLogin'></label>
                <input
                    type="password"
                    id="password"
                    placeholder="Ingrese su contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <p>Olvido su contraseña?</p>
                <br />
                <button type="submit">Ingresar</button>
            </form>
            {errorMessage && (
                <p style={{ color: "red", fontWeight: "bold", fontSize: "16px" }}>{errorMessage}</p>
            )}
            <div className="RegisterForm">
                <form action="" method="post"></form>
            </div>
        </div>
        
    );
}

export default LoginForm;
