const fs = require('fs');

fs.writeFileSync('arquivo.txt', 'Conteúdo inicial');

const conteudo = fs.readFileSync('arquivo.txt', 'utf8');
console.log(conteudo);