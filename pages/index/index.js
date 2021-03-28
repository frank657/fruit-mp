const app = getApp();
import Recipes from 'recipes';

Page({
  data: {
    recipes: Recipes,
    categories: ['apple', 'orange', 'kiwi', 'mango']
  },

  onLoad() {
  },
})
