<template>
    <div class="content-box">
      <h2 class="demo-title">Clipboard 剪贴板</h2>
  
      <orange-anchor>
        <orange-anchor-link href="clipboard1" title="固定文本内容剪贴板" />
        <orange-anchor-link href="clipboard2" title="自定义文本内容剪贴板" />
        <orange-anchor-link href="clipboard3" title="清除文本区域内容" />
        <orange-anchor-link href="api" title="API" />
      </orange-anchor> 
      
      <orange-demo-block :height="90" :title="'基本样式'" id="clipboard1" introduction="固定文本内容剪贴板--点击按钮复制文本内容"> 
        <template v-slot:demo>
          <orange-clipboard :type="'danger'" :typeIndex="'index1'" :content="'详细住址：北京市东城区长安街天安门西站'" />
        </template>
        <template v-slot:code>
          <code class="html">{{ fCode(clipboard1.code.html) }}</code>
        </template>
      </orange-demo-block>

      <orange-demo-block :height="90" id="clipboard2" introduction="自定义文本内容剪贴板--文本区域可编辑复制文本内容"> 
        <template v-slot:demo>
          <orange-clipboard :type="'default'" :typeIndex="'index2'" />
        </template>
        <template v-slot:code>
          <code class="html">{{ fCode(clipboard2.code.html) }}</code>
        </template>
      </orange-demo-block>    

      <orange-demo-block :height="90" id="clipboard3" introduction="清除文本区域内容"> 
        <template v-slot:demo>
          <orange-clipboard :type="'primary'" :typeIndex="'index3'" />
        </template>
        <template v-slot:code>
          <code class="html">{{ fCode(clipboard3.code.html) }}</code>
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
    name: "clipboard-demo",
    data() {
      return {
        thead: ["参数", "说明", "类型", "可选值", "默认值", "支持组件"],
        clipboard1: {
          code: {
            html: `
            <orange-clipboard :typeIndex="'index1'" :content="'详细住址：北京市东城区长安街天安门西站'" />
          `
          }
        },
        clipboard2: {
          code: {
            html: `
            <orange-clipboard :type="'default'" :typeIndex="'index2'" />
          `
          }
        },
        clipboard3: {
          code: {
            html: `
            <orange-clipboard :type="'primary'" :typeIndex="'index3'" />
          `
          }
        },
        api: [
          {
            parameter: "type",
            description: "颜色类型",
            dataTypes: "TypeEnums",
            optional: "danger，success，warning，primary，default",
            default: "default",
            support: "通用"
          },
          {
            parameter: "typeIndex",
            description: "剪贴板类型编号",
            dataTypes: "String",
            optional: "index1，index2，index3",
            default: "",
            support: "通用"
          },
          {
            parameter: "content",
            description: "自定义内容",
            dataTypes: "String",
            optional: "",
            default: "",
            support: "index1"
          }
        ]
      };
    }
  };
  </script>
  