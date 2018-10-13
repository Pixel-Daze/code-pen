import arrayToCSV from './index'

arrayToCSV([['x', 'y'], ['a', 'b', 'c']]); // "'x','y'/n'a','b','c'"
arrayToCSV([[1, 2, 3], ['a', 'b', 'c']], ';')// "'1';'2';'3'/n'a';'b';'c'"