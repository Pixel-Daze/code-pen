/**
 * @name compact
 * @desc 移除数组中的false值。使用Array.prototype.filter()来过滤掉false值(false, null, 0, "", undefined, and NaN)。
 * @param {Array} arr 
 * @returns {Array}
 */
const compact = arr => arr.filter(Boolean);

export default compact;
