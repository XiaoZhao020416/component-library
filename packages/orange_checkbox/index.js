// 导入组件，组件必须声明 name
import Checkbox from './src/orange_checkbox.vue'

Checkbox.install = function (Vue) {
    Vue.component(Checkbox.name, Checkbox)
}

export default Checkbox