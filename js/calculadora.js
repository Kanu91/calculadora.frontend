// Se inicia la variable en 0 que indica que el botón = no ha sido presionado
let igual_presionado = 0;
// Aplica a todos los botones, excepto AC y DEL
let button_input = document.querySelectorAll(".input-button");

// Indicamos las funciones de los botones
let input = document.getElementById("input");
let igual = document.getElementById("igual");
let limpiar = document.getElementById("limpiar");
let borrar = document.getElementById("borrar");

// Cuando se carga la página, se limpia el valor del input
window.onload = () => {
    input.value = "";
};

// Accede a cada clase usando forEach
button_input.forEach((button_class) => {
    // Agrega un event listener a cada botón de entrada
    button_class.addEventListener("click", () => {
        // Si el botón igual ha sido presionado antes, se limpia el valor del input
        if (igual_presionado == 1) {
            input.value = "";
            igual_presionado = 0;
        }
        // Concatena el valor del botón al input
        input.value += button_class.value;
    });
});

// Solución para cuando el usuario ingresa 2 signos iguales (-- por ej)
igual.addEventListener("click", () => {
    igual_presionado = 1;
    let inp_val = input.value;
    try {
        // Evalúa la entrada de datos del usuario y calcula la solución
        let solution = eval(inp_val);
        // Muestra la solución en el input si es un número válido
        if (!isNaN(solution)) {
            input.value = solution;
        }
    } catch (err) {
        // Si el usuario ha ingresado una entrada inválida, muestra un mensaje de error
        Swal.fire('Entrada Inválida');
    }
});

// Borra todos los datos ingresados
limpiar.addEventListener("click", () => {
    input.value = "";
});

// Borra el último dígito ingresado
borrar.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
});
