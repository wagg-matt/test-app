import GroupArray from './GroupArray';

test('GroupArray returns [[1, 2], [3, 4], [5]]', () => {
  expect(GroupArray([1, 2, 3, 4, 5], 2)).toStrictEqual([[1, 2], [3, 4], [5]]);
});

test('GroupArray returns [[1, 2, 4], [5, 7, 8], [9, 10]]', () => {
  expect(GroupArray([1, 2, 4, 5, 7, 8, 9, 10], 3)).toStrictEqual([[1, 2, 4], [5, 7, 8], [9, 10]]);
});

test('GroupArray returns positive integers, returns [[1, 2], [3, 4], [5]]', () => {
  expect(GroupArray([1, 2, 3, -4, 0], 2)).toStrictEqual([[1, 2], [3]]);
});

test('GroupArray array undefined returns false', () => {
  expect(GroupArray()).toStrictEqual(false);
});