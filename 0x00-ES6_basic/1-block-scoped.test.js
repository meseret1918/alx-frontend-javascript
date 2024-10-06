import taskBlock from './1-block-scoped';

describe('taskBlock', () => {
  test('returns correct values when trueOrFalse is true', () => {
    expect(taskBlock(true)).toEqual([true, false]);
  });

  test('returns correct values when trueOrFalse is false', () => {
    expect(taskBlock(false)).toEqual([false, true]);
  });
});
