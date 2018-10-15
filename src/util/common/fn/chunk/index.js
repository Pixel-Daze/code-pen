/**
 * @name chunk
 * @desc 将数组拆分为指定大小的更小的数组。使用Array.from()创建一个新数组，这个数组长度长度为生成的块的数量。使用Array.prototype.slice()将新数组的每一个元素映射到长度为size的块中。如果原始属组不能被平均分，最后一个数组将会包含剩余元素。
 * @param {Array} arr 
 * @param {Number} size 
 * @returns {Array}
 */
const chunk = (arr, size) => 
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => 
        arr.slice(size * i, size * i + size)
    );

export default chunk;
