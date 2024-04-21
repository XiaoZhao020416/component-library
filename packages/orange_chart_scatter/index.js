import Scatter from './src/orange_chart_scatter.vue'

// 为组件提供 install 安装方法，供按需引入
Scatter.install = function (Vue) {
  Vue.component(Scatter.name, Scatter)
}

// 默认导出组件
export default Scatter
