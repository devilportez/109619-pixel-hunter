const countScore = (answers, lives) => {
  let score = 0;

  if (answers.length < 10) {
    return -1;
  }
  answers.map((answer) => {
    if (answer.isCorrect) {
      score += 100;
    }
    if (answer.isCorrect && answer.time < 10) {
      score += 50;
    }
    if (answer.isCorrect && answer.time > 20) {
      score -= 50;
    }
  });
  score += lives * 50;

  return score;
};

export default countScore;
