// Pedimos al usuario que ingrese su nombre
const nombre = prompt("Bienvenid@ Ingrese su nombre:");

// Función para calcular los intereses
function calcularIntereses(prestamo, tasaInteres) {
  return prestamo * tasaInteres;
}

// Función para calcular el monto total y el valor de la cuota mensual
function calcularMontoTotalYCuota(prestamo, plazo) {
  let tasaInteres = 0.08;

  // Si el plazo es mayor o igual a 18 meses, aplicamos una tasa de interés del 12%
  if (plazo >= 18) {
    tasaInteres = 0.12;
  }

  const intereses = calcularIntereses(prestamo, tasaInteres);
  const montoTotal = prestamo + intereses;
  const cuotaMensual = montoTotal / plazo;

  return {
    montoTotal,
    cuotaMensual,
  };
}

// Array para almacenar los préstamos simulados
const prestamos = [];

let continuar = true;

while (continuar) {
  // Pedimos al usuario que ingrese el monto del préstamo
  const prestamo = parseFloat(prompt("Ingrese el monto del préstamo:"));

  // Pedimos al usuario que ingrese el plazo en meses
  const plazo = parseFloat(prompt("Ingrese el plazo en meses:"));

  // Calculamos el monto total a pagar y el valor de la cuota mensual utilizando la función
  const { montoTotal, cuotaMensual } = calcularMontoTotalYCuota(prestamo, plazo);

  // Creamos un objeto para representar el préstamo
  const nuevoPrestamo = {
    monto: prestamo,
    plazo,
    montoTotal,
    cuotaMensual,
  };

  // Almacenamos el objeto de préstamo en el array de préstamos
  prestamos.push(nuevoPrestamo);

  // Preguntamos al usuario si desea realizar otra simulación
  const respuesta = prompt("¿Desea realizar otra simulación? (s/n)");

  // Si la respuesta es "s", continuamos con el ciclo while
  continuar = respuesta.toLowerCase() === "s";
}

// Filtramos los préstamos que tienen un plazo mayor o igual a 12 meses
const prestamosFiltrados = prestamos.filter((prestamo) => prestamo.plazo >= 12);

// Ordenamos los préstamos filtrados por monto total de mayor a menor
prestamosFiltrados.sort((a, b) => b.montoTotal - a.montoTotal);

// Imprimimos el resumen de préstamos simulados utilizando el método map()
console.log(`Resumen de préstamos para ${nombre}:`);
prestamosFiltrados.map((prestamo, index) => {
  console.log(`Simulación ${index + 1}:`);
  console.log(`- Monto del préstamo: $${prestamo.monto.toFixed(2)}`);
  console.log(`- Plazo en meses: ${prestamo.plazo}`);
  console.log(`- Cuota mensual: $${prestamo.cuotaMensual.toFixed(2)}`);
  console.log(`- Monto total a pagar: $${prestamo.montoTotal.toFixed(2)}`);
  
});
