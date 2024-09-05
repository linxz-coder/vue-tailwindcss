import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus) //先引入插件
app.mount('#app')   //最后挂载应用，顺序不能倒过来。
