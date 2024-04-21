<template>
    <div class="content-box">
      <h2 class="demo-title">代码编辑器</h2>
  
      <orange-anchor>
        <orange-anchor-link href="codeboard" title="基本样式" />
        <orange-anchor-link href="codeboard1" title="可执行编辑器" />
        <orange-anchor-link href="api" title="API" />
      </orange-anchor> 
      
      <orange-demo-block :height="90" :title="'基本样式'" id="codeboard"> 
        <template v-slot:demo>
          <orange-codeboard :initialValue="initialContent" @initialValueChanged="handleInitialValueChanged"/>
        </template>
        <template v-slot:code>
          <code class="html">{{ fCode(codeboard.code.html) }}</code>
        </template>
      </orange-demo-block> 
      
      <orange-demo-block :height="200" :title="'可执行编辑器'" id="codeboard1"> 
        <template v-slot:demo>
          <orange-codeboard :initialValue="initialContent" :allow-output="true" @initialValueChanged="handleInitialValueChanged"/>
        </template>
        <template v-slot:code>
          <code class="html">{{ fCode(codeboard.code.html) }}</code>
        </template>
      </orange-demo-block>  
  
      <!-- API -->
      <div id="api">
        <h3 class="demo-table-title">API</h3>
        <p class="demo-table-introduction">属性说明如下：</p>
        <orange-table-simple :data="api" :thead="thead" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "codeboard-demo",
    data() {
      return {
        initialContent: 'console.log("Hello, World!");',
        // 组件
        thead: ["参数", "说明", "类型", "可选值", "默认值", "支持组件"],
        codeboard: {
          code: {
            html: `
            <orange-codeboard :initialContent="initialContent" />
            javascript：
            data() {
              return {
                initialContent: 'console.log("Hello, World!");'
              }
            }
          `
          }
        },
        api: [
          {
            parameter: "initial",
            description: "默认内容",
            dataTypes: "String",
            optional: "",
            default: 'console.log("Hello, World!");',
            support: ""
          }
        ]
      };
    },
    methods: {
      handleInitialValueChanged(newInitialValue) {
        console.log('New initial value:', newInitialValue);
      }
    }
  };
  </script>
  