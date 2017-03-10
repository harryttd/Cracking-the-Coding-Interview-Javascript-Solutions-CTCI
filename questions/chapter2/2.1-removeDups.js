// USING A SET
// O(N) RUNTIME - O(N) SPACE
export function removeDups1(list) {
  if (!list || !list.next) return list;
  const set = new Set();
  set.add(list.value);
  while (list.next) {
    if (set.has(list.next.value)) {
      list.next = list.next.next;
    } else {
      set.add(list.next.value);
      list = list.next;
    }
  }
}

// O(N^2) RUNTIME
export function removeDups2(list) {
  if (!list || !list.next) return list;
  while (list) {
    let head = list;
    while (head.next) {
      if (head.next.value === list.value) {
        head.next = head.next.next;
      } else {
        head = head.next;
      }
    }
    list = list.next;
  }
}
