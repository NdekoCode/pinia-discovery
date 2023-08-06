import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'
import { type Task, type Tasks, type TodoTask } from '../libs/utilities/types'
const useTaskStore = defineStore('tasks', {
  state: (): Tasks => ({
    tasks: [],
    currenttasksItem: [],
    pageSize: 5,
    currentPage: 1
  }),
  getters: {
    completedTasks: (state) => state.tasks.filter((task) => task.completed),
    unCompletedTasks: (state) => state.tasks.filter((task) => !task.completed),
    totalPages: (state) => Math.ceil(state.tasks.length / state.pageSize)
  },
  actions: {
    addTask(task: Task) {
      this.tasks.unshift({ ...task, id: uuid(), completed: false })
      this.currentPageItem()
    },
    deleteTask(task: Task) {
      const taskIndex = this.tasks.findIndex((t) => task.id === t.id)
      if (taskIndex > -1) {
        this.tasks.splice(taskIndex, 1)
        this.currentPageItem()
      }
    },
    async fetchTasks() {
      const response = await fetch('/data/todos.json')
      let taskData = await response.json()
      taskData = taskData.map((p: TodoTask) => ({
        id: uuid(),
        title: p.todo,
        completed: p.completed,
        description: p.todo
      }))
      this.tasks = taskData
    },
    currentPageItem() {
      const start = (this.currentPage - 1) * this.pageSize
      const end = start + this.pageSize
      this.currenttasksItem = this.tasks.slice(start, end)
    },
    incrementCurrentPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
        this.currentPageItem()
      }
    },

    decrementCurrentPage() {
      if (this.currentPage >= 1) {
        this.currentPage--
        this.currentPageItem()
      }
    }
  }
})
export default useTaskStore
