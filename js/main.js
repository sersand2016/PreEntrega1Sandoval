/* 
Este algoritmo muestra un menú con las opciones disponibles en JANO 3D, y permite al usuario elegir una opción y realizar una acción. Las opciones son: 1) Ver los modelos disponibles, 2) Solicitar una impresión personalizada, 3) Salir del programa. El algoritmo usa un condicional para calcular el precio según el material y un ciclo para repetir el menú hasta que el usuario quiera salir
*/




let opcion; // La opción elegida por el usuario
let modelos; // El array con los modelos disponibles
let modelo; // El modelo elegido por el usuario
let material; // El material elegido por el usuario
let tamaño; // El tamaño elegido por el usuario
let cantidad; // La cantidad elegida por el usuario
let precio; // El precio calculado



// Mostrar un mensaje de bienvenida
alert("Bienvenido a Jano 3D");

// Repetir hasta que el usuario elija salir
do {
// Mostrar el menú con las opciones
opcion = parseInt(prompt("Elija una opción:\n1) Ver los modelos disponibles\n2) Solicitar una impresión personalizada\n3) Salir del programa"));


// Ejecutar una acción según la opción
switch (opcion) {
case 1: // Ver los modelos disponibles
alert("Los modelos disponibles son:\nCubo\nEsfera\nCono\nCilindro\nToroide");
break;
case 2: // Solicitar una impresión personalizada
// Pedir los datos al usuario
modelo = prompt("Ingrese el modelo que desea imprimir");
material = prompt("Ingrese el material (PLA o ABS)");
tamaño = parseInt(prompt("Ingrese el tamaño en centímetros cúbicos"));
cantidad = parseInt(prompt("Ingrese la cantidad de unidades"));


// Calcular el precio según el material y el tamaño
if (material == "PLA") {
precio = tamaño * cantidad * 0.1;
} else if (material == "ABS") {
precio = tamaño * cantidad * 0.15;
} else {
precio = 0;
}

// Mostrar el resultado
if (precio > 0) {
alert(`El precio de la impresión personalizada es ${precio} dólares`);
} else {
alert("El material ingresado no es válido");
}
break;
case 3: // Salir del programa
alert("Gracias por visitar Jano 3D");
break;
default: // Opción inválida
alert("La opción ingresada no es válida");
break;
}
} while (opcion != 3); // Fin del ciclo
