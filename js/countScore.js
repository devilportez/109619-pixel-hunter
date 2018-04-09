const countScore = (answers, lives) => {
  const CORRECT_ANSWER = 100;
  const CORRECT_FAST_ANSWER = 150;
  const CORRECT_SLOW_ANSWER = 50;
  const LIVE_COST = 50;
  let score = 0;

  if (answers.length < 10) {
    return -1;
  }
  answers.map((answer) => {
    if (answer.isCorrect && answer.time >= 10 && answer.time <= 20) {
      score += CORRECT_ANSWER;
    }
    if (answer.isCorrect && answer.time < 10) {
      score += CORRECT_FAST_ANSWER;
    }
    if (answer.isCorrect && answer.time > 20) {
      score -= CORRECT_SLOW_ANSWER;
    }
  });
  score += lives * LIVE_COST;

  return score;
};

export default countScore;
