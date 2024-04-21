// 导入组件，组件必须声明 name
import Radio from './src/orange_radio.vue'

Radio.install = function (Vue) {
    Vue.component(Radio.name, Radio)
}

export default Radio