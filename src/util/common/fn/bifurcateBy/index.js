/**
 * @name bifurcateBy
 * @desc 根据判定函数将值拆分成两组，判定函数指定输入集合中的元素属于哪一个组。如果判定函数返回true，则在集合中对应的元素属于第一个组，否则它就属于第二个组。使用Array.prototype.reduce()和Array.prototype.push()并根据fn向组中添加元素。
 * @param {Array} arr 
 * @param {Function} fn 
 * @returns {Array}
 */
const bifurcateBy = (arr, fn) =>
    arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[],[]]);

export default bifurcateBy;
