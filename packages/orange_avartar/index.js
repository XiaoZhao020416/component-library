// 导入组件，组件必须声明 name
import Avartar from './src/orange_avartar.vue'

Avartar.install = function (Vue) {
    Vue.component(Avartar.name, Avartar)
}

export default Avartar