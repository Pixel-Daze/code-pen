### all
>如果所提供的判定函数对集合中的所有元素都返回`true`，则返回`true`，否则返回`false`。
使用`Array.prototype.every()`来测试集合中所有元素是否都基于`fn`返回`true`。第二个参数`fn`可以缺省，使用`Boolean`作为默认值，等价于`return new Boolean(x)`。

> `every(fn)` 方法使用`fn`检测数组中的所有元素：
> - 如果数组中检测到有一个元素不满足，则整个表达式返回 `false` ，且剩余的元素不会再进行检测。
> - 如果所有元素都满足条件，则返回 `true`。
```
/**
 * @name all
 * @param {Array} arr 
 * @param {Function} fn 
 * @returns {Boolean}
 */
const all = (arr, fn = Boolean) => arr.every(fn);

all([1, 2, 3]); // true
all([0]); // false
all([2, 3, 4], x => x > 1); // true
```

### allEqual
>检查数组内所有元素是否都相等。
用`Array.prototype.every()`检查是否数组中的所有元素都和数组中第一个元素相同。
```
/**
 * @name allEqual
 * @param {Array} arr 
 * @returns {Boolean}
 */
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```

### any
>如果提供的判定函数对集合中至少一个元素返回`true`，则返回`true`，否则返回`false`。
使用`Array.prototype.some()`来测试集合中所有元素是否都基于`fn`返回`true`。第二个参数fn可以缺省，使用`Boolean`作为默认值，等价于`return new Boolean(x)`。

>`some(fn)` 方法使用`fn`检测数组中的所有元素：
> - 如果有一个元素满足条件，则表达式返回`true` , 剩余的元素不会再执行检测。
> - 如果没有满足条件的元素，则返回`false`。
```
/**
 * @name any
 * @param {Array} arr 
 * @param {Function} fn 
 * @returns {Boolean}
 */
const any = (arr, fn = Boolean) => arr.some(fn);

any([1, 2, 3], x => x > 2); // true
any([1, 2, 3], x => x > 4); // false
any([0]); // false
```

### arrayToCSV
>将一个二维数组转化为一个用逗号分隔的字符串。
>使用`Array.prototype.map()`和`Array.prototype.join(delimiter)`将单独的一维数组组合成字符串。使用`Array.prototype.join('\n')`将所有行组合成CSV字符串，用新的一行分隔字符串。第二个参数`delimiter`可以缺省,使用`,`作为默认分隔符。
```
/**
 * @name arrayToCSV
 * @param {Array} arr 
 * @param {String} delimiter 
 * @returns {String}
 */
const arrayToCSV = (arr, delimiter = ',') =>
    arr.map(v => v.map(x => `'${x}'`).join(delimiter)).join('\n');

arrayToCSV([['x', 'y'], ['a', 'b', 'c']]); // "'x','y'/n'a','b','c'"
arrayToCSV([[1, 2, 3], ['a', 'b', 'c']], ';')// "'1';'2';'3'/n'a';'b';'c'"
```

### bifurcate
>将值拆分成两组。如果一个元素在`filter`中是true，则在集合中对应的元素属于第一个组，否则它就属于第二个组。
>使用`Array.prototype.reduce()`和`Array.prototype.push()`并根据`filter`向组中添加元素。

>`reduce(callback,[initialValue])`方法为数组中的每一个元素依次执行回调函数（不包括数组中被删除或从未被赋值的元素），返回一个具体的结果。
>- callback （执行数组中每个值的函数，包含四个参数）
>    - previousValue （第一项的值或者上一次叠加的结果值，或者是提供的初始值（initialValue））
>    - currentValue （数组中当前被处理的元素）
>    - index （当前元素在数组中的索引）
>    - array （数组本身）
>- initialValue （作为第一次调用 callback 的第一个参数，可以控制返回值的格式）

>注：根据bifurcate表现，箭头函数函数体中，代码用`()`包裹，用`,`隔开，返回最后一句代码，[mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)上未提供该写法。
```
/**
 * @name bifurcate
 * @param {Array} arr 
 * @param {Array} filter 
 * @returns {Array}
 */
const bifurcate = (arr, filter) =>
    arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
    
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
```

### bifurcateBy
>根据判定函数将值拆分成两组，判定函数指定输入集合中的元素属于哪一个组。如果判定函数返回true，则在集合中对应的元素属于第一个组，否则它就属于第二个组。
>使用`Array.prototype.reduce()`和`Array.prototype.push()`并根据`fn`向组中添加元素。
```
/**
 * @name bifurcateBy
 * @param {Array} arr 
 * @param {Function} fn 
 * @returns {Array}
 */
const bifurcateBy = (arr, fn) =>
    arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[],[]]);

bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); //[ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
```