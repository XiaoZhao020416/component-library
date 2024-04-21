// 导入组件，组件必须声明 name
import Select from './src/orange_select.vue'

Select.install = function (Vue) {
    Vue.component(Select.name, Select)
}

export default Select