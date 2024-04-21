import Comment from './src/orange_comment.vue'

// 为组件提供 install 安装方法，供按需引入
Comment.install = function (Vue) {
  Vue.component(Comment.name, Comment)
}

// 默认导出组件
export default Comment

