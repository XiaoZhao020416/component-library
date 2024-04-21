import Codeboard from './src/orange_codeboard.vue'

// 为组件提供 install 安装方法，供按需引入
Codeboard.install = function (Vue) {
  Vue.component(Codeboard.name, Codeboard)
}

// 默认导出组件
export default Codeboard

