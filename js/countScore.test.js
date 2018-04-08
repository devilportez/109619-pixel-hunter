import {assert} from 'chai';
import countScore from './countScore';

describe(`Test score counter`, () => {
  it(`Should return -1 if less then 10 answers`, () => {
    const answers = [
      {
        isCorrect: true,
        time: 10
      },
      {
        isCorrect: false,
        time: 20
      },
      {
        isCorrect: true,
        time: 30
      }
    ];
    assert.strictEqual(countScore(answers, 3), -1);
  });

  it(`Should return 1150 for standard answers and 3 lives`, () => {
    const answers = [
      {
        isCorrect: true,
        time: 15
      },
      {
        isCorrect: true,
        time: 15
      },
      {
        isCorrect: true,
        time: 15
      },
      {
        isCorrect: true,
        time: 15
      },
      {
        isCorrect: true,
        time: 15
      },
      {
        isCorrect: true,
        time: 15
      },
      {
        isCorrect: true,
        time: 15
      },
      {
        isCorrect: true,
        time: 15
      },
      {
        isCorrect: true,
        time: 15
      },
      {
        isCorrect: true,
        time: 15
      }
    ];
    assert.strictEqual(countScore(answers, 3), 1150);
  });

  it(`Should return 1050 if 3 fast answers, 3 long answers and 1 life`, () => {
    const answers = [
      {
        isCorrect: true,
        time: 9
      },
      {
        isCorrect: true,
        time: 8
      },
      {
        isCorrect: true,
        time: 7
      },
      {
        isCorrect: true,
        time: 21
      },
      {
        isCorrect: true,
        time: 22
      },
      {
        isCorrect: true,
        time: 23
      },
      {
        isCorrect: true,
        time: 15
      },
      {
        isCorrect: true,
        time: 15
      },
      {
        isCorrect: true,
        time: 15
      },
      {
        isCorrect: true,
        time: 15
      }
    ];
    assert.strictEqual(countScore(answers, 1), 1050);
  });

  it(`Should return 550 if all answers is long and 1 life left`, () => {
    const answers = [
      {
        isCorrect: true,
        time: 21
      },
      {
        isCorrect: true,
        time: 22
      },
      {
        isCorrect: true,
        time: 23
      },
      {
        isCorrect: true,
        time: 24
      },
      {
        isCorrect: true,
        time: 25
      },
      {
        isCorrect: true,
        time: 27
      },
      {
        isCorrect: true,
        time: 23
      },
      {
        isCorrect: true,
        time: 21
      },
      {
        isCorrect: true,
        time: 23
      },
      {
        isCorrect: true,
        time: 28
      }
    ];
    assert.strictEqual(countScore(answers, 1), 550);
  });

  it(`Should return 1250 if all answers is fast, 2 incorrect and 1 life left`, () => {
    const answers = [
      {
        isCorrect: false,
        time: 1
      },
      {
        isCorrect: false,
        time: 2
      },
      {
        isCorrect: true,
        time: 3
      },
      {
        isCorrect: true,
        time: 4
      },
      {
        isCorrect: true,
        time: 5
      },
      {
        isCorrect: true,
        time: 7
      },
      {
        isCorrect: true,
        time: 3
      },
      {
        isCorrect: true,
        time: 1
      },
      {
        isCorrect: true,
        time: 3
      },
      {
        isCorrect: true,
        time: 8
      }
    ];
    assert.strictEqual(countScore(answers, 1), 1250);
  });
});
