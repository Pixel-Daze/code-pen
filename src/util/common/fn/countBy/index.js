/**
 * @name countBy
 * @desc 根据给定函数对数组的元素进行分组，并返回每个组中元素的数量。使用Array.prototype.map()将数组中的值映射到一个方法或者属性名。通过Array.prototype.reduce创建一个对象，对象的属性由前面的映射结果生成。
 * @param {Array} arr 
 * @param {*} fn 
 * @returns {Object}
 */
const countBy = (arr, fn) => 
    arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});

export default countBy;