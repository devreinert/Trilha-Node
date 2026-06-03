const { Duplex } = require('stream');

class MeuDuplex extends Duplex {

    _write(chunk, encoding, callback) {
        const texto = chunk.toString().toUpperCase();

        // Envia o texto modificado para a parte de leitura
        this.push(texto);

        callback();
    }

    _read(size) {
        // Necessário implementar, mesmo que vazio
    }
}

const stream = new MeuDuplex();

stream.on('data', (chunk) => {
    console.log('Saída:', chunk.toString());
});

stream.write('Olá Node.js');
stream.write('Aprendendo Streams');
stream.end();