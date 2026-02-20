const fechaInput = document.getElementById("fecha");
const resultado = document.getElementById("resultado");
function calcular() {
    const nacimiento = new Date(fechaInput.value);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    console.log(mes, hoy.getDate() <= nacimiento.getDate(), hoy.getDate(), nacimiento.getUTCDate());



    if (isNaN(nacimiento)) {
        alert("Por favor, ingresa una fecha válida.");
        return;
    } else if (edad < 0) {
        resultado.innerText = "¡Aún no has nacido!";
        return;    
    }
    if (mes < 0 || (mes === 0 && hoy.getDate() <= nacimiento.getDate())) {
        edad--;
        resultado.innerText = "Tu edad es: " + edad + " años";
    } 
    if (mes === 0 && hoy.getDate() === nacimiento.getUTCDate()) {
        resultado.innerText = "¡Feliz cumpleaños! Hoy cumples " + edad + " años.";
        return;
    }
   
}