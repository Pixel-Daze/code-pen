import bifurcateBy from './index';

bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); //[ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
