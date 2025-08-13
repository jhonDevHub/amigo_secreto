<<<<<<< HEAD
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[];

function agregarAmigo() {
    let valorEntrada = document.getElementById("amigo");
    let nombre = valorEntrada.value.trim();
   
    if (nombre===""){
        alert("Ingrese un nombre válido");
        return;
    }
    amigos.push(nombre);

    valorEntrada.value ="";
    valorEntrada.focus();
    console.log(amigos);

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let lista =document.getElementById("listaAmigos");
    lista.innerHTML="";

    for (let i=0; i<amigos.length;i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length ===0){
        document.getElementById("resultado").innerHTML="Lista vacía, no hay amigos para sortear";
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML=`El amigo sorteado es:<strong> ${amigoSorteado}<strong/>`;

    //con esta línea lograremos que no se repita el mismo nombre sorteado, y una vez sorteado sea quitado de la lista
    amigos.splice(indiceAleatorio,1);

    actualizarListaAmigos();
}

