function incerir(val) {
    var tela = document.getElementById("resultado").innerText
    document.getElementById("resultado").innerHTML = tela + val
}

function clean() {
    document.getElementById("resultado").innerText = " "

}

function resultado() {
    var tela = document.getElementById("resultado").innerText
    document.getElementById("resultado").innerText = eval(tela)
}