function shuffle(items, random = Math.random) {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
class QuizDeck {
  constructor(bank, random = Math.random) {
    this.bank = bank;
    this.random = random;
    this.remaining = {};
  }
  take(level, count) {
    const pool = this.bank.filter((q) => q.level === level);
    if (count > pool.length)
      throw new Error("Not enough questions for this level");
    let bag = this.remaining[level] || shuffle(pool, this.random);
    const round = [];
    while (round.length < count) {
      if (!bag.length) bag = shuffle(pool, this.random);
      const picked = new Set(round.map((q) => q.id));
      const next = bag.findIndex((q) => !picked.has(q.id));
      round.push(bag.splice(next, 1)[0]);
    }
    this.remaining[level] = bag;
    return shuffle(round, this.random);
  }
}
if (typeof module !== "undefined") module.exports = { shuffle, QuizDeck };
