'use strict';

// Approx. O(3^N) TIME --- Closer to O(1.84^N)

// Not Optimized
function tripleStep(steps) {
  if (steps < 0) return 0;
  else if (steps === 0) return 1;

  return tripleStep(steps - 1) + tripleStep(steps - 2) + tripleStep(steps - 3);
}

console.log("NOT OPTIMIZED:", tripleStep(10));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(N) TIME

// Bottom Up
function tripleStepBU(steps) {
  if (steps < 0) return 0;
  else if (steps === 0) return 1;
  else if (steps === 1 || steps === 2) return steps;
  else if (steps === 3) return 4;

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

// O(N) TIME

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
