import "./styles/main.css"
import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./ui/App.vue"
import router from "./providers/router"

export function bootstrapApp() {
  const app = createApp(App)
  
  app.use(createPinia())
  app.use(router)
  
  return app
}