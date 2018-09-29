/* global it, expect */
const compile = require('compile');

it('compiles block with modifier', async () => {
  const expected = '[class*="block--"][class*="--modifier"]';
  const data = `
    @include beam('block--modifier') {
      color: rebeccapurple;
    }
  `;

  expect.assertions(1);
  await expect(compile(data)).resolves.toMatch(expected);
});

it('compiles block + element with modifier', async () => {
  const expected = '[class*="block__element--"][class*="--modifier"]';
  const data = `
    @include beam('block__element--modifier') {
      color: rebeccapurple;
    }
  `;

  expect.assertions(1);
  await expect(compile(data)).resolves.toMatch(expected);
});

it('compiles block with modifiers', async () => {
  const expected = '[class*="block--"][class*="--mod1"][class*="--mod2"]';
  const data = `
    @include beam('block--mod1--mod2') {
      color: rebeccapurple;
    }
  `;

  expect.assertions(1);
  await expect(compile(data)).resolves.toMatch(expected);
});

it('compiles block + element with modifiers', async () => {
  const expected = '[class*="block__element--"][class*="--mod1"][class*="--mod2"]';
  const data = `
    @include beam('block__element--mod1--mod2') {
      color: rebeccapurple;
    }
  `;

  expect.assertions(1);
  await expect(compile(data)).resolves.toMatch(expected);
});
