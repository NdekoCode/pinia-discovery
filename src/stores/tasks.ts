import { randomId } from '@/libs/utilities/helpers'
import { defineStore } from 'pinia'
import { type Task, type Tasks, type TodoTask } from '../libs/utilities/types'
const useTaskStore = defineStore('tasks', {
  state: (): Tasks => ({
    tasks: [],
    filteredTasks: [],
    currentTasksItem: [],
    selectedTask: null,
    filter: 'all',
    pageSize: 5,
    currentPage: 1
  }),
  getters: {
    title: (state) => (state.selectedTask ? 'Modifier' : 'Ajouter'),
    completedTasks: (state) => state.filteredTasks.filter((task) => task.completed),
    unCompletedTasks: (state) => state.filteredTasks.filter((task) => !task.completed),
    totalPages: (state) => Math.ceil(state.tasks.length / state.pageSize),
    filterTodo(state) {
      if (state.filter === 'finished') {
        return this.currentTasksItem.filter((t) => t.completed)
      } else if (state.filter === 'unfinished') {
        return this.currentTasksItem.filter((t) => !t.completed)
      }
      return this.currentTasksItem
    }
  },
  actions: {
    selectedCurrentTask(task: Task) {
      this.selectedTask = task
    },
    addTask(task: Task) {
      this.tasks.unshift({ ...task, id: randomId(), completed: false })
      this.filteredTasks = this.tasks
      this.currentPageItem()
    },
    editSelectedTask(task: Task) {
      const taskIndex = this.filteredTasks.findIndex((t) => t.id === task.id)
      if (taskIndex > -1) {
        this.filteredTasks[taskIndex] = task
        this.selectedTask = null
        this.currentPageItem()
      }
    },
    deleteTask(task: Task) {
      const taskIndex = this.filteredTasks.findIndex((t) => {
        return task.id === t.id
      })
      if (taskIndex > -1) {
        this.filteredTasks.splice(taskIndex, 1)
        this.currentPageItem()
      }
    },
    async fetchTasks() {
      const response = await fetch('/data/todos.json')
      let taskData = await response.json()
      taskData = taskData.map((p: TodoTask) => ({
        id: randomId(),
        title: p.todo,
        completed: p.completed,
        description: p.todo
      }))
      this.tasks = taskData
      this.filteredTasks = this.tasks
    },
    currentPageItem() {
      const start = (this.currentPage - 1) * this.pageSize
      const end = start + this.pageSize
      this.currentTasksItem = this.filteredTasks.slice(start, end)
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
