<template>
    <div class="content-box">
      <h2 class="demo-title">Checkbox 多选框</h2>
  
      <orange-anchor>
        <orange-anchor-link href="checkbox1" title="默认样式" />
        <orange-anchor-link href="checkbox2" title="禁用状态" />
        <orange-anchor-link href="checkbox3" title="按钮样式" />
        <orange-anchor-link href="checkbox4" title="可选项目数量的限制" />
        <orange-anchor-link href="api" title="API" />
      </orange-anchor>
      
      <orange-demo-block :height="80" :title="'默认样式'" id="checkbox1" introduction="通过 pattern 控制输入框样式">
        <template v-slot:demo>
          <div class="codepadding" style="display: flex;justify-content: left;">
            <orange-checkbox :options="options" :default-value="defaultValue" />
          </div>
        </template>
        <template v-slot:code>
          <code class="html">{{fCode(checkbox.code.html)}}</code>
        </template>
      </orange-demo-block>

      <orange-demo-block :height="80" :title="'禁用状态'" id="checkbox2">
        <template v-slot:demo>
          <div class="codepadding">
            <orange-checkbox :options="options" :default-value="defaultValue" :disabled="true"/>
          </div>
        </template>
        <template v-slot:code>
          <code class="html">{{fCode(checkbox.code1.html)}}</code>
        </template>
      </orange-demo-block>

      <orange-demo-block :height="80" :title="'按钮样式'" id="checkbox3">
        <template v-slot:demo>
          <div class="codepadding">
            <orange-checkbox :options="options" :default-value="defaultValue" :buttonStyle="true"/>
          </div>
        </template>
        <template v-slot:code>
          <code class="html">{{fCode(checkbox.code2.html)}}</code>
        </template>
      </orange-demo-block>

      <orange-demo-block :height="80" :title="'可选项目数量的限制'" id="checkbox4">
        <template v-slot:demo>
          <div class="codepadding">
            <orange-checkbox :options="options" :default-value="defaultValue" :maxSelection="2" />
          </div>
        </template>
        <template v-slot:code>
          <code class="html">{{fCode(checkbox.code3.html)}}</code>
        </template>
      </orange-demo-block>
  
      <div id="api">
        <h3 class="demo-table-title">API</h3>
        <P class="demo-table-introduction">属性说明如下：</P>
        <orange-table-simple :data="api" :thead="thead" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "shn-checkbox-demo",
    data() {
      return {
        options: [
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' }
        ],
        defaultValue: ['option1', 'option3'],
        thead: ["参数", "说明", "类型", "可选值", "默认值", "支持组件"],
        checkbox: {
          code: {
            html: `
            <orange-checkbox :options="options" :default-value="defaultValue" />
            `
          },
          code1: {
            html: `
            <orange-checkbox :options="options" :default-value="defaultValue" :disabled="true"/>
            `
          },
          code2: {
            html: `
            <orange-checkbox :options="options" :default-value="defaultValue" :buttonStyle="true"/>
            `
          },
          code3: {
            html: `
            <orange-checkbox :options="options" :default-value="defaultValue" :maxSelection="2" />
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
          },
          {
            parameter: "maxSelection",
            description: "可选数量最大值",
            dataTypes: "Number",
            optional: "",
            default: "Infinity",
            support: "all"
          },
          {
            parameter: "minSelection",
            description: "可选数量最小值",
            dataTypes: "Number",
            optional: "",
            default: "0",
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