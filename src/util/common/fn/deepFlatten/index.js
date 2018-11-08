/**
 * @name deepFlatten
 * @desc 数组扁平化。使用递归。使用Array.prototype.concat()和一个空数组([])和扩展运算符
 * @param {Array} arr 
 * @returns {Array}
 */
const deepFlatten = arr => [].concat(...arr.map(v => Array.isArray(v) ? deepFlatten(v) : v))

deepFlatten([1, [2], [[3], 4], 5]) // [ 1, 2, 3, 4, 5 ]