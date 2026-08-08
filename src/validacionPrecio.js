function validarPrecio(precio) {
  // Retorna true si es un número, no es NaN (Not a Number) y es positivo
  return typeof precio === 'number' && !Number.isNaN(precio) && precio > 0;
}

module.exports = { validarPrecio };