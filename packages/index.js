import '../public/theme/font/iconfont.css';
import '../public/theme/base.scss';
import orange_btn from './orange_btn'
import orange_anchor from './orange_anchor'
import orange_anchor_link from './orange_anchor_link'
import orange_backtop from './orange_backtop'
import orange_demo_block from './orange_demo_block'
import orange_table_simple from './orange_table_simple'
import orange_line_btn from './orange_line_btn'
import orange_run_btn from './orange_run_btn'
import orange_rocket_btn from './orange_rocket_btn'
import orange_reflect_btn from './orange_reflect_btn'
import orange_overlap_btn from './orange_overlap_btn'
import orange_card from './orange_card'
import orange_input from './orange_input'
import orange_carousel from './orange_carousel'
import orange_timeline from './orange_timeline'
import orange_badge from './orange_badge'
import orange_progress from './orange_progress'
import orange_clipboard from './orange_clipboard'
import orange_rightmenu from './orange_rightmenu'
import orange_comment from './orange_comment'
import orange_codeboard from './orange_codeboard'
import orange_chart_brokenline from './orange_chart_brokenline'
import orange_chart_histogram from './orange_chart_histogram'
import orange_chart_pie from './orange_chart_pie'
import orange_chart_scatter from './orange_chart_scatter'
import orange_chart_radar from './orange_chart_radar'
import orange_chart_map from './orange_chart_map'
import orange_select from './orange_select'
import orange_avartar from './orange_avartar'
import orange_radio from './orange_radio'
import orange_checkbox from './orange_checkbox'
import orange_dialog from './orange_dialog'
import orange_message from './orange_message'

// 存储组件列表
const components = [
  orange_btn,
  orange_anchor,
  orange_anchor_link,
  orange_backtop,
  orange_demo_block,
  orange_table_simple,
  orange_line_btn,
  orange_run_btn,
  orange_rocket_btn,
  orange_input,
  orange_reflect_btn,
  orange_overlap_btn,
  orange_card,
  orange_carousel,
  orange_timeline,
  orange_badge,
  orange_progress,
  orange_clipboard,
  orange_rightmenu,
  orange_comment,
  orange_codeboard,
  orange_chart_brokenline,
  orange_chart_histogram,
  orange_chart_pie,
  orange_chart_scatter,
  orange_chart_radar,
  orange_chart_map,
  orange_select,
  orange_avartar,
  orange_radio,
  orange_checkbox,
  orange_dialog,
  orange_message
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  orange_btn,
  orange_backtop,
  orange_anchor_link,
  orange_demo_block,
  orange_table_simple,
  orange_line_btn,
  orange_run_btn,
  orange_rocket_btn,
  orange_input,
  orange_reflect_btn,
  orange_overlap_btn,
  orange_card,
  orange_carousel,
  orange_timeline,
  orange_badge,
  orange_progress,
  orange_clipboard,
  orange_rightmenu,
  orange_comment,
  orange_codeboard,
  orange_chart_brokenline,
  orange_chart_histogram,
  orange_chart_pie,
  orange_chart_scatter,
  orange_chart_radar,
  orange_chart_map,
  orange_select,
  orange_avartar,
  orange_radio,
  orange_checkbox,
  orange_dialog,
  orange_message
}
