import { createPinia, type Pinia } from 'pinia'

const pinia: Pinia = createPinia()
pinia.use(({ pinia, app, store }) => {
  const keyOf = (id: string | number) => `pinia-store:${id}`
  const saveState = window.localStorage.getItem(keyOf(store.$id))
  store.$patch(JSON.parse(saveState || '{}'))
  store.$subscribe((mutation, state) => {
    localStorage.setItem(keyOf(mutation.storeId), JSON.stringify(state))
  })
})

export default pinia
