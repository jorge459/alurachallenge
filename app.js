// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let participantes =[];
function agregarParticipantes(){
    let nuevoParticipante = document.getElementById('amigo');
    let participante = nuevoParticipante.value.trim();

    if(participante == ''){
        alert ("El campo esta vacio ingrese un nombre valido")
    }else{
        participantes.push(participante);
    }
    nuevoParticipante.value='';
    return;
}

function agregarElementosLista(){
    let listaParticipantes = document.getElementById("listaAmigos");
    listaParticipantes.innerHTML = "";
    for (let i=0; i<participantes.length;i++){
        let nuevaLista = document.createElement("li");
        nuevaLista.textContent = participantes[i];
        listaParticipantes.appendChild(nuevaLista);
    }
}

// function agregarAmigo(){
//     agregarParticipantes();
//     agregarElementosLista()
//     console.log(participantes);
// }



