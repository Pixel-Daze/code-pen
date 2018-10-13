import bifurcate from './index'

bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
