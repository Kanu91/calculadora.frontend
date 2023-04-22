//indicamos las funciones de los botones
let input = document.getElementById("input");
let igual = document.getElementById("igual");
let limpiar = document.getElementById("limpiar");
let borrar = document.getElementById("borrar");
window.onload = () => {
    input.value = "";
};

//Aplica a todos los botones, excepto AC y DEL
let button_input = document.querySelectorAll(".input-button");

//Accede a cada clase usando forEach
button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if (igual_presionado == 1) {
            input.value = "";
            igual_presionado = 0;
        }
        //muestra el valor de cada botón
        input.value += button_class.value;
    });
});
//Solución para cuando el usuario ingresa 2 signos iguales (-- por ej) 
igual.addEventListener("click", () => {
    igual_presionado = 1;
    let inp_val = input.value;
    try {
        //evalúa la entrada de datos del usuario
        let solution = eval(inp_val);
        //Verdadero para números naturales 
        //falso para decimales
        if (Number.isInteger(solution)) {
            input.value = solution;
        } else {
            input.value = solution.toFixed(2);
        }
    } catch (err) {
        //Si el usuario ha ingresado una entrada inválida
        Swal.fire('Entrada Invalida');
    }
});
//Borra todos los datos ingresados
limpiar.addEventListener("click", () => {
    input.value = "";
});
//Borra ultimo digito
borrar.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
});

//se inicia la variable en 0 que indica que el boton = no a sido presionado
let igual_presionado = 0;
