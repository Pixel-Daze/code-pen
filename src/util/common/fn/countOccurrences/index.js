/**
 * @name countOccurrences
 * @desc 计算数组中的值出现的次数。每次你遇见数组中的某个具体值，就用Array.prototype.reduce()来增加计数器。
 * @param {Array} arr 
 * @param {*} val 
 * @returns {Number}
 */
const countOccurrences = (arr, val) => arr.reduce((a, v) => v === val ? a + 1 : a, 0);

export default countOccurrences