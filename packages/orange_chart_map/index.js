import Map from './src/orange_chart_map.vue'

// 为组件提供 install 安装方法，供按需引入
Map.install = function (Vue) {
  Vue.component(Map.name, Map)
}

// 默认导出组件
export default Map
