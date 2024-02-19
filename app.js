let numeroSecreto = 0
let intentos = 0
let numeroSorteados = []
let numeroMaximo = 10
let maximasJugadas = 3

function asignarTextoElemnto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto
}

function verificarIntento() {
    
    let numeroUsuario = parseInt(document.getElementById("valor-usuario").value)

    if(numeroSecreto === numeroUsuario) {
        asignarTextoElemnto("p", `Acertaste el número en: ${intentos} ${(intentos == 1) ? "intento" : "intentos"} `)
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else if(numeroSecreto > numeroUsuario) {
        asignarTextoElemnto("p", "El número secreto es mayor")
        intentos++
    } else {
        asignarTextoElemnto("p", "El número secreto es menor")
        intentos++
    }
    
    limpiarCaja()
}

function limpiarCaja() {
    document.querySelector('#valor-usuario').value = ""
}

function aleatorio() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) +1

    console.log(numeroGenerado);
    console.log(numeroSorteados);

    if(numeroSorteados.length == maximasJugadas) {
        asignarTextoElemnto("p", "Ya se sortearon todos lo número posibles.")
    } else {
        if(numeroSorteados.includes(numeroGenerado)){
            return aleatorio()
        } else {
            numeroSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemnto("h1", "Juego secreto")
    asignarTextoElemnto("p", `Ingresa un número del 1 al ${numeroMaximo}`)
    numeroSecreto = aleatorio()
    intentos = 1    
}

function reiniciarJuego() {
    
    limpiarCaja()
    condicionesIniciales()
    document.querySelector("#reiniciar").setAttribute("disabled", "true")

}

condicionesIniciales()