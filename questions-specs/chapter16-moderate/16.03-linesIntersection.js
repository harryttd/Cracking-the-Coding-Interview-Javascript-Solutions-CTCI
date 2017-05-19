'use strict';

class Line {
  constructor(start, end) {
    const deltaY = end.y - start.y;
    const deltaX = end.x - start.x;
    this.slope = deltaY / deltaX; // Will be Infinity (not exception) when deltaX = 0
    this.yintercept = end.y - this.slope * end.x;
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  setLocation(x, y) {
    this.x = x;
    this.y = y;
  }
}

function createPoint(coordinates) {
  return new Point(coordinates[0],  coordinates[1]);
}

/* Checks if middle is between start and end. */
function checkBetween(start, middle, end) {
  if (start > end) {
    return end <= middle && middle <= start;
  } else {
    return start <= middle && middle <= end;
  }
}

/* Checks if middle is between start and end. */
function isBetween(start, middle, end) {
  return checkBetween(start.x, middle.x, end.x) && checkBetween(start.y, middle.y, end.y);
}

function swap(one, two) {
  const x = one.x;
  const y = one.y;
  one.setLocation(two.x, two.y);
  two.setLocation(x, y);
}

function intersection(start1, end1, start2, end2) {
  /* Rearranging these so that, in order of x values: start is before end and point 1 is before point 2.
  * This will make some of the later logic simpler. */
  if (start1.x > end1.x) swap(start1, end1);
  if (start2.x > end2.x) swap(start2, end2);
  if (start1.x > start2.x) {
    swap(start1, start2);
    swap(end1, end2);
  }
  console.log(start1, end1, start2, end2);
  /* Compute lines (including slope and y-intercept). */
  const line1 = new Line(start1, end1);
  const line2 = new Line(start2, end2);
  console.log(line1, line2);

  /* If the lines are parallel, they intercept only if they have the same y intercept and start 2 is on line 1. */
  if (line1.slope === line2.slope) {
    if (line1.yintercept === line2.yintercept && isBetween(start1, start2, end1)) {
      return start2;
    }
    return null;
  }

  /* Get intersection coordinate. */
  const x = (line2.yintercept - line1.yintercept) / (line1.slope - line2.slope);
  const y = x * line1.slope + line1.yintercept;
  const intersect = new Point(x, y);

  /* Check if within line segment range. */
  if (isBetween(start1, intersect, end1) && isBetween(start2, intersect, end2)) {
    return intersect;
  }
  return null;
}

const coordinates = [
  [8, 8], [10, 10],
  [9, 9], [10, 10]
];

const points = [createPoint(coordinates[0]), createPoint(coordinates[1]), createPoint(coordinates[2]), createPoint(coordinates[3])];
const intersect = intersection(points[0], points[1], points[2], points[3]);
if (!intersect) {
  console.log("No intersection.");
} else {
  console.log("Intersection: " + intersect.x + ", " + intersect.y);
}
