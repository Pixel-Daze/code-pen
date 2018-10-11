/**
 * @name any
 * @desc 如果提供的判定函数对集合中至少一个元素返回true，则返回true，否则返回false。使用Array.prototype.some()来测试集合中所有元素是否都基于fn返回true。第二个参数fn可以缺省，使用Boolean作为默认值，等价于return new Boolean(x)。
 * @param {Array} arr 
 * @param {Function} fn 
 * @returns {Boolean}
 */
const any = (arr, fn = Boolean) => arr.some(fn);

export default any;
