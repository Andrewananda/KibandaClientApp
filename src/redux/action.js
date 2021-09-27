export function addCart(item) {
  return {
    type: 'ADD_ITEM',
    payload: item,
  };
}

export function itemCount(item) {
  return {
    type: 'COUNT',
    payload: item,
  };
}
