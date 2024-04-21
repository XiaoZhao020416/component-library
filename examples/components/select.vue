<template>
  <div class="content-box">
    <h2 class="demo-title">Radio 单选框</h2>

    <orange-anchor>
      <orange-anchor-link href="radio1" title="默认样式" />
      <orange-anchor-link href="radio2" title="禁用状态" />
      <orange-anchor-link href="radio3" title="可清空单选" />
      <orange-anchor-link href="radio4" title="基础多选" />
      <orange-anchor-link href="api" title="API" />
    </orange-anchor>

    <orange-demo-block :height="80" :title="'默认样式'" id="radio1">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-select v-model="radio1.selectOption" :options="selectOptions" />
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(radio1.code.html)}}</code>
      </template>
    </orange-demo-block>

    <orange-demo-block :height="80" :title="'禁用状态'" id="radio2">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-select v-model="radio2.selectOption" :options="selectOptions" :disabled="true" />
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(radio2.code.html)}}</code>
      </template>
    </orange-demo-block>

    <orange-demo-block :height="80" :title="'可清空单选'" id="radio3">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-select v-model="radio3.selectOption" :options="selectOptions" :clearable="true" />
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(radio3.code.html)}}</code>
      </template>
    </orange-demo-block>

    <orange-demo-block :height="80" :title="'基础多选'" id="radio4">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-select v-model="radio4.selectOptions" :options="selectOptions" :multiple="true" />
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(radio4.code.html)}}</code>
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
    name: "shn-select-demo",
    data() {
      return {
        selectOptions: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' }
        ],
        thead: ["参数", "说明", "类型", "可选值", "默认值", "支持组件"],
        radio1: {
          selectOption: '',
          code: {
            html: `
            <orange-select v-model="radio1.selectOption" :options="selectOptions" />
            `,
            javascript: `
              data(){
                selectOption: ''
              }
            `
          },
        },
        radio2: {
          selectOption: '',
          code: {
            html: `
            <orange-select v-model="radio1.selectOption" :options="selectOptions" :disabled="true"/>
            `,
            javascript: `
              data(){
                selectOption: ''
              }
            `
          },
        },
        radio3: {
          selectOption: '',
          code: {
            html: `
            <orange-select v-model="radio1.selectOption" :options="selectOptions" :clearable="true"/>
            `,
            javascript: `
              data(){
                selectOption: ''
              }
            `
          },
        },
        radio4: {
          selectOptions: [],
          code: {
            html: `
            <orange-select v-model="radio1.selectOption" :options="selectOptions" :multiple="true"/>
            `,
            javascript: `
              data(){
                selectOptions: []
              }
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
            parameter: "clearable",
            description: "是否可以清除选项",
            dataTypes: "Boolean",
            optional: "true，false",
            default: "false",
            support: "all"
          },
          {
            parameter: "multiple",
            description: "是否多选",
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