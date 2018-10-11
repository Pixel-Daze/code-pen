import any from './index';

any([1, 2, 3], x => x > 2); // true

any([1, 2, 3], x => x > 4); // false

any([0]); // false