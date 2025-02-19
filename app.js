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

function sortearAmigo(){


    if (participantes.length == 0){
        alert("la lista se encuentra vacia");
    }else{
        let numeroRandom= Math.floor(Math.random()*participantes.length);
        let participanteSortudo = participantes[numeroRandom];
        
        let listaElegido = document.getElementById("resultado");
        listaElegido.innerHTML = "";
        let nuevaLista = document.createElement("li");
        nuevaLista.textContent = "El amigo Sortudo es: " + participanteSortudo ;
        listaElegido.appendChild(nuevaLista);
    }
}
function agregarAmigo(){
    agregarParticipantes();
    agregarElementosLista()
    
}



