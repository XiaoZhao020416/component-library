<template>
  <div class="content-box">
    <orange-anchor>
      <orange-anchor-link href="introduction" title="Introduction" />
      <orange-anchor-link href="warehouse" title="代码仓库" />
      <orange-anchor-link href="npm" title="NPM安装" />
      <orange-anchor-link href="quick" title="快速上手" />
      <orange-anchor-link href="beginuse" title="开始使用" />
    </orange-anchor>

    <h2 class="demo-title" id="introduction">Introduction</h2>
    <div class="demo-tip">
      <p>该组件库使用Vue.js开发</p>
      <p>
        <a href="https://cn.vuejs.org/" target="_blank">Vue.js 官网：https://cn.vuejs.org/</a>
      </p>
    </div>
    <div class="demo-tip">
      <p>
        该项目主题风格模仿
        <span style="color:#409eff;margin:0 5px;">Element-ui&nbsp;</span>开发，根据实际开发需求从底层开始搭建，并融合了复杂组件
      </p>
      <p>
        <a
          href="https://element.eleme.io/#/zh-CN/component/installation"
          target="_blank"
        >ElementUI 官网：https://element.eleme.cn/#/zh-CN</a>
      </p>
    </div>

    <!-- 代码仓库 -->
    <h3 class="demo-table-title" id="warehouse">
      代码仓库
      <i class="iconfont icon-github-fill" style="margin: 0 10px;"></i>
    </h3>
    <p class="demo-introduction">
      github代码仓库地址
      <a
        href="https://github.com/XiaoZhao020416/component-library"
        target="https://github.com/XiaoZhao020416/component-library"
      >
        <i class="iconfont org-icon-huaban88" style="margin: 0 20px;font-size: 26px;"></i>
      </a>
    </p>

    <!-- NPM安装 -->
    <h3 class="demo-table-title" id="npm">NPM安装</h3>
    <p class="demo-introduction">推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
    <p class="demo-introduction">
      <a
        href="https://www.npmjs.com/package/shn-vue-ui"
        target="_blank"
      >npm 地址：https://www.npmjs.com/package/shn-vue-ui</a>
    </p>
    <div class="demo-code-block">npm i orange_collect</div>

    <!-- 快速上手 -->
    <h3 class="demo-table-title" id="quick">快速上手</h3>
    <p class="demo-introduction">你可以在 main.js 中引入整个 orange_collect。</p>
    <div class="demo-code-block">
      <p>import orange_collect from 'orange_collect'</p>
      <p>import 'orange_collect/lib/orange_collect.css'</p>

      <p style="margin-top:20px">Vue.use(orange_collect);</p>
    </div>

    <!-- 开始使用 -->
    <h3 class="demo-table-title" id="beginuse">开始使用</h3>
    <p class="demo-introduction">至此，一个基于 Vue 安装了 component_library 插件 的开发环境已经搭建完毕。各个组件的使用方法请参阅详细使用文档。</p>
  </div>
</template>

<script>
export default {
  name: "installation",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
.github-img {
  cursor: pointer;
  position: relative;
  top: 5px;
  margin: 0 8px 0 5px;
}
</style>

