import Timeline from './src/orange_timeline.vue'

// 为组件提供 install 安装方法，供按需引入
Timeline.install = function (Vue) {
  Vue.component(Timeline.name, Timeline)
}

// 默认导出组件
export default Timeline

