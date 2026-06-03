import fs from 'fs';

const arquivo = 'arquivo.txt';

fs.readFile(arquivo, 'utf8', (erro, dados)=> {
    if(erro){
        console.error('Um erro aconteceu: ', erro);
        return
    }

    console.log('Este é o texto do arquivo: ');
    console.log(dados);
})