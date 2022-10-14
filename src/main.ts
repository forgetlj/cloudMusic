import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/assets/font_header.less'
import '@/assets/font_leftBox.less'
import '@/assets/font_footer.less'
import '@/assets/iconfont.less'

import "@/utils/extend"


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
