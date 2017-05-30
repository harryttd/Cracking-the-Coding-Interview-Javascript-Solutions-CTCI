'use strict';

function calculateChange(cents, coins = [25, 10, 5, 1], index = 0) {
  if (index >= coins.length - 1) return 1;

  const coin = coins[index];
  let ways = 0;

  for (let i = 0; i * coin <= cents; i++) {
    const remaining = cents - i * coin;
    ways += calculateChange(remaining, coins, index + 1);
  }

  return ways;
}
console.log(calculateChange(50));
