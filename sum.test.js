test('2+2=4', () => expect(2 + 2).toBe(4));

test('ES6 feature test (fail on Node 0.12)', () => {
  const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
  expect(sum(1, 2, 3)).toBe(6);
});
