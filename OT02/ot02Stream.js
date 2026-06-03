const fs = require('fs');

const stream = fs.createReadStream('grandeArquivo.txt', 'utf8');
stream.on('data', (chunk) => {
    console.log('Novo pedaço recebido: ', chunk);
});