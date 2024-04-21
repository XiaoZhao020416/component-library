import ClipBoard from './src/orange_clipboard.vue'

// 为组件提供 install 安装方法，供按需引入
ClipBoard.install = function (Vue) {
  Vue.component(ClipBoard.name, ClipBoard)
}

// 默认导出组件
export default ClipBoard

