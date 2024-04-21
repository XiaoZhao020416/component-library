<template>
    <div class="content-box">
      <h2 class="demo-title">Radio 单选框</h2>
  
      <orange-anchor>
        <orange-anchor-link href="radio1" title="默认样式" />
        <orange-anchor-link href="radio2" title="禁用状态" />
        <orange-anchor-link href="radio3" title="按钮样式" />
        <orange-anchor-link href="api" title="API" />
      </orange-anchor>
      
      <orange-demo-block :height="80" :title="'默认样式'" id="radio1">
        <template v-slot:demo>
          <div class="codepadding">
            <orange-radio :options="options" :default-value="defaultValue" />
          </div>
        </template>
        <template v-slot:code>
          <code class="html">{{fCode(radio.code.html)}}</code>
        </template>
      </orange-demo-block>

      <orange-demo-block :height="80" :title="'禁用状态'" id="radio2">
        <template v-slot:demo>
          <div class="codepadding">
            <orange-radio :options="options" :default-value="defaultValue" :disabled="true"/>
          </div>
        </template>
        <template v-slot:code>
          <code class="html">{{fCode(radio.code1.html)}}</code>
        </template>
      </orange-demo-block>

      <orange-demo-block :height="80" :title="'按钮样式'" id="radio3">
        <template v-slot:demo>
          <div class="codepadding">
            <orange-radio :options="options" :default-value="defaultValue" :buttonStyle="true"/>
          </div>
        </template>
        <template v-slot:code>
          <code class="html">{{fCode(radio.code2.html)}}</code>
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
    name: "shn-radio-demo",
    data() {
      return {
        options: [
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' }
        ],
        defaultValue: 'option1',
        thead: ["参数", "说明", "类型", "可选值", "默认值", "支持组件"],
        radio: {
          code: {
            html: `
            <orange-radio />
            `
          },
          code1: {
            html: `
            <orange-radio :disabled="true" />
            `
          },
          code2: {
            html: `
            <orange-radio :buttonStyle="true"/>
            `
          },
        },
        api: [
          {
            parameter: "v-model",
            description: "单选框绑定value",
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
            parameter: "buttonStyle",
            description: "按钮样式",
            dataTypes: "Boolean",
            optional: "true，false",
            default: "false",
            support: "all"
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