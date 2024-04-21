import Brokenline from './src/orange_chart_brokenline.vue'

// 为组件提供 install 安装方法，供按需引入
Brokenline.install = function (Vue) {
  Vue.component(Brokenline.name, Brokenline)
}

// 默认导出组件
export default Brokenline
