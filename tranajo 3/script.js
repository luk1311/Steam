let estado = false;
const boton= document.getElementById("boton");

function cambiar (){
    if(estado===false){
        boton.innerText("Sin presionar")
        estado= true;
    } else{
        boton.innerText("Presionado");
        estado= false;
    }
}
cambiar()