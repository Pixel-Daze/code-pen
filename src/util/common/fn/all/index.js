/**
 * @name all
 * @desc 如果所提供的判定函数对集合中的所有元素都返回true，则返回true，否则返回false。使用Array.prototype.every()来测试集合中的所有元素是否都基于fn返回true。第二个参数fn可以缺省，使用Boolean作为默认值。注：return new Boolean(n)
 * @param {Array} arr 
 * @param {Function} fn 
 * @returns {Boolean}
 */
const all = (arr, fn = Boolean) => arr.every(fn);

export default all;
