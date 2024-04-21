<template>
    <div class="content-box">
      <h2 class="demo-title">基础组件</h2>
  
      <orange-anchor>
        <orange-anchor-link href="input1" title="默认样式" />
        <orange-anchor-link href="input2" title="禁用状态" />
        <orange-anchor-link href="input3" title="密码框" />
        <orange-anchor-link href="api" title="API" />
      </orange-anchor>
      
      <orange-demo-block :height="80" :title="'默认样式'" id="input1" introduction="通过 pattern 控制输入框样式">
        <template v-slot:demo>
          <div class="codepadding" style="display: flex;justify-content: left;">
            <orange-input placeholder="请输入" v-model="inputvalue" :pattern="'frame'" style="margin-right: 40px;" />
            <orange-input placeholder="请输入" v-model="inputvalue1" />
          </div>
        </template>
        <template v-slot:code>
          <code class="html">{{fCode(input.code.html)}}</code>
        </template>
      </orange-demo-block>

      <orange-demo-block :height="80" :title="'禁用状态'" id="input2">
        <template v-slot:demo>
          <div class="codepadding">
            <orange-input :disabled="true" placeholder="请输入" v-model="notAllow" :pattern="'frame'" />
          </div>
        </template>
        <template v-slot:code>
          <code class="html">{{fCode(input1.code.html)}}</code>
        </template>
      </orange-demo-block>

      <orange-demo-block :height="80" :title="'密码框'" id="input3">
        <template v-slot:demo>
          <div class="codepadding">
            <orange-input placeholder="请输入" v-model="passwordValue" :type="'password'" :pattern="'frame'" />
          </div>
        </template>
        <template v-slot:code>
          <code class="html">{{fCode(input2.code.html)}}</code>
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
        inputvalue1: "",
        passwordValue: "",
        textareaValue: "",
        notAllow: "",
        thead: ["参数", "说明", "类型", "可选值", "默认值", "支持组件"],
        input: {
          code: {
            html: `
            <orange-input placeholder="请输入" v-model="inputvalue" />
            `
          }
        },
        input1: {
          code: {
            html: `
            <orange-input :disabled="true" placeholder="请输入" v-model="notAllow" :pattern="'frame'" />
            `
          }
        },
        input2: {
          code: {
            html: `
            <orange-input placeholder="请输入" v-model="passwordValue" :type="'password'" :pattern="'frame'" />
            `
          }
        },
        api: [
          {
            parameter: "type",
            description: "输入框类型",
            dataTypes: "String",
            optional: "text，number，password...",
            default: "text",
            support: "all"
          },
          {
            parameter: "pattern",
            description: "输入框样式",
            dataTypes: "String",
            optional: "frame，line",
            default: "line",
            support: "all"
          },
          {
            parameter: "placeholder",
            description: "用来输入提示信息",
            dataTypes: "String",
            optional: "",
            default: "",
            support: "all"
          },
          {
            parameter: "v-model",
            description: "输入框绑定value",
            dataTypes: "String",
            optional: "",
            default: "",
            support: "all"
          },
          {
            parameter: "disabled",
            description: "是否禁用",
            dataTypes: "Boolean",
            optional: "true，false",
            default: "false",
            support: "all"
          },
          {
            parameter: "animation",
            description: "动画效果(仅在pattern为line时生效)",
            dataTypes: "Boolean",
            optional: "true，false",
            default: "false",
            support: "all"
          },
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