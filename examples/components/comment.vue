<template>
    <div class="content-box">
      <h2 class="demo-title">Comment 评论区</h2>
  
      <orange-anchor>
        <orange-anchor-link href="Comment" title="基本样式" />
        <orange-anchor-link href="api" title="API" />
      </orange-anchor> 
      
      <orange-demo-block :height="90" :title="'基本样式'" id="Comment"> 
        <template v-slot:demo>
          <orange-comment/>
        </template>
        <template v-slot:code>
          <code class="html">{{ fCode(Comment.code.html) }}</code>
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
    name: "comment-demo",
    data() {
      return {
        // 组件
        thead: ["参数", "说明", "类型", "可选值", "默认值", "支持组件"],
        Comment: {
          code: {
            html: `
            <orange-comment/>
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
    }
  };
  </script>
  