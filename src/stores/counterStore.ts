import { defineStore } from 'pinia'
const useCount = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    },
    reset() {
      this.count = 0
    }
  }
})
export default useCount
