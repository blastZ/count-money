const categories = ['food', 'transport', 'game', 'movie', 'drink', 'shopping', 'bills', 'home', 'clothing', 'telephone'];

const getAllCategory = () => {
  return categories;
};

const getCategoryGrid = () => {
  const result = [];
  for (let i = 0; i < categories.length; i = i + 4) {
    const list = categories.slice(i, i + 4);
    result.push(list);
  }

  return result;
};

export default {
  getAllCategory,
  getCategoryGrid
};
