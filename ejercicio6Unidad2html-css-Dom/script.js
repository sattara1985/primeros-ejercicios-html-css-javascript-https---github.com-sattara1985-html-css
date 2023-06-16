function calcularResultados() {
    // Obtener los valores ingresados por los vendedores
    let juanaAqua = parseInt(document.getElementById('juana-aqua').value);
    let juanaEmocion = parseInt(document.getElementById('juana-emocion').value);
    let juanaAlegria = parseInt(document.getElementById('juana-alegria').value);
    let juanaFrescura = parseInt(document.getElementById('juana-frescura').value);

    let pedroAqua = parseInt(document.getElementById('pedro-aqua').value);
    let pedroEmocion = parseInt(document.getElementById('pedro-emocion').value);
    let pedroAlegria = parseInt(document.getElementById('pedro-alegria').value);
    let pedroFrescura = parseInt(document.getElementById('pedro-frescura').value);

    // Validar si se ingresaron valores numéricos
    if (isNaN(juanaAqua) || isNaN(juanaEmocion) || isNaN(juanaAlegria) || isNaN(juanaFrescura) ||
        isNaN(pedroAqua) || isNaN(pedroEmocion) || isNaN(pedroAlegria) || isNaN(pedroFrescura)) {
      mostrarMensajeError('Error: Solo se deben ingresar valores Numericos.');
      return;
    }

    // Definir los nombres y precios de los productos
    const productos = [
      { nombre: 'Aqua', precio: 200 },
      { nombre: 'Emoción', precio: 180 },
      { nombre: 'Alegria', precio: 160 },
      { nombre: 'Frescura', precio: 150 }
    ];

    // Calcular la cantidad de cada producto vendido por cada vendedor
    let juanaVentas = [juanaAqua, juanaEmocion, juanaAlegria, juanaFrescura];
    let pedroVentas = [pedroAqua, pedroEmocion, pedroAlegria, pedroFrescura];

    // Calcular la suma total de dinero recolectada por cada vendedor
    let juanaTotal = calcularTotal(juanaVentas, productos);
    let pedroTotal = calcularTotal(pedroVentas, productos);

    // Encontrar el empleado del mes
    let empleadoDelMes = encontrarEmpleadoDelMes(juanaTotal, pedroTotal);

    // Mostrar los resultados en el documento
    mostrarVentas(juanaVentas, productos, 'venta-juana');
    mostrarVentas(pedroVentas, productos, 'venta-pedro');

    mostrarResultado('--Suma total de dinero recolectada por Juana: $' + juanaTotal, 'resultado');
    mostrarResultado('--Suma total de dinero recolectada por Pedro: $' + pedroTotal, 'resultado');
    mostrarResultado('Empleado del mes Es: ' + empleadoDelMes, 'resultado');
  }

  function calcularTotal(ventas, productos) {
    let total = 0;
    for (let i = 0; i < productos.length; i++) {
      total += ventas[i] * productos[i].precio;
    }
    return total;
  }

  function mostrarVentas(ventas, productos, elemento) {
    let mensaje = 'Cantidad de cada producto vendido:';
    for (let i = 0; i < productos.length; i++) {
      mensaje += '\n' + productos[i].nombre + ': ' + ventas[i];
    }
    mostrarResultado(mensaje, elemento);
  }

  function encontrarEmpleadoDelMes(totalJuana, totalPedro) {
    if (totalJuana > totalPedro) {
      return 'Juana';
    } else if (totalPedro > totalJuana) {
      return 'Pedro';
    } else {
      return 'Empate';
    }
  }

  function mostrarResultado(mensaje, elemento) {
    document.getElementById(elemento).innerText = mensaje;
  }

  function mostrarMensajeError(mensaje) {
    mostrarResultado(mensaje, 'resultado');
  }
