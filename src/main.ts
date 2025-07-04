import '@/shared/assets/styles/index.sass'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './app/App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

app.mount('#app')
