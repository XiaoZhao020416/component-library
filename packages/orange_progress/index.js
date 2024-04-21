import Progress from './src/orange_progress.vue'

// 为组件提供 install 安装方法，供按需引入
Progress.install = function (Vue) {
  Vue.component(Progress.name, Progress)
}

// 默认导出组件
export default Progress

