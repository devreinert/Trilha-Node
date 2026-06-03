const http = require('http');

const servidor = http.createServer((req, res) => {
        if(req.url === '/'){
            res.writeHead(200, {'Content-Type': 'text/type; charset=utf-8'});
            res.end('Página Inicial');
        }

        else if(req.url === '/sobre') {
            res.writeHead(200, {'Content-Type': 'text/type; charset=utf-8'});
            res.end('Página Sobre');
        }

        else if(req.url === '/contato') {
            res.writeHead(200, {'Content-Type': 'text/type; charset=utf-8'});
            res.end('Página Contato');
        }

        else {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Página não encontrada');
        }
});

servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});