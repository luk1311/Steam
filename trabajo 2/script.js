const tempInput = document.getElementById("tempInput");


function temperatura(temp){
    if(isNaN(temp)){
        console.log("El valor ingresado no es un número válido.");
        alert("Por favor, ingrese un número válido para la temperatura.");
        return;
    }       
        if(temp<=0){
            console.log(`La temperatura es de ${temp} grados Celsius, por lo tanto es FRIO.`);
            alert("FRIO");
        }
        else if (temp>0 && temp<=15){
            console.log(`La temperatura es de ${temp} grados Celsius, por lo tanto es TEMPLADO.`);
        }
        else if (temp>15 && temp<=25){
            console.log(`La temperatura es de ${temp} grados Celsius, por lo tanto es AGRADABLE.`);
        }
        else if (temp>25 && temp<=35){
            console.log(`La temperatura es de ${temp} grados Celsius, por lo tanto es CALUROSO.`);
            alert("CALUROSO");
        }
        else{
            console.log(`La temperatura es de ${temp} grados Celsius, por lo tanto es MUY CALUROSO / SOFOCANTE.`);
            alert("MUY CALUROSO!!!!!");
        }
}
function enviarTemperatura() {
    const tempValue = parseFloat(tempInput.value);
    temperatura(tempValue);
}

temperatura(tempInput.value);