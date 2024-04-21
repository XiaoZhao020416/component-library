<template>
    <div class="content-box">
      <h2 class="demo-title">Progress 进度条</h2>
  
      <orange-anchor>
        <orange-anchor-link href="solid" title="纯色进度条" />
        <orange-anchor-link href="stillness" title="静止渐变条形进度条" />
        <orange-anchor-link href="motion" title="运动渐变条形进度条" />
        <orange-anchor-link href="annular" title="环形进度条" />
        <orange-anchor-link href="api" title="API" />
      </orange-anchor>

      <!-- 进度条 -->
      <orange-demo-block :height="90" :title="'纯色条形进度条'" id="solid" introduction="纯色样式，通过:type='xxx-solid'修改颜色样式">
        <template v-slot:demo>
          <div class="codepadding">
            <orange-progress :styleType="'solid'" :type="'danger-solid'" />
          </div>
        </template>
        <template v-slot:code>
          <code class="html">{{fCode(progress.code1.html)}}</code>
        </template>
      </orange-demo-block>

      <orange-demo-block :height="90" :title="'静止渐变条形进度条'" id="stillness" introduction="无运动轨迹样式，通过:type='primary（或其他类型）'修改颜色样式">
        <template v-slot:demo>
          <div class="codepadding">
            <orange-progress :styleType="'stillness'" :type="'primary'" />
          </div>
        </template>
        <template v-slot:code>
          <code class="html">{{fCode(progress.code2.html)}}</code>
        </template>
      </orange-demo-block>

      <orange-demo-block :height="90" :title="'运动渐变条形进度条'" id="motion" introduction="有运动轨迹样式">
        <template v-slot:demo>
          <div class="codepadding">
            <orange-progress :styleType="'motion'" :type="'warning'" />
          </div>
        </template>
        <template v-slot:code>
          <code class="html">{{fCode(progress.code3.html)}}</code>
        </template>
      </orange-demo-block>

      <orange-demo-block :height="90" :title="'环形进度条'" id="annular">
        <template v-slot:demo>
          <div class="codepadding">
            <orange-progress :styleType="'annular'" :type="'success-solid'"/>
          </div>
        </template>
        <template v-slot:code>
          <code class="html">{{fCode(progress.code4.html)}}</code>
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
        inputvalue: "",
        thead: ["参数", "说明", "类型", "可选值", "默认值", "支持组件"],
        progress: {
          code1: {
            html: `
            <orange-progress :styleType="'solid'" :type="'danger-solid'" />
            `
          },
          code2: {
            html: `
            <orange-progress :styleType="'stillness'" :type="'primary'" />
            `
          },
          code3: {
            html: `
            <orange-progress :styleType="'motion'" :type="'warning'" />
            `
          },
          code4: {
            html: `
            <orange-progress :styleType="'annular'" :type="'success-solid'"/>
            `
          },
        },
        api: [
          {
            parameter: "type",
            description: "纯色颜色类型",
            dataTypes: "TypeEnums",
            optional: "danger-solid，success-solid，warning-solid，primary-solid，default-solid",
            default: "default-solid",
            support: "Progress"
          },
          {
            parameter: "type",
            description: "渐变颜色类型",
            dataTypes: "TypeEnums",
            optional: "danger，success，warning，primary，default",
            default: "default",
            support: "Progress"
          },
          {
            parameter: "styleType",
            description: "种类",
            dataTypes: "TypeEnums",
            optional: "solid，stillness，motion，annular",
            default: "",
            support: "Progress"
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
  
  