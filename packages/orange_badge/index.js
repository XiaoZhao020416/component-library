// 导入组件，组件必须声明 name
import Badge from './src/orange_badge.vue'

Badge.install = function (Vue) {
    Vue.component(Badge.name, Badge)
}

export default Badge