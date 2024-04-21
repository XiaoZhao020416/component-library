import Radar from './src/orange_chart_radar.vue'

// 为组件提供 install 安装方法，供按需引入
Radar.install = function (Vue) {
  Vue.component(Radar.name, Radar)
}

// 默认导出组件
export default Radar
