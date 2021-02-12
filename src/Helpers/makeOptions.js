export const makeOptions = (arr, field) => {
  const options = new Set(arr.map(el => el[field]));

  return ['All', ...options];
}
