### all
>如果所提供的判定函数对集合中的所有元素都返回`true`，则返回`true`，否则返回`false`。
使用[`Array.prototype.every()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)来测试集合中所有元素是否都基于`fn`返回`true`。第二个参数`fn`可以缺省，使用`Boolean`作为默认值，等价于`return new Boolean(x)`。

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
用[`Array.prototype.every()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)检查是否数组中的所有元素都和数组中第一个元素相同。
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
使用[`Array.prototype.some()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)来测试集合中所有元素是否都基于`fn`返回`true`。第二个参数fn可以缺省，使用`Boolean`作为默认值，等价于`return new Boolean(x)`。

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

>`map(fn)`方法将原数组中的每个元素调用`fn`后，返回返回值组成的新数组。
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
>使用[`Array.prototype.reduce()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)和`Array.prototype.push()`并根据`filter`向组中添加元素。

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
>使用[`Array.prototype.reduce()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)和`Array.prototype.push()`并根据`fn`向组中添加元素。
```
/**
 * @name bifurcateBy
 * @param {Array} arr 
 * @param {Function} fn 
 * @returns {Array}
 */
const bifurcateBy = (arr, fn) =>
    arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);

bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); //[ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
```

### chunk
>将数组拆分为指定大小的更小的数组。
>使用[`Array.from()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)创建一个新数组，这个数组长度长度为生成的块的数量。使用[`Array.prototype.slice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)将新数组的每一个元素映射到长度为size的块中。如果原始属组不能被平均分，最后一个数组将会包含剩余元素。
```
/**
 * @name chunk
 * @param {Array} arr 
 * @param {Number} size 
 * @returns {Array}
 */
const chunk = (arr, size) => 
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => 
        arr.slice(size * i, size * i + size)
    );

chunk([1, 2, 3, 4, 5], 2); // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
```

### compact
>移除数组中的false值。
>使用[`Array.prototype.filter()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)来过滤掉false值(`false`, `null`,` 0`,` ""`, `undefined,` and `NaN`)。

>`filter(fn)` 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
```
/**
 * @name compact
 * @param {Array} arr 
 * @returns {Array}
 */
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]
```

### countBy
>根据给定函数对数组的元素进行分组，并返回每个组中元素的数量。
>使用`Array.prototype.map()`将数组中的值映射到一个方法或者属性名。通过`Array.prototype.reduce()`创建一个对象，对象的属性由前面的映射结果生成。
```
/**
 * @name countBy
 * @param {Array} arr 
 * @param {*} fn 
 * @returns {Object}
 */
const countBy = (arr, fn) => 
    arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});

countBy([6.1, 4.2, 6.3], Math.floor); // { '4': 1, '6': 2 }
countBy(['one', 'two', 'three'], 'length'); // { '3': 2, '5': 1 }
```