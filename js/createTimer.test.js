import {assert} from 'chai';
import createTimer from './createTimer';

describe(`Test timer creating`, () => {
  it(`Should return 29 after one tick`, () => {
    const time = 30;
    assert.strictEqual(createTimer(time).tick(), 29);
  });
  it(`Should return 20 after another one tick`, () => {
    const time = 21;
    assert.strictEqual(createTimer(time).tick(), 20);
  });
  it(`Should return message after last tick`, () => {
    const time = 1;
    assert.strictEqual(createTimer(time).tick(), `Your time is up`);
  });
  it(`Should return message if time equals 0`, () => {
    const time = 0;
    assert.strictEqual(createTimer(time).tick(), `Your time is up`);
  });
});
