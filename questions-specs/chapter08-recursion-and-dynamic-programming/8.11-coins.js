'use strict';

function calculateChange1(cents, coins = [25, 10, 5, 1], index = 0) {
  if (index >= coins.length - 1) return 1;

  const coin = coins[index];
  let ways = 0;

  for (let i = 0; i * coin <= cents; i++) {
    const remaining = cents - i * coin;
    ways += calculateChange1(remaining, coins, index + 1);
  }

  return ways;
}
console.log(calculateChange1(50));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// Memoized
function calculateChange2(cents, coins = [25, 10, 5, 1], index = 0, map = {}) {
  if (map[cents] && map[cents][index] > 0 ) return map[cents][index];
  if (index >= coins.length - 1) return 1;

  const coin = coins[index];
  let ways = 0;

  for (let i = 0; i * coin <= cents; i++) {
    const remaining = cents - i * coin;
    ways += calculateChange2(remaining, coins, index + 1, map);
  }

  if (!map[cents]) map[cents] = [];
  map[cents][index] = ways;
  return ways;
}
console.log(calculateChange2(50));
