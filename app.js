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



