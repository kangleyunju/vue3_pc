import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'

import './resetElement.scss'
import * as elementIcon from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 全局注册svg组件
import svgIcon from '@/components/svgIcon/svgIcon.vue'


const app = createApp(App)
 
// 统一注册图标
for (const [key, component] of Object.entries(elementIcon)) {
  app.component(key, component)
}

app.use(store).use(router).component('svg-icon', svgIcon).use(ElementPlus,{locale: zhCn}).mount('#app')
