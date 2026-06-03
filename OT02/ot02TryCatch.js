try {
    const data = fs.readFileSync('inexistente.txt', 'utf8');
}

catch (err){
    console.error('Erro ao ler arquivo: ', err.message);
}