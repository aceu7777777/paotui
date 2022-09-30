import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Menu, MenuItem,Submenu,Empty,Popover,Form,FormItem,Input,Select
,Option} from 'element-ui';
//引入elementui样式
import 'element-ui/lib/theme-chalk/index.css';//引入全部的样式
Vue.config.productionTip = false;
//引入按钮
Vue.use(Button)   
//引入nav航
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Empty)
Vue.use(Popover)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
