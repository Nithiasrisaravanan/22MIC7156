function optimizeTasks(tasks, maxHours) {
  const n = tasks.length;

  // Create 2D DP array
  const dp = Array(n + 1)
    .fill()
    .map(() => Array(maxHours + 1).fill(0));

  // Fill DP table
  for (let i = 1; i <= n; i++) {
    const duration = tasks[i - 1].Duration;
    const impact = tasks[i - 1].Impact;

    for (let w = 0; w <= maxHours; w++) {
      if (duration <= w) {
        dp[i][w] = Math.max(
          impact + dp[i - 1][w - duration],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  // Backtrack to find selected tasks
  let w = maxHours;
  const selected = [];

  for (let i = n; i > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      selected.push(tasks[i - 1]);
      w -= tasks[i - 1].Duration;
    }
  }

  return selected;
}

module.exports = optimizeTasks;