import fs from 'fs';

fs.readFile('usuario.json', 'utf8', (erro, dados)=> {
    if(erro){
        console.error("Ocorreu um erro: ", (erro));
        return
    }

    const usuario = JSON.parse(dados);
    console.log('Dados do usuário: ');
    console.log(dados);
})