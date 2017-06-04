'use strict';

function makeChange1(cents, coins = [25, 10, 5, 1], index = 0) {
  if (index >= coins.length - 1) return 1;

  const coin = coins[index];
  let ways = 0;

  for (let i = 0; i * coin <= cents; i++) {
    const remainingCents = cents - i * coin;
    ways += makeChange1(remainingCents, coins, index + 1);
  }

  return ways;
}
console.log(makeChange1(50));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// Memoized
function makeChange2(cents, coins = [25, 10, 5, 1], index = 0, map = {}) {
  const mapKey = `${cents}, ${index}`;
  if (map[mapKey] > 0) return map[mapKey];
  if (index >= coins.length - 1) return 1;

  const coin = coins[index];
  let ways = 0;

  for (let i = 0; i * coin <= cents; i++) {
    const remainingCents = cents - i * coin;
    ways += makeChange2(remainingCents, coins, index + 1, map);
  }

  map[mapKey] = ways;
  return ways;
}
console.log(makeChange2(50));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(2ˆn) TIME
function makeChange3(cents, coins = [25, 10, 5, 1], index = 0) {
  if (cents < 0) return 0;
  if (cents === 0) return 1;

  // means index passed last coin and cents > 0 so no solution
  if (index === coins.length && cents > 0) return 0;

  return makeChange3(cents - coins[index], coins, index) + makeChange3(cents, coins, index + 1);
}
console.log(makeChange3(50));
