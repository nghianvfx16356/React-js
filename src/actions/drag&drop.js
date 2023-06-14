export const applyDrag = (arr, dragResult) => {
  const { removeIndex, addedIndex, payload } = dragResult;
  if (removeIndex === null && addedIndex === null) return arr;

  const result = [...arr];
  let itemToAdd = payload;
  if (removeIndex !== null) {
    itemToAdd = result.splice(removeIndex, 1)[0];
  }
  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }
  return result;
};
