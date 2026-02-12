let estado = false;

function cambiar (){
    const boton= document.getElementById("boton");

    if(estado===false){
        boton.innerText= "Presionar";
        estado= true;
    } else{
        boton.innerText= "Presionado";
        estado= false;
    }
}
