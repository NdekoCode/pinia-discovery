import { defineStore } from "pinia";
type CounterState = { count: number };
const useCount = defineStore("counter", {
  state: (): CounterState => ({ count: 0 }),
});
export default useCount;
