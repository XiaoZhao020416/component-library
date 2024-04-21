import Pie from './src/orange_chart_pie.vue'

// 为组件提供 install 安装方法，供按需引入
Pie.install = function (Vue) {
  Vue.component(Pie.name, Pie)
}

// 默认导出组件
export default Pie
