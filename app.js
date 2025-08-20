// Variable para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo.trim() !== '') {
        amigos.push(nombreAmigo.trim());
        mostrarAmigos();
        document.getElementById('amigo').value = ''; // Limpia el campo de entrada
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

// Función para mostrar la lista de amigos en el HTML
function mostrarAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ''; // Limpia la lista antes de volver a llenarla
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

// Función principal para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Primero debes agregar nombres para sortear.");
        return;
    }

    // Selecciona un índice aleatorio del array de amigos
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Muestra el resultado en el HTML
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `<h3>¡El amigo secreto sorteado es: ${amigoSorteado}!</h3>`;
}