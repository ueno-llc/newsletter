module.exports = (array, from, to) => {
  if (!Array.isArray(array)) {
    return array;
  }

  if (typeof to === 'object') {
    return array.slice(from);
  }

  return array.slice(from, to);
}
