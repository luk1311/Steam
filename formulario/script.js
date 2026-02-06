const username= document.getElementById('nombre');
const rol= document.getElementById('rol');

function acceso(){
    if(username.value == "" || rol.value == ""){
        alert(`Ingresa todos los campos obligatorios`);
    }else if(username.value != "Lukas" || rol.value != "Estudiante"){
        alert(`Acceso denegado`);
    }else if(rol.value == "Profesor"){
        alert(`Acceso denegado ${username.value}`);
    }
    else{
        alert(`Acceso concedido ${username.value}`);
    }
}