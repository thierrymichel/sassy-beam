/* global it, expect */
const compile = require('compile');

it('compiles block', async () => {
  const expected = '.block, [class*="block--"]';
  const data = `
    @include beam('block') {
      color: rebeccapurple;
    }
  `;

  expect.assertions(1);
  await expect(compile(data)).resolves.toMatch(expected);
});

it('compiles block + element', async () => {
  const expected = '.block__element, [class*="block__element--"]';
  const data = `
    @include beam('block__element') {
      color: rebeccapurple;
    }
  `;

  expect.assertions(1);
  await expect(compile(data)).resolves.toMatch(expected);
});

it('compiles block + element + sub-element', async () => {
  const expected = '.block__element__sub-element, [class*="block__element__sub-element--"]';
  const data = `
    @include beam('block__element__sub-element') {
      color: rebeccapurple;
    }
  `;

  expect.assertions(1);
  await expect(compile(data)).resolves.toMatch(expected);
});
