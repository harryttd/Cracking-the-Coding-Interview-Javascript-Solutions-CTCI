'use strict';

// Approx. O(3ˆn) TIME --- Closer to O(1.84ˆn)
// O(N) SPACE

// Not Optimized
function tripleStep(steps) {
  if (steps < 0) return 0;
  else if (steps === 0) return 1;

  return tripleStep(steps - 1) + tripleStep(steps - 2) + tripleStep(steps - 3);
}

console.log("NOT OPTIMIZED:", tripleStep(10));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(N) TIME --- O(1) SPACE

// Bottom Up
function tripleStepBU(steps) {
  if (steps <= 2) {
    if (steps < 0) return 0;
    else if (steps === 0) return 1;
    else return steps;
  }

  let a = 1, // One step
      b = 2, // Two steps
      c = 4; // Three steps

  for (let i = 4; i <= steps; i++) {
    const d = a + b + c;
    a = b;
    b = c;
    c = d;
  }

  return c;
}
console.log("BOTTOM UP:", tripleStepBU(50));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(N) TIME --- O(N) SPACE

// Top Down
function tripleStepTD(steps, memo = []) {
  if (steps < 0) return 0;
  else if (steps === 0) return 1;

  if (!memo[steps]) {
    memo[steps] = tripleStepTD(steps - 1, memo) + tripleStepTD(steps - 2, memo) + tripleStepTD(steps - 3, memo);
  }

  return memo[steps];
}
console.log("TOP DOWN:", tripleStepTD(50));
