/**
 * @name allEqual
 * @desc 检查数组内所有元素是否都相等。用Array.prototype.every()检查是否数组中的所有元素都和数组中第一个元素相同。
 * @param {Array} arr 
 * @returns {Boolean}
 */
const allEqual = arr => arr.every(val => val === arr[0]);

export default allEqual;
