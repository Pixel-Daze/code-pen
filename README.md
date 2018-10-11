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