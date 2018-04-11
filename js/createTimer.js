const createTimer = (time) => ({
  'time': time,
  tick() {
    if (this.time > 0) {
      this.time--;
    }
    if (this.time === 0) {
      return `Your time is up`;
    }

    return this.time;
  }
});

export default createTimer;
