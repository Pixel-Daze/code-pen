var arr = [1, 3, 5, 7, 9];
var reducer = function add(sumSorFar, item) {
    sumSorFar.sum += item;
    return sumSorFar;
}

var total = arr.reduce(reducer, {sum: 0});
console.log(total)