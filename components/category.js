// components/category.js
Component({
  /**
   * Component properties
   */
  properties: {
    name: String, // Number, Boolean, Array, Object,
  },

  /**
   * Component initial data
   */
  data: {
    selected: false
  },

  /**
   * Component methods
   */
  methods: {
    selectCategory() {
      this.setData({ selected: !this.data.selected })
    }
  }
})
