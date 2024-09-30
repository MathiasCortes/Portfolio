const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const filePath = './database/Users.json';

app.post('/saveCredentials', (req, res) => {
    const { user, password } = req.body;

    const data = {
        user,
        password
    };

    fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error('Error al guardar el archivo:', err);
            return res.status(500).json({ error: 'Error al guardar los datos' });
        }
        res.status(200).json({ message: 'Datos guardados exitosamente' });
    });
});


app.get('/checkCredentials', (req, res) => {
    const { user, password } = req.query; // Obtenemos los datos de las query params (URL)

    if (!user || !password) {
        return res.status(400).json({ error: 'Faltan parámetros: usuario o contraseña' });
    }

    // Leer el archivo JSON y verificar los datos
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ error: 'Error al leer los datos' });
        }

        try {
            const savedData = JSON.parse(data);

            // Comparar usuario y contraseña
            if (savedData.user === user && savedData.password === password) {
                return res.status(200).json({ message: 'Credenciales válidas' });
            } else {
                return res.status(401).json({ message: 'Credenciales inválidas' });
            }
        } catch (parseError) {
            console.error('Error al parsear el archivo JSON:', parseError);
            return res.status(500).json({ error: 'Error al procesar los datos' });
        }
    });
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
