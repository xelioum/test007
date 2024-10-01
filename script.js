function generateLastFourDigits(targetPosition) {
    // Los primeros tres números de la secuencia
    let num1 = 2023;
    let num2 = 2024;
    let num3 = 2025;
    let nextValue;
  
    // Mostrar los primeros tres números
    console.log(`Posición 1: ${num1}`);
    console.log(`Posición 2: ${num2}`);
    console.log(`Posición 3: ${num3}`);
  
    // Arreglo para almacenar resultados y un objeto para contar repeticiones
    const results = {};
    const sequence = [];
  
    // Almacenar los primeros tres resultados
    results[num1] = [1];
    results[num2] = [2];
    results[num3] = [3];
    sequence.push(num1, num2, num3);
  
    // Detectar ciclos en la secuencia
    let cycleFound = false;
    let cycleStart = 0;
    let cycleLength = 0;
  
    // Empezamos desde la cuarta posición
    for (let i = 4; !cycleFound; i++) {
      // Sumar los tres últimos números y tomar las últimas 4 cifras
      nextValue = (num1 + num2 + num3) % 10000;
  
      // Verificar si ya encontramos este valor previamente
      if (results[nextValue]) {
        // Si el valor ya fue encontrado antes, esto indica el comienzo de un ciclo
        cycleFound = true;
        cycleStart = results[nextValue][0];
        cycleLength = i - cycleStart;
        console.log(
          `Ciclo encontrado desde la posición ${cycleStart} con longitud ${cycleLength}`
        );
      }
  
      // Almacenar el resultado en el objeto para contar posiciones y en la secuencia
      results[nextValue] = [i];
      sequence.push(nextValue);
  
      // Actualizar los valores para la siguiente iteración
      num1 = num2;
      num2 = num3;
      num3 = nextValue;
    }
  
    // Calcular la posición en el ciclo
    let effectivePosition =
      ((targetPosition - cycleStart) % cycleLength) + cycleStart;
    console.log(
      `La posición ${targetPosition} corresponde a la posición ${effectivePosition} dentro del ciclo.`
    );
  
    // Retornar el valor en la posición calculada
    return sequence[effectivePosition - 1];
  }
  
  // Dada la posición del problema: 2023202320232023
  let targetPosition = 2023202320232023; // Usamos el número completo
  
  // Ejecutar la función y obtener las últimas 4 cifras en la posición especificada
  let result = generateLastFourDigits(targetPosition);
  
  console.log(`Posición ${targetPosition}: ${result}`)