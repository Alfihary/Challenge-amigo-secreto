// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para almacenar los nombres

let amigos = [];

//Función para agregar amigos

function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value.trim();

  //Validación para que el campo no esté vacío
  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  //actualizar el array de amigos
  amigos.push(nombreAmigo);

  //limpiar el campo de entrada
  inputAmigo.value = "";

  actualizarListaAmigos();

  limpiarResultado();
}
//Implementa una función para actualizar la lista de amigos

function actualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");

  // Limpiar la lista existente
  listaAmigos.innerHTML = "";

  // Iterar sobre el arreglo: Usa un bucle for
  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo;

    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("Agregue al menos un amigo antes de realizar el sorteo.");
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado
  mostrarResultado(amigoSorteado);
}

// Función para mostrar el resultado del sorteo

function mostrarResultado(amigoSorteado) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</li>`;
}

// Función para limpiar el resultado

function limpiarResultado() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
}
