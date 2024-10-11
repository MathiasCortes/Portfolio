const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const PORT = 26352;

// Token de ejemplo (puedes generarlo de forma dinámica si lo prefieres)
const validUsrToken = 'E@!rñUs84';
const validCliToken = 'C^!añEn41';

server.use(middlewares);

// Middleware para verificar el token
server.use((req, res, next) => {
    // Permitir acceso solo a las solicitudes GET a /users
    if (req.method === 'GET' && req.path === '/users') {
        const token = req.headers['authorization'];
        if (token === validUsrToken) {
            next(); // Token válido, continuar con la solicitud
        } else {
            res.sendStatus(403); // Prohibido si el token es incorrecto
        }
    } if (req.method === 'GET' && req.path === '/Clients') {
        if (token === validCliToken){
            next();
        } else {
            res.sendStatus(403);
        }
    } 
    
    else {
        next(); // Permitir otras solicitudes
    }
});

server.use(router);
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});
