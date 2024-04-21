import Histogram from './src/orange_chart_histogram.vue'

// 为组件提供 install 安装方法，供按需引入
Histogram.install = function (Vue) {
  Vue.component(Histogram.name, Histogram)
}

// 默认导出组件
export default Histogram
