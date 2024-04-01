import { ref } from 'vue'

export default function useDrawer() {
  const drawerState = ref(false)

  const toggleDrawer = () => {
    drawerState.value = !drawerState.value
  }
  const setDrawerState = (state: boolean) => {
    drawerState.value = state
  }

  return { drawerState, toggleDrawer, setDrawerState }
}
