function classificaDia(numero) {
    switch (numero) {
        case 1:
            return "Fim de semana, é domingo"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            return "Dia útil"
        case 7:
            return "Fim de semana, é sabado"
        default: 
            return "Dia inválido"
    }
}

console.log(verificaDia(1));