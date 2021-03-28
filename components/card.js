// components/card.js
Component({
  /**
   * Component properties
   */
  properties: {
    recipe: Object
  },

  /**
   * Component initial data
   */
  data: {
    favorited: false
  },

  /**
   * Component methods
   */
  methods: {
    favorite() {
      this.setData({ favorited: !this.data.favorited })
    }
  }
})
