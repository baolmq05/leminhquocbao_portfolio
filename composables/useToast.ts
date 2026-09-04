import { reactive, readonly } from "vue"

// composables/useToast.ts
interface Toast {
  visible: boolean
  message: string
}

const toast = reactive<Toast>({
  visible: false,
  message: '',
})

let timer: ReturnType<typeof setTimeout> | null = null

export function useToast() {
  function showToast(message: string, duration = 2200) {
    if (timer) clearTimeout(timer)
    toast.message = message
    toast.visible = true
    timer = setTimeout(() => {
      toast.visible = false
    }, duration)
  }

  return {
    toast: readonly(toast),
    showToast,
  }
}
