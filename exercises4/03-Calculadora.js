function calcularPrecioFinal(precioBase, esVIP) {
	const precioFinal = esVIP ? precioBase * 0.9 : precioBase * 1.21
    const precioOriginal = precioBase
	return {
		precioOriginal, precioFinal
	}
}

console.log(calcularPrecioFinal(100, true))
console.log(calcularPrecioFinal(100, false))
