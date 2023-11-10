import * as http from 'http';

const port = 3000;

const server = http.createServer(
    (request, response) => {
        response.end('Hello! Node.js with TypeScript')
    }
)

server.listen(port);

console.log(`Access http://localhost:${port}`)
