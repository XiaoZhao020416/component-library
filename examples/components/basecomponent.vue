<template>
  <div class="content-box">
    <h2 class="demo-title">基础组件</h2>

    <orange-anchor>
      <orange-anchor-link href="top" title="回到顶部" />
      <orange-anchor-link href="anchor" title="前往底部" />
      <orange-anchor-link href="card" title="card卡片组件" />
      <orange-anchor-link href="card1" title="带图片和图标" />
      <orange-anchor-link href="api" title="API" />
    </orange-anchor>

    <!-- 锚点按钮 -->
    <orange-demo-block :height="90" :title="'回到顶部'" id="top" introduction="点击按钮回到顶部">
      <template v-slot:demo>
        <div class="codepadding">
          滑动页面即可看到右下方的按钮
          <orange-backtop :visibilityHeight="300" />
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(backtop.code.html)}}</code>
      </template>
    </orange-demo-block>
    <orange-demo-block :height="220" :title="'前往底部'" id="anchor" introduction="点击按钮前往底部API">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-anchor customize>
            <orange-anchor-link href="api" title="API">
              <orange-button icon="org-icon-arrow-down" type="primary">前往底部API</orange-button>
            </orange-anchor-link>
          </orange-anchor>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(anchor.code.html)}}</code>
      </template>
    </orange-demo-block>
    <!-- card -->
    <orange-demo-block :height="180" :title="'card卡片'" id="card" introduction="包含标题和内容">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-card>
            <template #header>
              <h1>顶部标题</h1>
            </template>
            内部内容
          </orange-card>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(card.code.html)}}</code>
      </template>
    </orange-demo-block>
    <orange-demo-block :height="180" id="card1" introduction="带图片和图标">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-card :image-src="imgUrl" :visitors="1000">
            <template #header>
              <h1>顶部标题</h1>
            </template>
            内部内容
          </orange-card>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(card1.code.html)}}</code>
      </template>
    </orange-demo-block>

    <!-- API -->
    <div id="api">
      <h3 class="demo-table-title">API</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <orange-table-simple :data="api" :thead="thead" />
    </div>
  </div>
</template>

<script>
export default {
  name: "shn-button-demo",
  data() {
    return {
      thead: ["参数", "说明", "类型", "可选值", "默认值", "支持组件"],
      backtop: {
        code: {
          html: `
          <orange-backtop :visibilityHeight="300" />
          `
        }
      },
      imgUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
      anchor: {
        code: {
          html: `
         <div class="codepadding">
          <orange-anchor customize>
            <orange-anchor-link href="api" title="API">
              <orange-button icon="org-icon-arrow-down" type="primary">前往API</orange-button>
            </orange-anchor-link>
          </orange-anchor>
        </div>
          `
        }
      },
      card: {
        code: {
          html: `
        <orange-card >
            <template #header>
              <h1>头部插槽</h1>
            </template>
            内部内容
        </orange-card>
          `
        }
      },
      card1: {
        code: {
          html: `
          <orange-card :image-src="imgUrl" :visitors="1000">
            <template #header>
              <h1>顶部标题</h1>
            </template>
            内部内容
          </orange-card>
          `
        }
      },
      api: [
        {
          parameter: "position",
          description: "导航栏位置",
          dataTypes: "String",
          optional: "left / right",
          default: "right",
          support: "Anchor"
        },

        {
          parameter: "customize",
          description: "开启自定义",
          dataTypes: "Boolean",
          optional: "true / false",
          default: "false",
          support: "Anchor"
        },
          {
          parameter: "title",
          description: "导航文字内容",
          dataTypes: "String",
          optional: "",
          default: "Title",
          support: "AnchorLink"
        },
        {
          parameter: "header",
          description: "头部插槽",
          dataTypes: "String",
          optional: "header",
          default: "",
          support: "card信息展示组件"
        },
        {
          parameter: "imageSrc",
          description: "图片地址",
          dataTypes: "String",
          optional: "",
          default: "",
          support: "图片卡片组件"
        },
        {
          parameter: "visitors",
          description: "浏览量",
          dataTypes: "Number",
          optional: "",
          default: "0",
          support: "图片卡片组件"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.codepadding {
  padding: 7px;
}
</style>

