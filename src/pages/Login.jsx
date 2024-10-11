import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMensage from "../components/ErrorMensage"; 

function LoginForm() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(true); 
    const [users, setUsers] = useState([]); 
    const navigate = useNavigate();


    useEffect(() => {
        const loadUsers = async () => {
            try {
                const response = await fetch('http://192.168.1.206:26352/users', {
                    method: 'GET',
                    headers: {
                        'Token': 'E@!rñUs84'
                    }
                });
    
                if (!response.ok) {
                    throw new Error('Error en la respuesta de la API');
                }
    
                const data = await response.json();
                setUsers(data); 
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
            navigate("/Inicio", { state: { user } }); 
        } else {
            setErrorMessage('Contraseña incorrecta');
        }
    };

    const requestChange = async (user) => {

        const newUser = { user, password };
        const updatedUsers = [...users, newUser];

        await saveUsersToJson(updatedUsers);

        console.log('Solicite respuesta en administracion');
         navigate("/Error", { state: { user } });
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

    const toggleVisibility = () => {
        setVisible(!visible);
        setErrorMessage('');
    };

    return (
        <div>

            <div id={visible ? 'visible' : 'invisible'}>
                <form onSubmit={handleSubmit} className='Form'>
                    <h1>Billeteros</h1>
                    <input
                        type="text"
                        id="login-name"
                        placeholder="Usuario"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        id="login-password"
                        placeholder="Clave"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="noStyle" type="button" onClick={toggleVisibility}>¿Olvidó su contraseña?</button>
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
                        placeholder="Usuario"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <p className="error"></p>
                    <br />
                    <button className="noStyle" type="button" onClick={toggleVisibility}>Volver</button>
                    <br />
                    <button className="submitBtn"  type="submit">Solicitar</button>
                </form>
                {errorMessage && (
                    <ErrorMensage nE="102" error={errorMessage} />
                )}
            </div>
        </div>
    );
}

export default LoginForm;
