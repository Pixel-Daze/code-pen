import countBy from './index'

countBy([6.1, 4.2, 6.3], Math.floor); // { '4': 1, '6': 2 }

countBy(['one', 'two', 'three'], 'length'); // { '3': 2, '5': 1 }
