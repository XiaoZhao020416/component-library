import Carousel from './src/orange_carousel.vue'

// 为组件提供 install 安装方法，供按需引入
Carousel.install = function (Vue) {
  Vue.component(Carousel.name, Carousel)
}

// 默认导出组件
export default Carousel

