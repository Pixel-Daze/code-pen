/**
 * @name bifurcate
 * @desc 将值拆分成两组。如果一个元素在filter中是true，则在集合中对应的元素属于第一个组，否则它就属于第二个组。使用Array.prototype.reduce()和Array.prototype.push()并根据filter向组中添加元素。
 * @param {Array} arr 
 * @param {Array} filter 
 * @returns {Array}
 */
const bifurcate = (arr, filter) =>
    arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
    
export default bifurcate;
