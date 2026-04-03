import { type Component } from "vue"
import * as LucideIcons from "lucide-vue-next"

export default defineNuxtPlugin((nuxtApp) => {
  // Register all Lucide icons globally
  Object.entries(LucideIcons).forEach(([name, component]) => {
    if (typeof component === "object" || typeof component === "function") {
      nuxtApp.vueApp.component(name, component as Component)
    }
  })
})
