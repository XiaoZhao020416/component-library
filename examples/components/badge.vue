<template>
    <div class="content-box">
        <h2 class="demo-title">Badge 标记组件</h2>
    
        <orange-anchor>
            <orange-anchor-link href="base" title="基础用法" />
            <orange-anchor-link href="random" title="自定义内容" />
            <orange-anchor-link href="point" title="红点标记" />
            <orange-anchor-link href="api" title="API" />
        </orange-anchor>
        
        <h3 class="demo-block-title" style="margin-top: 54px;display: block;font-weight: 400;" id="base">基础用法</h3>
        <p class="demo-introduction">展示消息数量，设置type颜色种类</p>
        <orange-demo-block :height="370"> 
            <template v-slot:demo>
                <div class="codepadding">
                    <orange-badge value="20" type="danger">
                        <orange-button size="mini">点赞</orange-button>
                    </orange-badge>
                    <orange-badge value="120" type="success">
                        <orange-button size="mini">点赞</orange-button>
                    </orange-badge>
                    <orange-badge value="99" type="primary">
                        <orange-button size="mini">评论</orange-button>
                    </orange-badge>
                    <orange-badge value="5" type="warning">
                        <orange-button size="mini">评论</orange-button>
                    </orange-badge>
                </div>
            </template>
            <template v-slot:code>
                <code class="html">{{ fCode(base.code.html) }}</code>
            </template>
        </orange-demo-block> 

        <orange-demo-block :height="240" :title="'自定义内容'" id="random" introduction="显示数字以外的文本内容">
            <template v-slot:demo>
                <div class="codepadding">
                    <orange-badge value="new" type="danger">
                        <orange-button size="mini">点赞</orange-button>
                    </orange-badge>
                    <orange-badge value="hot" type="primary">
                        <orange-button size="mini">评论</orange-button>
                    </orange-badge>
                </div>
            </template>
            <template v-slot:code>
                <code class="html">{{ fCode(random.code.html) }}</code>
            </template>
        </orange-demo-block>    

        <orange-demo-block :height="240" :title="'红点标记'" id="point" introduction="以红点的形式标注需要关注的内容">
            <template v-slot:demo>
                <div class="codepadding">
                    <orange-badge value="new" type="danger" dot="true">
                        <span style="font-size: 13px;">订阅号消息</span>
                    </orange-badge>
                    <orange-badge value="hot" type="primary" dot="true">
                        <orange-button size="mini">评论</orange-button>
                    </orange-badge>
                </div>
            </template>
            <template v-slot:code>
                <code class="html">{{ fCode(point.code.html) }}</code>
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
    name: "badge-demo",
    data() {
      return {
        thead: ["参数", "说明", "类型", "可选值", "默认值", "支持组件"],
        base: {
          code: {
            html: `
            <div class="codepadding">
                <orange-badge value="20" type="danger">
                    <orange-button size="mini">点赞</orange-button>
                </orange-badge>
                <orange-badge value="120" type="success">
                    <orange-button size="mini">点赞</orange-button>
                </orange-badge>
                <orange-badge value="99" type="primary">
                    <orange-button size="mini">评论</orange-button>
                </orange-badge>
                <orange-badge value="5" type="warning">
                    <orange-button size="mini">评论</orange-button>
                </orange-badge>
            </div>
          `
          }
        },
        random: {
          code: {
            html: `
            <div class="codepadding">
                <orange-badge value="new" type="danger">
                    <orange-button size="mini">点赞</orange-button>
                </orange-badge>
                <orange-badge value="hot" type="primary">
                    <orange-button size="mini">评论</orange-button>
                </orange-badge>
            </div>
          `
          }
        },
        point: {
          code: {
            html: `
            <div class="codepadding">
                <orange-badge value="new" type="danger" dot="true">
                    订阅号消息
                </orange-badge>
                <orange-badge value="hot" type="primary" dot="true">
                    <orange-button size="mini">评论</orange-button>
                </orange-badge>
            </div>
          `
          }
        },
        api: [
          {
            parameter: "value",
            description: "显示值",
            dataTypes: "String",
            optional: "-",
            default: "-",
            support: "Badge"
          },
          {
            parameter: "dot",
            description: "显示为圆点",
            dataTypes: "Boolean",
            optional: "true，false",
            default: "false",
            support: "Badge"
          },
          {
            parameter: "type",
            description: "标记类型",
            dataTypes: "TypeEnums",
            optional: "danger，success，warning，primary，default",
            default: "default",
            support: "Badge"
          }
        ]
      };
    }
  };
</script>

<style scoped>
::v-deep .orange-button, .orange-button--default, .orange-button--mini {
    color: #fff;
    background-color: #409eff;
    border: none;
}

.codepadding {
    display: flex; 
    align-items: center;
    justify-content: space-around;
    padding: 16px;
}
</style>