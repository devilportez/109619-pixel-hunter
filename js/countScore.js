const countScore = (answers, lives) => {
  const CORRECT_ANSWER = 100;
  const EXTRA_SCORE = 50;

  if (answers.length < 10) {
    return -1;
  }

  const answerScore = answers.reduce((score, answer) => {
    if (answer.isCorrect) {
      if (answer.time <= 10) {
        return score + (CORRECT_ANSWER + EXTRA_SCORE);
      }
      if (answer.time <= 20) {
        return score + CORRECT_ANSWER;
      }
      if (answer.time <= 30) {
        return score + (CORRECT_ANSWER - EXTRA_SCORE);
      }
    }

    return score;
  }, 0);

  const livesScore = lives * EXTRA_SCORE;

  return answerScore + livesScore;
};

export default countScore;
