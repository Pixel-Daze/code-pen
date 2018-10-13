/**
 * @name arrayToCSV
 * @desc 将一个二维数组转化为一个用逗号分隔的字符串。使用Array.prototype.map()和Array.prototype.join(delimiter)将单独的一维数组组合成字符串。使用Array.prototype.join('\n')将所有行组合成CSV字符串，用新的一行分隔字符串。第二个参数delimiter可以缺省,使用,作为默认分隔符。
 * @param {*} arr 
 * @param {*} delimiter 
 * @returns {String}
 */
const arrayToCSV = (arr, delimiter = ',') =>
    arr.map(v => v.map(x => `'${x}'`).join(delimiter)).join('\n');
    
export default arrayToCSV;
