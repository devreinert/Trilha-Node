const chave = "c1b1aead336945fa9f0222129261606";

async function obterClima() {
    const resposta = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${chave}&q=Itajai`
    );

    const dados = await resposta.json();

    console.log(
        dados.current.condition.text,
        dados.current.temp_c
    );
}

obterClima();