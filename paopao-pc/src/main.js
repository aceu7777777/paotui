import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Button, Menu, MenuItem, Message, Submenu, Empty, Popover, Form, FormItem, Input, Select
  , Option, Pagination, TimePicker, DatePicker, Tabs, TabPane, Table, TableColumn
} from 'element-ui';
//引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css';//引入全部的样式
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
Vue.use(Pagination)
Vue.use(TimePicker)
Vue.use(Tabs)
Vue.use(DatePicker)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
//在原型方法上挂载elm消息提示
Vue.prototype.$message = Message;
Vue.config.productionTip = false;//关闭生产提示
//引入mockserve.js ---mock的虚拟数据
import '@/mock/mockServe';
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
