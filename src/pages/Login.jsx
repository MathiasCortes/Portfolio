import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMensage from "../components/ErrorMensage"; // Importar el componente de error

function LoginForm() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // Estado para el mensaje de error
    const [visible, setVisible] = useState(true); // Estado para la visibilidad del formulario
    const [users, setUsers] = useState([]); // Estado para los usuarios
    const navigate = useNavigate();

    // Cargar los usuarios desde el archivo JSON
    useEffect(() => {
        const loadUsers = async () => {
            try {
                const response = await fetch('/database/Users.json');
                const data = await response.json();
                setUsers(data); // Suponiendo que el JSON es un array de usuarios
            } catch (error) {
                console.error('Error al cargar los usuarios:', error);
            }
        };

        loadUsers();
    }, []);

    const checkCredentials = (user, password) => {
        const userData = users.find(cred => cred.user === user && cred.password === password);

        if (userData) {
            console.log('Inicio de sesión exitoso');
            navigate("/home"); // Redirigir si las credenciales son correctas
        } else {
            setErrorMessage('Contraseña incorrecta'); // Mostrar mensaje de error
        }
    };

    const requestChange = async (user) => {
        const existingUser = users.find(cred => cred.user === user);

        if (existingUser) {
            setErrorMessage('El usuario ya existe'); // Mostrar mensaje de error
            return;
        }

        // Agregar nuevo usuario
        const newUser = { user, password };
        const updatedUsers = [...users, newUser];

        // Guardar el nuevo usuario en el archivo JSON
        await saveUsersToJson(updatedUsers);

        console.log('Registro exitoso');
        navigate("/home"); // Redirigir si el registro es correcto
    };

    const saveUsersToJson = async (updatedUsers) => {
        try {
            const response = await fetch('/saveUsers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUsers),
            });

            if (!response.ok) {
                throw new Error('Error al guardar usuarios');
            }
        } catch (error) {
            console.error('Error al guardar los usuarios:', error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        checkCredentials(name, password);
    };

    const handleRequest = (event) => {
        event.preventDefault();
        requestChange(name);
    };

    // Función para cambiar la visibilidad entre los formularios
    const toggleVisibility = () => {
        setVisible(!visible);
        setErrorMessage(''); // Limpiar mensaje de error al cambiar de formulario
    };

    return (
        <div>
            {/* Formulario de inicio de sesión */}
            <div id={visible ? 'visible' : 'invisible'}>
                <form onSubmit={handleSubmit} className='Form'>
                    <h2>Inicio de sesión</h2>
                    <label htmlFor="login-name" className='inputLogin'>Usuario</label>
                    <input
                        type="text"
                        id="login-name"
                        placeholder="Ingrese su nombre de usuario"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <br />
                    <label htmlFor="login-password" className='inputLogin'>Contraseña</label>
                    <input
                        type="password"
                        id="login-password"
                        placeholder="Ingrese su contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="noStyle" type="button" onClick={toggleVisibility}>¿Olvidó su contraseña?</button>
                    <br />
                    <button className="submitBtn" type="submit">Ingresar</button>
                </form>
                {errorMessage && (
                    <ErrorMensage nE="Error" error={errorMessage} />
                )}
            </div>


            <div id={visible ? 'invisible' : 'visible'}>
                <form onSubmit={handleRequest} className="Form">
                    <h2>Solicitud de cambio</h2>
                    <div className="Mensage">
                        <p></p>
                    </div>
                    <label htmlFor="register-name" className='inputLogin'>Usuario</label>
                    <input
                        type="text"
                        id="CambioContraseña"
                        placeholder="Ingrese su nombre de usuario"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <p className="error"></p>
                    <br />
                    <button className="noStyle" type="button" onClick={toggleVisibility}>Iniciar sesión</button>
                    <br />
                    <button className="submitBtn"  type="submit">Solicitar</button>
                </form>
                {errorMessage && (
                    <ErrorMensage nE="Error" error={errorMessage} />
                )}
            </div>
        </div>
    );
}

export default LoginForm;
