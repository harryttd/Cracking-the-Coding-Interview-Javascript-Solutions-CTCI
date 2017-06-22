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

function makeChange3(cents, coins = [1, 10, 5, 25]) {
  const cache = new Array(cents + 1).fill(0);
  const { length } = coins;

  cache[0] = 1;

  for (let i = 0; i < length; i++) {
    for (let x = coins[i]; x <= cents; x++) {
      cache[x] += cache[x - coins[i]];
    }
  }

  return cache[cents];
}
console.log(makeChange3(500));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(2ˆn) TIME
function makeChange4(cents, coins = [25, 10, 5, 1], index = 0) {
  if (cents < 0) return 0;
  if (cents === 0) return 1;

  // means index passed last coin and cents > 0 so no solution
  if (index === coins.length && cents > 0) return 0;

  return makeChange4(cents - coins[index], coins, index) + makeChange4(cents, coins, index + 1);
}
console.log(makeChange4(50));
