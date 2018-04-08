const createTimer = (time) => ({
  'time': time,
  tick() {
    if (this.time === 0) {
      return `Your time is up`;
    }
    this.time--;

    return this.time || `Your time is up`;
  }
});

export default createTimer;
