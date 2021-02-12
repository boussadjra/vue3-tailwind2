import { createApp, isVNode } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'css-pro-layout/dist/css/css-pro-layout.min.css';
import './styles/index.css'
let app = createApp(App)

let root = app.use(store).use(router).mount('#app')

