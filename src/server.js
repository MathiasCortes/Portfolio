const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const PORT = 26352;


const validUsrToken = 'E@!rñUs84';
const validCliToken = 'C^!añEn41';

server.use(middlewares);

const token = req.headers['Token'];
server.use((req, res, next) => {
    if (req.method === 'GET' && req.path === '/users') {
        if (token === validUsrToken) {
            next(); 
        } else {
            res.sendStatus(403); 
        }
    } if (req.method === 'GET' && req.path === '/Clients') {
        if (token === validCliToken){
            next();
        } else {
            res.sendStatus(403);
        }
    } else {
        next(); 
    }
});

server.use(router);
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});

switch (req.path) {
    case '/users':
        
    break;
    case '/clients':
            before;

    default:
        break;
}