import Rightmenu from './src/orange_rightmenu.vue'

// 为组件提供 install 安装方法，供按需引入
Rightmenu.install = function (Vue) {
  Vue.component(Rightmenu.name, Rightmenu)
}

// 默认导出组件
export default Rightmenu

