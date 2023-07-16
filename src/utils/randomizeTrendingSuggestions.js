export const randomizeTrendingSuggestions = (array) => {
  let suggestions = [];
  let n = 7;
  if (n >= array.length) {
    suggestions = array;
  } else {
    for (let i = 0; i < n; i++) {
      let j = Math.floor(Math.random() * (array.length - i)) + i;
      suggestions[i] = array[j];
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return suggestions;
};
