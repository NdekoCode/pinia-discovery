import { defineStore } from "pinia";

const useCount = defineStore("counter", {
  state: () => ({ count: 0 }),
});
export default useCount;
