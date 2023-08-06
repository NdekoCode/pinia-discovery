import type {
  SubscriptionCallbackMutationDirect,
  SubscriptionCallbackMutationPatchFunction,
  SubscriptionCallbackMutationPatchObject
} from 'pinia'

export type Product = {
  id: number | string
  title: string
  description: string
  price: number
  discountPercentage?: number
  rating?: {
    rate: number
    count: number
  }
  stock?: number
  category?: string
  image?: string
  images?: string[]
}
export type Tasks = {
  tasks: Task[]
  currentTasksItem: Task[]
  selectedTask: Task | null
  pageSize: number
  currentPage: number
}
export type Task = {
  id?: string | number
  title: string
  description: string
  completed?: boolean
}

export type TodoTask = {
  id?: string | number
  todo: string
  description?: string
  userId?: string | number
  completed?: boolean
}
export declare type SubscriptionCallbackMutation<S> =
  | SubscriptionCallbackMutationDirect
  | SubscriptionCallbackMutationPatchObject<S>
  | SubscriptionCallbackMutationPatchFunction
