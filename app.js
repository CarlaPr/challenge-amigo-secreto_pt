//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){
    var nomeAmigo = document.getElementById("amigo").value;

    if (nomeAmigo.trim() !== "") {
        amigos.push(nomeAmigo);
        atualizarLista();
        document.getElementById("amigo").value = "";
    } else {
        alert("Digite um nome antes de adicionar!");
    }
}
function atualizarLista() {
    var lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(function(amigo) {
        var item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    var indiceSorteado = Math.floor(Math.random() * amigos.length);
    var amigoSorteado = amigos[indiceSorteado];

    document.getElementById("listaAmigos").textContent = " ";
    
    document.getElementById("resultado").textContent = "O amigo sorteado é: " + amigoSorteado;
}