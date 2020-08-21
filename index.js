function formatValue(value = 0) {
  let [real, cents = 0] = value.toString().split('.');

  real = real.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  cents = cents.toString().padEnd(2, '0');

  console.log(`R$ ${real},${cents}`);

  return `R$ ${real},${cents}`;
}

module.exports = {
  formatValue,
};
