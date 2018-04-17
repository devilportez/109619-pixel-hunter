const countScore = (answers, lives) => {
  const CORRECT_ANSWER = 100;
  const EXTRA_SCORE = 50;

  if (answers.length < 10) {
    return -1;
  }

  const answersScore = answers.reduce((sum, answer) => {
    let score = 0;
    if (answer.isCorrect) {
      if (answer.time > 0 && answer.time <= 10) {
        score += (CORRECT_ANSWER + EXTRA_SCORE);
      } else if (answer.time > 10 && answer.time <= 20) {
        score += CORRECT_ANSWER;
      } else if (answer.time > 20 && answer.time <= 30) {
        score += (CORRECT_ANSWER - EXTRA_SCORE);
      }
    }

    return sum + score;
  }, 0);

  const livesScore = lives * EXTRA_SCORE;

  return answersScore + livesScore;
};

export default countScore;
