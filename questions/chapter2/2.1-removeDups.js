// USING A SET
export function removeDups(list) {
  if (!list) return list;
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
  return list;
}
