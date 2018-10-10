import all from './index';

all([1, 2, 3]); // true

all([0]); // false

all([2, 3, 4], x => x > 1); // true
