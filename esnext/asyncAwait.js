function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}

esperarPor(2000)
    .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...'))
    .then(esperarPor)

async function executar(){
    await esperarPor(1500)
    console.log('Async/Await 1...')

    await esperarPor(1500)
    console.log('Async/Await 2...')

    await esperarPor(1500)
    console.log('Async/Await 3...')
}
executar()

function gerarNumerosEntre(min, max, numerosProibidos){
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            reject ('Número repetido!')
        }else{
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros){
    try{
    const numeros = []
    for(let _ of Array(qtdNumeros).fill()){
        numeros.push(await gerarNumerosEntre(1, 60, numeros))
    }
    return numeros
    }catch(e){
        throw "Que chato.."
    } 
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)
