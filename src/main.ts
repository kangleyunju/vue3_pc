import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from "./router";


import ElementPlus from 'element-plus'
import './resetElement.scss'
import * as elementIcon from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 全局注册svg组件
import 'virtual:svg-icons-register'
import svgIcon from '@/components/svgIcon/svgIcon.vue'

const app = createApp(App)

// 统一注册图标
for (const [key, component] of Object.entries(elementIcon)) {
  app.component(key, component)
}

app.component('svg-icon', svgIcon).use(createPinia()).use(router).use(ElementPlus,{locale: zhCn}).mount('#app')
